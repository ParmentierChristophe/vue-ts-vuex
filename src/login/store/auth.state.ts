import { AuthState } from './auth.types';

export const state: AuthState = {
  loading: false,
  user: null,
  token: localStorage.getItem('token') || '',
  error: null
};
