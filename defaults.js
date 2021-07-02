import { HTTP_GET, CONTENT_TYPE_FORM_URLENCODED } from "./const.js"
/**
 * 默认参数
 * @param {String} DEFAULT.methods
 * @param {Object} DEFAULT.params
 * @param {Object} DEFAULT.data
 */
const DEFAULT = {
  method: HTTP_GET,
  // 请求头携带的数据
  params: null,
  // 请求体携带的数据
  data: null,
  contentType: CONTENT_TYPE_FORM_URLENCODED,
  responseType: '',
  timeoutTime: 0,
  // 是否携带 cookie
  withCredentials: false,
  // 是否为异步
  async: true,
  success() { },
  httpCodeError() { },
  error() { },
  abort() { },
  timeout() { }
}
export { DEFAULT }