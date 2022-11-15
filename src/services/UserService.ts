import request from '@/utils/request';
import { API } from '@/consts/env';
const baseUrl = `${API.ONE_API}/v1`;
// 知识库分类添加
// http://api.crpjs.com/ 接口文档地址
//
const login = (payload: any) => {
  return request.post(`${baseUrl}/login`, payload);
};
