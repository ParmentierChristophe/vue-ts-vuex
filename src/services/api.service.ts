import axios from 'axios';
import TokenService from './token.service';
import AuthService from './auth.service';
import router from '@/router';
import store from '../store';

const ApiService = {
  setHeader() {
    axios.defaults.headers.common['Authorization'] = TokenService.getToken();
  },

  removeHeader() {
    axios.defaults.headers.common = {};
  },

  setAxiosInterceptor() {
    axios.interceptors.response.use(
      config => config,
      error => {
        if (error.response.status === 401) {
          store.dispatch('AuthStore/logout');
          router.push('/login');
        }
        return Promise.reject(error);
      }
    );
  }
};

export default ApiService;
