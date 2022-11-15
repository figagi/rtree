// 如果需要配多环境支持，请到 environments

// 判断当前是哪个环境
export const currentEnv = process.env.CRP_ENV;
const { CRP_API_PREFIX_ONE, CRP_API_PREFIX_TWO } = process.env;
const ctext = currentEnv !== 'prod' ? `CRP${currentEnv}` : 'CRP';

// 不要删除，用来识别当前项目环境
console.log(
  `\n %c ${ctext} %c https://crpjs.com \n`,
  'color: #fff; background: #03a8e8; padding:5px 0; font-size:12px;font-weight: bold;',
  'background: #03a8e8; padding:5px 0; font-size:12px;',
);

export const isDevEnv = currentEnv === 'dev';
export const isPreEnv = currentEnv === 'pre';
export const isTestEnv = currentEnv === 'test';
export const isProdEnv = currentEnv === 'prod';

// const apiPrefixOne = {
//   dev: "https://testapi.crpjs.com/v1",
//   test: "https://testapi.crpjs.com/v1",
//   pre: "https://api.crpjs.com/v1",
//   prod: "https://api.crpjs.com/v1",
// }[currentEnv];

// 多服务配置：适用于一个项目有多个后端前缀
export const API = {
  ONE_API: CRP_API_PREFIX_ONE,
  TWO_API: CRP_API_PREFIX_TWO,
  QINIU_IMG_HOST: `https://img.crpjs.com/`,
};
