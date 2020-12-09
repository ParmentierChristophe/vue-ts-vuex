import { GetterTree } from 'vuex';
import { AuthState } from './auth.types';

export const getters: GetterTree<AuthState, any> = {
  isLoggedIn: state => !!state.token,
  isLoading: state => state.loading,
  getUser: state => state.user
};
