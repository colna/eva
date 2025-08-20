import { camelizeKeys } from 'humps'
import { http } from '@kfe/eva'
import store from 'store'
// mock -> https://km.in.zhihu.com/apps/ming/projects/khaos-oplog.admin/mocks/4045/info
const oplog = store.module({
  name: 'dev-oplog',
  state: {
    oplog: {},
    isLoadingOplog: false
  },

  *getOplog(query) {
    try {
      yield this.set('isLoadingOplog', true)
      const { data } = yield http.get('/api/khaos-oplog/admin/operations', {
        params: query
      })
      yield this.set('oplog', camelizeKeys(data || {}))
      return data
    } catch (err) {
      return err
    } finally {
      yield this.set('isLoadingOplog', false)
    }
  }
})

export default oplog
