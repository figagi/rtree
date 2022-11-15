import axios from "axios";
import { message } from "antd";
import { assert } from ".";
import { HTTP_STATUS } from "../consts/statusCode";
import { USER_CACHE_KEY } from "../consts";

axios.defaults.withCredentials = true;
axios.defaults.timeout = 50000;
axios.defaults.headers.common["Content-Type"] = "application/json";

// 中间件 拦截请求-
axios.interceptors.request.use(
  (config: any) => {
    const userInfo = localStorage.getItem(USER_CACHE_KEY);
    if (userInfo) {
      const { access_token } = JSON.parse(userInfo);
      if (access_token) {
        config.headers.Authorization = `Bearer ${access_token}`;
      }
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  (response) => {
    // if (response?.data?.code === 40004 || response?.data?.code === 40001) {
    //   message.error("登陆失效，请重新登陆");
    //   window.location.href = "/login";
    // }
    return response;
  },
  (err) => {
    if (!err.response) {
      // apiError('ApiError', err)
      return;
    }
    const res = err.response;
    if (res.status === HTTP_STATUS.AUTHENTICATE) {
      window.location.href = "/login";
      return Promise.reject(err);
    }
    message.error(`${res.data.message}`);
    return Promise.reject(err);
  }
);

const exceptionHandling = (data: any) => {
  if (!data) {
    return false;
  }

  if (
    data.status === HTTP_STATUS.SUCCESS ||
    data.status === HTTP_STATUS.NOT_MODIFIED
  ) {
    return data;
  }
  assert(false, data.statusText);

  return false;
};

const safeRequest = (url: string, options: any) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      ...options,
      url,
    }).then(
      (response) => {
        const res = exceptionHandling(response);
        if (res) {
          resolve(res.data);
        } else {
          reject(res);
        }
      },
      (err) => {
        reject(err);
      }
    );
  });
};

/**
 * get
 * @param url
 * @param opts
 * @returns {Promise}
 */
const get = (url: string, data: object, opts = {}) => {
  return safeRequest(url, {
    params: data,
    ...opts,
    method: "GET",
  });
};

/**
 * post
 * @param url
 * @param opts
 * @returns {Promise}
 */
const post = (url: string, data: object, opts = {}) => {
  return safeRequest(url, { data, ...opts, method: "POST" });
};

/**
 * put
 * @param url
 * @param opts
 * @returns {Promise}
 */
const put = (url: string, data: object, opts = {}) => {
  return safeRequest(url, { data, ...opts, method: "PUT" });
};

export default {
  get,
  post,
  put,
};
