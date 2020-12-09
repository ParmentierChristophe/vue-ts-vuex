import RequestManager from '@/utils/requestManager';

const TOKEN_KEY = 'token';
const REQUEST_HEADER = 'request_header';

const TokenService = {
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },

  saveToken(accessToken: string) {
    localStorage.setItem(TOKEN_KEY, accessToken);
  },

  removeToken() {
    localStorage.removeItem(TOKEN_KEY);
  },

  getheader() {
    return localStorage.getItem(REQUEST_HEADER);
  },
  saveheader(headers: any) {
    this.setheader();
    localStorage.setItem(REQUEST_HEADER, JSON.stringify(headers));
  },
  setheader() {
    const header = JSON.parse(this.getheader() || '{}');
    RequestManager.setHeader(header);
  },
  removeHeader() {
    RequestManager.removeHeader();
    localStorage.removeItem(REQUEST_HEADER);
  }
};

export default TokenService;
