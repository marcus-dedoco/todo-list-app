import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;

    if (
      window.location.pathname !== '/dashboard' ||
      window.location.pathname === '/'
    ) {
      window.location.pathname = '/dashboard';
    }
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
