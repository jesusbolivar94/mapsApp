import { ActionTree } from 'vuex';
import { placesState } from './state';
import { StateInterface } from '../index';

const actions: ActionTree<placesState, StateInterface> = {
    someAction( /*{ commit }, payload  */ ) {
        // a line to prevent linter errors
    }
}

export default actions;