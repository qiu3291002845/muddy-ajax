# muddy-cookie

## Installation

```
npm install muddy-ajax
```

## Common-js

```js
var muddyCookie = require('muddy-ajax');
```

### ES6-Modules

```js
import muddyAjax from "muddy-ajax"
```



#### USE

```js
import muddyAjax from "muddy-ajax"
setTimeout(async () => {
  const res = await muddyAjax('https://jsonplaceholder.typicode.com/users')
  console.log(res)
}, 0);
```

#### Get

```js
import muddyAjax from "muddy-ajax"
setTimeout(async () => {
  const res = await muddyAjax.get('https://jsonplaceholder.typicode.com/users')
  console.log(res)
}, 0);
```

#### Post

```js
import muddyAjax from "muddy-ajax"
setTimeout(async () => {
  const res = await muddyAjax.post('https://jsonplaceholder.typicode.com/users',{
      method:'post'
  })
  console.log(res)
}, 0);
```

#### Options

```js
const options = {
  // 请求方式
  method: HTTP_GET,
  // 请求头携带的数据
  params: null,
  // 请求体携带的数据
  data: null,
  // 请求头类型
  contentType: 'application/x-www-form-urlencoded' || 'application/json',
  // 响应类型
  responseType: '',
  // 超时时间
  timeoutTime: 0,
  // 是否携带 cookie
  withCredentials: false,
  // 是否为异步
  async: true,
}
```

