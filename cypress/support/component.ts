const { VITE_ENV } = import.meta.env;
import axios from 'axios';
import './commands';

before(() => {
  axios.defaults.baseURL = import.meta.env[`VITE_API_BASE_URL_${VITE_ENV}`];
});
