import axios from 'axios'
import qs from 'qs'
import Toast from 'vue-czbui/dist/components/toast/index'
import Dialog from 'vue-czbui/dist/components/dialog/index'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = '/'
} else {
  baseURL = '/'
}
// 使用由库提供的配置的默认值来创建实例
var instance = axios.create({
  baseURL: baseURL,
  timeout: 5000
})

let https = {
  get (url, opts = {}) {
    return new Promise((resolve, reject) => {
      instance({
        method: 'GET',
        url: url + '?' + handleOptions(opts)
      })
        .then(res => {
          if (res.data.code === 200) {
            resolve(res.data)
          } else {
            reject(res.data)
            Toast.show({
              type: 'error',
              msg: res.message,
              timeout: '1500'
            })
          }
        })
        .catch(e => {
          console.log(e)
          Dialog({
            title: '系统提示',
            msg: '网络错误，请稍后再试',
            isShowCancel: true,
            confirmSure: function () {}
          })
        })
    })
  },
  post (url, opts = {}) {
    return new Promise((resolve, reject) => {
      instance({
        method: 'POST',
        url: url,
        data: qs.stingfy(opts),
        headers: {
          contentType: 'application/x-www-form-urlencoded'
        }
      })
        .then(res => {
          if (res.data.code === 200) {
            resolve(res.data)
          } else {
            reject(res.data)
            Toast.show({
              type: 'error',
              msg: res.message,
              timeout: '1500'
            })
          }
        })
        .catch(e => {
          console.log(e)
          Dialog({
            title: '系统提示',
            msg: '网络错误，请稍后再试',
            isShowCancel: true,
            confirmSure: function () {}
          })
        })
    })
  }
}

function handleOptions (opts) {
  if (typeof opts !== 'object') {
    return ''
  }

  let arr = Object.keys(opts)
  let newArr = arr.map(item => {
    return (item = `${item}=${opts[item]}`)
  })
  let newOpts = newArr.join('&')
  return newOpts || ''
}

export default https
