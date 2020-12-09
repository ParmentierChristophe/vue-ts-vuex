import { ActionTree } from 'vuex';
import {
  AuthState,
  LOGOUT_SUCCESS,
  LOGIN_SUCCESS,
  IS_LOADING,
  SET_ERROR,
  SET_USER
} from './auth.types';
import router from '../../router/index';
import AuthService from '@/services/auth.service';
import TokenService from '@/services/token.service';

export const actions: ActionTree<AuthState, any> = {
  logout({ commit }) {
    //   Call logout services
    AuthService.logout();
    commit(LOGOUT_SUCCESS);
    router.push('/login');
  },

  login({ commit }, user) {
    commit(IS_LOADING);
    AuthService.login(user)
      .then(response => {
        const token = TokenService.getToken() || '';
        commit(LOGIN_SUCCESS, token);
        commit(SET_USER, response);
      })
      .catch(error => commit(SET_ERROR, error));
  }
};
