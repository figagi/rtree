const isMicroMode = !!window.__POWERED_BY_QIANKUN__;

export const assert = (condition: boolean, msg: any) => {
  if (!condition) throw new Error(`[dashboard]${msg}`);
};
