export interface UserState {
  email: string;
  password: string;
}

export interface AuthState {
  loading: boolean;
  user: UserState | null;
  token: string | null;
  error: string | null;
}

export const IS_LOADING = 'is loading';
export const LOGIN_SUCCESS = 'login success';
export const LOGOUT_SUCCESS = 'logout success';
export const SET_ERROR = 'set error';
export const SET_USER = 'set user info';
