import { MutationTree } from 'vuex';
import { placesState } from './state';

const mutation: MutationTree<placesState> = {
    someMutation( /* state: placesState */) {
        // a line to prevent linter errors
    }
}

export default mutation;