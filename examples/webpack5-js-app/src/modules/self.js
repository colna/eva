import {http} from '@kfe/eva'
import store from 'store'

const self = store.module({
  name: 'self',

  state: {
    self: null
  },

  *loadSelf() {
    // ECOM 获取知乎账号内容/ ECOM.IN 获取 SSO 用户信息
    let url = '/api/sso/self'
    const data = yield http(url)
    yield this.set('self', data?.data?.data)
    return data?.data?.data
  }
})

export default self
