import axios from 'axios';
import TokenService from '@/services/token.service';

class RequestManager {
  static setHeader(headers: { [key: string]: string } = {}) {
    axios.defaults.headers.common['Authorization'] = TokenService.getToken();
    Object.keys(headers).forEach(
      key => (axios.defaults.headers.common[key] = headers[key])
    );
  }

  static removeHeader() {
    axios.defaults.headers.common = {};
  }
}

export default RequestManager;
