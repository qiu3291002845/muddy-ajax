/**
 * 工具函数
 */
// 序列化
export const serialize = params => {
  const results = []
  for (const [key, value] of Object.entries(params)) {
    results.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
  }
  return results.join('&')
}
export const serializeJSON = param => {
  return JSON.stringify(param)
}
// 添加地址
export const addUrlData = (url = location.origin, data) => {
  if (!data) return ''
  const mark = url.includes('?') ? '&' : '?'
  return mark + data
}