export const assert = (condition: boolean, msg: any) => {
  if (!condition) throw new Error(`[dashboard]${msg}`);
};
