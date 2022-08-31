import { GetterTree } from 'vuex';
import { placesState } from './state';
import { StateInterface } from '../index';

const getters: GetterTree<placesState, StateInterface> = {
    someGetter( /* state */ ) {
        // return true;
    }
}

export default getters;