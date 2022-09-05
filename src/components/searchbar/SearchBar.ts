import {defineComponent, ref, computed} from 'vue'
import SearchResults from '@/components/search-results/SearchResults.vue'
import {usePlacesStore} from '@/composables'

export default defineComponent({
    name: 'SearchBar',
    components: {
        SearchResults,
    },
    setup() {

        const debounceTimeout = ref()
        const debounceValued = ref()

        const { searchPlacesByTerm } = usePlacesStore()

        return {
            debounceValued,
            searchTerm: computed({
                get() {
                    return debounceValued.value
                },
                set( val: string ) {

                    if ( debounceTimeout.value ) clearTimeout( debounceTimeout.value )

                    debounceTimeout.value = setTimeout(async() => {
                        debounceValued.value = val
                        await searchPlacesByTerm(val)
                    }, 500)
                }
            })
        }
    }
})