import { MutationTree } from 'vuex';
import { placesState } from './state';
import {Feature} from '@/interfaces/places'

const mutation: MutationTree<placesState> = {
    setLngLat( state: placesState, { lng, lat }: { lng: number, lat: number } ) {
        state.userLocation = [ lng, lat ]
        state.isLoading = false
    },
    setIsLoadingPlaces( state ) {
        state.isLoadingPlaces = true
    },
    setPlaces( state, places: Feature[] ) {
        state.places = places
        state.isLoadingPlaces = false
    },
}

export default mutation;