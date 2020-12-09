import { Module } from 'vuex';
import { mutations } from './auth.mutations';
import { actions } from './auth.actions';
import { state } from './auth.state';
import { getters } from './auth.getters';
import { AuthState } from './auth.types';

export const AuthStore: Module<AuthState, any> = {
  namespaced: true,
  mutations,
  actions,
  state,
  getters
};
