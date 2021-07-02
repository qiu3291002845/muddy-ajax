import Ajax from './ajax.js'
import {
  ERROR_HTTP_CODE,
  ERROR_HTTP_TEXT,
  ERROR_REQUEST_CODE,
  ERROR_REQUEST_TEXT,
  ERROR_TIMEOUT_CODE,
  ERROR_TIMEOUT_TEXT,
  ERROR_ABORT_CODE,
  ERROR_ERROR_ABORT_TEXT
} from "./const.js"

const MuddyAjax = (url, options) => {
  let xhr = null
  const promise = new Promise((resolve, reject) => {
    xhr = new Ajax(url, {
      ...options, ...{
        success(response) {
          resolve(response)
        },
        httpCodeError: err => {
          reject({
            type: ERROR_HTTP_CODE,
            text: `${ERROR_HTTP_TEXT} ${err}`
          })
        },
        error: err => {
          reject({
            type: ERROR_REQUEST_CODE,
            text: `${ERROR_REQUEST_TEXT} ${err}`
          })
        },
        abort: err => {
          reject({
            type: ERROR_ABORT_CODE,
            text: `${ERROR_ABORT_TEXT} ${err}`
          })
        },
        timeout: err => {
          reject({
            type: ERROR_TIMEOUT_CODE,
            text: `${ERROR_TIMEOUT_TEXT} ${err}`
          })
        }
      }
    }).getXHR()
  })
  promise.xhr = xhr
  promise.ERROR_HTTP_CODE = ERROR_HTTP_CODE
  promise.ERROR_REQUEST_CODE = ERROR_REQUEST_CODE
  promise.ERROR_ABORT_CODE = ERROR_ABORT_CODE
  promise.ERROR_TIMEOUT_CODE = ERROR_TIMEOUT_CODE
  return promise
}

const get = (url, options) => {
  return MuddyAjax(url, {
    ...options, ...{
      success(response) {
        resolve(response)
      },
      httpCodeError: err => {
        reject({
          type: ERROR_HTTP_CODE,
          text: `${ERROR_HTTP_TEXT} ${err}`
        })
      },
      error: err => {
        reject({
          type: ERROR_REQUEST_CODE,
          text: `${ERROR_REQUEST_TEXT} ${err}`
        })
      },
      abort: err => {
        reject({
          type: ERROR_ABORT_CODE,
          text: `${ERROR_ABORT_TEXT} ${err}`
        })
      },
      timeout: err => {
        reject({
          type: ERROR_TIMEOUT_CODE,
          text: `${ERROR_TIMEOUT_TEXT} ${err}`
        })
      }
    },
    method: 'GET',
  })
}
const getJSON = (url, options) => {
  return MuddyAjax(url, {
    ...options, ...{
      success(response) {
        resolve(response)
      },
      httpCodeError: err => {
        reject({
          type: ERROR_HTTP_CODE,
          text: `${ERROR_HTTP_TEXT} ${err}`
        })
      },
      error: err => {
        reject({
          type: ERROR_REQUEST_CODE,
          text: `${ERROR_REQUEST_TEXT} ${err}`
        })
      },
      abort: err => {
        reject({
          type: ERROR_ABORT_CODE,
          text: `${ERROR_ABORT_TEXT} ${err}`
        })
      },
      timeout: err => {
        reject({
          type: ERROR_TIMEOUT_CODE,
          text: `${ERROR_TIMEOUT_TEXT} ${err}`
        })
      }
    },
    method: 'GET',
    responseType: 'json'
  })
}
const post = (url, options) => {
  return MuddyAjax(url, {
    ...options, ...{
      success(response) {
        resolve(response)
      },
      httpCodeError: err => {
        reject({
          type: ERROR_HTTP_CODE,
          text: `${ERROR_HTTP_TEXT} ${err}`
        })
      },
      error: err => {
        reject({
          type: ERROR_REQUEST_CODE,
          text: `${ERROR_REQUEST_TEXT} ${err}`
        })
      },
      abort: err => {
        reject({
          type: ERROR_ABORT_CODE,
          text: `${ERROR_ABORT_TEXT} ${err}`
        })
      },
      timeout: err => {
        reject({
          type: ERROR_TIMEOUT_CODE,
          text: `${ERROR_TIMEOUT_TEXT} ${err}`
        })
      }
    },
    method: 'post',
  })
}

const put = (url, options) => {
  return MuddyAjax(url, {
    ...options, ...{
      success(response) {
        resolve(response)
      },
      httpCodeError: err => {
        reject({
          type: ERROR_HTTP_CODE,
          text: `${ERROR_HTTP_TEXT} ${err}`
        })
      },
      error: err => {
        reject({
          type: ERROR_REQUEST_CODE,
          text: `${ERROR_REQUEST_TEXT} ${err}`
        })
      },
      abort: err => {
        reject({
          type: ERROR_ABORT_CODE,
          text: `${ERROR_ABORT_TEXT} ${err}`
        })
      },
      timeout: err => {
        reject({
          type: ERROR_TIMEOUT_CODE,
          text: `${ERROR_TIMEOUT_TEXT} ${err}`
        })
      }
    },
    method: 'put',
  })
}

const del = (url, options) => {
  return MuddyAjax(url, {
    ...options, ...{
      success(response) {
        resolve(response)
      },
      httpCodeError: err => {
        reject({
          type: ERROR_HTTP_CODE,
          text: `${ERROR_HTTP_TEXT} ${err}`
        })
      },
      error: err => {
        reject({
          type: ERROR_REQUEST_CODE,
          text: `${ERROR_REQUEST_TEXT} ${err}`
        })
      },
      abort: err => {
        reject({
          type: ERROR_ABORT_CODE,
          text: `${ERROR_ABORT_TEXT} ${err}`
        })
      },
      timeout: err => {
        reject({
          type: ERROR_TIMEOUT_CODE,
          text: `${ERROR_TIMEOUT_TEXT} ${err}`
        })
      }
    },
    method: 'delete',
  })
}
MuddyAjax.get = get
MuddyAjax.getJSON = getJSON
MuddyAjax.post = post
MuddyAjax.delete = del
MuddyAjax.put = put
export default MuddyAjax

