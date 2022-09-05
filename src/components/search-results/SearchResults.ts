import {defineComponent, ref, watch} from 'vue'
import {useMapStore, usePlacesStore} from '@/composables'
import {Feature} from '@/interfaces/places'

export default defineComponent({
    name: 'SearchResults',
    setup() {

        const { places, isLoadingPlaces } = usePlacesStore()
        const { map, setPlaceMarkers } = useMapStore()
        const activePlace = ref('')

        watch( places, (newPlaces) => {
            activePlace.value = ''
            setPlaceMarkers(newPlaces)
        } )

        return {
            places,
            isLoadingPlaces,
            activePlace,

            onPlaceClick: ( place:Feature ) => {
                activePlace.value = place.id
                const [ lng, lat ] = place.center

                map.value?.flyTo({
                    zoom: 15,
                    center: [ lng, lat ]
                })
            }
        }
    }
})