import {defineComponent, onMounted, ref, watch} from 'vue'
import {usePlacesStore, useMapStore} from "@/composables";
// @ts-ignore
import mapboxgl from "mapbox-gl";

export default defineComponent({
    name: 'MapView',
    setup () {
        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserLocationReady } = usePlacesStore()
        const { setMap } = useMapStore()


        const initMap = async() => {

            if ( !mapElement.value ) throw new Error('Div Element no existe')
            if ( !userLocation.value ) throw new Error('user location no existe')

            await Promise.resolve()

            const map = new mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/dark-v10', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15, // starting zoom
            });

            const myLocationPopup = new mapboxgl.Popup({ offset: [0, 0]})
                .setLngLat( userLocation.value )
                .setHTML(`
                    <h4>Aquí estoy</h4>
                    <p>${ userLocation.value }</p>
                `)

            const myLocationMarker = new mapboxgl.Marker()
                .setLngLat(userLocation.value)
                .setPopup(myLocationPopup)
                .addTo(map)

            // TODO establecer el mapa en Vuex
            setMap( map )
        }

        onMounted(() => {
            if ( isUserLocationReady.value )
                return initMap()
        })

        watch( isUserLocationReady, ( newVal ) => {
            if ( isUserLocationReady.value ) initMap()
        })

        return {
            isUserLocationReady,
            mapElement
        }
    }
})