import { User, State } from './userModel.model';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<State> = {
  usersLoaded(state, payload: User[]) {
    state.users = payload;
  }
};
