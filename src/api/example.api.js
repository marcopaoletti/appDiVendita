import { URL_EXAMPLE } from 'react-native-dotenv';
import axios from 'axios';

export const exampleGetUser = () => axios.get(`${URL_EXAMPLE}/users`);
