import Axios from 'axios';
const baseURL = `${process.env.PROTOCOL}://${process.env.NODE_ENV === "production" ? process.env.PROXY_HOST : location.hostname}:${process.env.PROXY_PORT}`
Axios.defaults.baseURL = baseURL;
Axios.defaults.timeout = 60000;
// Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
Axios.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8';

// Add a request interceptor
Axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
 

// Add a response interceptor
Axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default Axios;