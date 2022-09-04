import {defineComponent, onMounted, ref, watch} from 'vue'
import {usePlacesStore} from "@/composables";
// @ts-ignore
import mapboxgl from "mapbox-gl";

export default defineComponent({
    name: 'MapView',
    setup () {
        const mapElement = ref<HTMLDivElement>();

        const { userLocation, isUserLocationReady } = usePlacesStore()

        const initMap = async() => {

            if ( !mapElement.value ) throw new Error('Div Element no existe')
            if ( !userLocation.value ) throw new Error('user location no existe')

            await Promise.resolve()

            const map = new mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15, // starting zoom
            });
        }

        onMounted(() => {
            if ( isUserLocationReady.value )
                return initMap()

            console.log('No tengo localización aún')
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