import { USERS } from './../utils/endPoints';
import axios from 'axios';

export function getUsers() {
  return axios.get(USERS);
}
