import { GetterTree } from 'vuex';
import { placesState } from './state';
import { StateInterface } from '../index';

const getters: GetterTree<placesState, StateInterface> = {
    isUserLocationReady( state ) {
        return !!state.userLocation
    }
}

export default getters;