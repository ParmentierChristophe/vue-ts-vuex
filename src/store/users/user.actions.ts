import { ActionTree } from 'vuex';
import { State } from './userModel.model';
import { getUsers } from '@/services/fetchData';

export const actions: ActionTree<State, null> = {
  fetchDataUsers({ commit }): void {
    getUsers().then(users => {
      commit('usersLoaded', users.data.users);
    });
  }
};
