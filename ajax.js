import { DEFAULT } from "./defaults.js"
import { HTTP_GET, CONTENT_TYPE_FORM_URLENCODED, CONTENT_TYPE_JSON } from "./const.js"
import { serialize, addUrlData, serializeJSON } from './utils.js'
/**
 * Ajax 类
 */
class Ajax {
  constructor(url, options) {
    this.url = url
    this.options = Object.assign({}, DEFAULT, { ...options },)
    // 初始化
    this.init()
  }
  // 初始化定义
  init() {
    const xhr = new XMLHttpRequest()
    this.xhr = xhr
    this.bindEvent()
    xhr.open(this.options.method, this.url + this.addParams(), this.options.async)
    // 设置 responseType
    this.setResponseType()
    // 设置 跨域是否携带 cookie
    this.setCookie()
    // 设置 超时时间
    this.setTimeoutTime()
    // 发送请求
    this.sendData()
  }
  // 是否需要发送数据
  isSendData() {
    const { data, method } = this.options;
    if (!data) return false;
    if (method.toLowerCase() === HTTP_GET.toLowerCase()) return false;
    return true;
  }
  // 是否 formData
  isFormData() {
    return this.options.data instanceof FormData
  }
  // 是否是 form-urlencoded
  isFormUrlencoded() {
    return String(this.options.contentType).toLocaleLowerCase().includes(CONTENT_TYPE_FORM_URLENCODED)
  }
  // 是否是 json 格式
  isJsonData() {
    return String(this.options.contentType).toLocaleLowerCase().includes(CONTENT_TYPE_JSON)
  }
  // 设置 Content-Type
  setContentType(contentType = this.options.contentType) {
    if (!contentType) return;
    this.xhr.setRequestHeader('Content-Type', contentType);
  }

  // 发送请求
  sendData() {
    const xhr = this.xhr
    const { data } = this.options
    let resultData = null
    if (!this.isSendData()) {
      return xhr.send(null);
    }
    if (this.isFormData()) {
      resultData = data
    } else if (this.isFormUrlencoded()) {
      this.setContentType(CONTENT_TYPE_FORM_URLENCODED)
      resultData = serialize(data)
    } else if (this.isJsonData()) {
      this.setContentType(CONTENT_TYPE_JSON)
      resultData = serializeJSON(data)
    } else {
      resultData = data
    }
    xhr.send(resultData)
  }
  // 设置 超时时间
  setTimeoutTime() {
    if (this.options.timeoutTime > 0) {
      this.xhr.timeout = this.options.timeoutTime
    }
  }
  // 设置 跨域是否携带 cookie
  setCookie() {
    if (this.options.withCredentials) {
      this.xhr.withCredentials = true
    }

  }
  // 设置 responseType
  setResponseType() {
    this.xhr.responseType = this.options.responseType
  }
  // 添加参数
  addParams() {
    const { params } = this.options
    if (!params) return ''
    if (params.constructor !== Object) {
      throw ('`params` Argument must be in object format')
    }
    return addUrlData(this.url, serialize(params))
  }
  // 检测状态码事件
  bindEvent() {
    const xhr = this.xhr
    const { success, httpCodeError, error, abort, timeout } = this.options
    // 监听状态码
    xhr.addEventListener('load', () => {
      if (this.isStatusOk()) {
        success(typeof (xhr.response) == 'string' ? JSON.parse(xhr.response) : xhr.response, xhr)
      } else {
        httpCodeError(xhr.status, xhr)
      }
    })
    // 检测是否异常
    xhr.addEventListener('error', (err) => {
      error(err, xhr)
    })
    // 监听中断
    xhr.addEventListener('abort', (err) => {
      abort(err, xhr)
    })
    // 监听超时
    xhr.addEventListener('timeout', (err) => {
      timeout(err, xhr)
    })
  }

  // 检测 HTTP 状态码是否为正常
  isStatusOk() {
    const xhr = this.xhr
    return (xhr.status >= 200 && xhr.status < 300) || xhr.status === 304
  }

  // 获取 XHR 对象
  getXHR() {
    return this.xhr
  }
}

export default Ajax;