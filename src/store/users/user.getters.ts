import { GetterTree } from 'vuex';
import { State } from './userModel.model';

export const getters: GetterTree<State, null> = {
  getUsers: state => state.users
};
