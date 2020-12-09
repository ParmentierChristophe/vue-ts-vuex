import { UserState } from '../login/store/auth.types';
import axios from 'axios';
import { LOGIN } from '@/utils/endPoints';
import TokenService from './token.service';

const AuthService = {
  async login(user: UserState) {
    await axios
      .post(LOGIN, user)
      .then(response => {
        if (response.data) {
          TokenService.saveToken(response.data.token);
          TokenService.saveheader(response.headers);
        }
        return response;
      })
      .catch(error => {
        return error;
      });
  },

  logout() {
    TokenService.removeToken();
    TokenService.removeHeader();
  }
};

export default AuthService;
