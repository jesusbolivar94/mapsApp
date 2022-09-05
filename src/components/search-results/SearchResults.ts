import {defineComponent, ref} from 'vue'
import {useMapStore, usePlacesStore} from '@/composables'
import {Feature} from '@/interfaces/places'

export default defineComponent({
    name: 'SearchResults',
    setup() {

        const { places, isLoadingPlaces } = usePlacesStore()
        const { map } = useMapStore()
        const activePlace = ref('')

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