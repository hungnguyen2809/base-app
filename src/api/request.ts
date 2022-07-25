import axios, { AxiosRequestConfig } from 'axios';
import merge from 'lodash/merge';
import QueryString from 'qs';

axios.defaults.timeout = 20000;
axios.defaults.timeoutErrorMessage = 'Lỗi kết nối đến máy chủ. Vui lòng thử lại';
axios.defaults.paramsSerializer = (params) => QueryString.stringify(params, { indices: false });

const apiApp = axios.create({
  baseURL: '',
});

const configure = (config: AxiosRequestConfig) => {
  const targetConfig: AxiosRequestConfig = {
    headers: {},
  };

  return merge(config, targetConfig);
};

apiApp.interceptors.request.use(
  (config) => Promise.resolve(configure(config)),
  (error) => Promise.reject(error),
);
