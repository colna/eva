import type { IRouteConfig } from '../types/common'
import { cloneDeep } from 'lodash'

const useLayoutRouter = (routes: IRouteConfig[]) => {
  const r = cloneDeep(routes)?.[0]?.children?.[0] || {}
  r.routes = r?.children
  delete r?.element
  const diffRoute: any = (rs: IRouteConfig[]) => {
    return rs?.map((v) => {
      delete v.element
      if (v.children && v.children?.length > 0) {
        v.routes = v.children
        return diffRoute(v.children)
      }
      return v
    })
  }
  diffRoute(r?.children)
  return r
}
export default useLayoutRouter
