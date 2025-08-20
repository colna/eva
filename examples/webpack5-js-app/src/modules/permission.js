import {http} from '@kfe/eva'
import store from 'store'

// Permission 对照表
// http://wiki.in.zhihu.com/pages/viewpage.action?pageId=128260227
const permission = store.module({
  name: 'permission',

  state: {
    permission: null
  },

  *loadPermission() {
    const perms = {}
    let requestUrl = '/api/ecom/in/permissions/list'

    const result = yield http.get(requestUrl)
    const list = result?.data?.data || []

    list.forEach((v) => {
      perms[v] = true
    })
    yield this.set('permission', perms)
  }
})

export default permission
