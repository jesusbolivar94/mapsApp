import {defineComponent} from 'vue'
import {usePlacesStore} from '@/composables'

export default defineComponent({
    name: 'SearchResults',
    setup() {

        const { places, isLoadingPlaces } = usePlacesStore()

        return {
            places,
            isLoadingPlaces
        }
    }
})