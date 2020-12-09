import { MutationTree } from 'vuex';
import {
  IS_LOADING,
  AuthState,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SET_ERROR,
  SET_USER
} from './auth.types';

export const mutations: MutationTree<AuthState> = {
  [IS_LOADING](state) {
    state.loading = true;
  },

  [LOGIN_SUCCESS](state, accessToken) {
    state.token = accessToken;
    state.loading = false;
    state.error = null;
  },

  [LOGOUT_SUCCESS](state) {
    state.token = null;
    state.user = null;
    state.loading = false;
    state.error = null;
  },

  [SET_ERROR](state, error) {
    state.error = error;
    state.loading = false;
    state.token = null;
  },

  [SET_USER](state, user) {
    state.user = user;
    state.loading = false;
    state.error = null;
  }
};
