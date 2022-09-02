import { ActionTree } from 'vuex';
import { placesState } from './state';
import { StateInterface } from '../index';

const actions: ActionTree<placesState, StateInterface> = {
    getInitialLocation( { commit } ) {
        // TODO colocar loading
        navigator.geolocation.getCurrentPosition(
            ( { coords } ) => commit(
                'setLngLat', {lng: coords.longitude, lat: coords.latitude}
            ),
            ( err ) => {
                console.error(err)
                throw new Error('No geolocation :(')
            }
        )
    }
}

export default actions;