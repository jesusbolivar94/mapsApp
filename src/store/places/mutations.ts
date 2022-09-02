import { MutationTree } from 'vuex';
import { placesState } from './state';

const mutation: MutationTree<placesState> = {
    setLngLat( state: placesState, { lng, lat }: { lng: number, lat: number } ) {
        state.userLocation = [ lng, lat ]
        state.isLoading = false
    }
}

export default mutation;