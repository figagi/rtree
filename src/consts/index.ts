export const REG = {
  EMAIL: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
  URL: /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i,
};

/**
 * 用户信息缓存key
 * access_token登录token
 */
export const USER_CACHE_KEY = 'fems-user';

/** 默认跳转页面 */
export const DEFAULT_HOME_PAGE = '/app/news/newsList';
