import {MutationTree} from 'vuex'
import {MapState} from './state'
import Mapboxgl from 'mapbox-gl'
import {Feature} from '@/interfaces/places'
import mapboxgl from 'mapbox-gl'

const mutation: MutationTree<MapState> = {
    setMap(state, map: Mapboxgl.Map) {
        state.map = map
    },

    setDistanceDuration( state, { distance, duration }:{distance: number, duration: number} ) {

        let kms = distance / 1000
            kms = Math.round( kms * 100 )
            kms /= 100

        state.distance = kms
        state.duration = Math.floor( duration / 60 )
    },

    setPlaceMarkers(state, places: Feature[]) {
        // borrar marcadores
        state.markers.forEach(marker => marker.remove())
        state.markers = []

        if (!state.map) return

        // Crear los nuevos marcadores
        for (const place of places) {
            const [lng, lat] = place.center

            const popup = new mapboxgl.Popup({offset: [0, 0]})
                .setLngLat([lng, lat])
                .setHTML(`
                    <h4>${place.text}</h4>
                    <p>${place.place_name}</p>
                `)

            const marker = new mapboxgl.Marker()
                .setLngLat([lng, lat])
                .setPopup(popup)
                .addTo(state.map)

            state.markers.push(marker)
        }

        // Clear Polyline
        if ( state.map.getLayer('RouteString') ) {
            state.map.removeLayer('RouteString')
            state.map.removeSource('RouteString')
            state.distance = undefined
            state.duration = undefined
        }
    },
    setRoutePolyline( state, cords: number[][] ) {

        const start = cords[0]
        const end = cords[ cords.length - 1 ]

        // Definir los bounds
        const bounds = new Mapboxgl.LngLatBounds(
            [start[0], start[1]],
            [start[0], start[1]]
        )

        // Agregamos cada punto al bounds
        for (const coord of cords) {
            const newCoord: [number, number] = [coord[0], coord[1]]
            bounds.extend( newCoord )
        }

        state.map?.fitBounds( bounds, {
            padding: 200
        } )

        // Polyline
        // @ts-ignore
        const sourceData = Mapboxgl.AnySourceData = {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Features',
                        properties: {},
                        geometry: {
                            type: 'LineString',
                            coordinates: cords
                        }
                    }
                ],
            }
        }

        if ( state.map?.getLayer('RouteString') ) {
            state.map.removeLayer('RouteString')
            state.map.removeSource('RouteString')
        }

        // @ts-ignore
        state.map?.addSource('RouteString', sourceData)

        state.map?.addLayer({
            id: 'RouteString',
            type: 'line',
            source: 'RouteString',
            layout: {
                'line-cap': 'round',
                'line-join': 'round'
            },
            paint: {
                'line-color': 'green',
                'line-width': 3
            }
        })

    }
}

export default mutation