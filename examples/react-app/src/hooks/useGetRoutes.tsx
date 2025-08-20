import type { IRouteConfig } from '../types/common'
import { PageLoading } from '@ant-design/pro-components'
import routesConfig from '../config/routes'
import { cloneDeep } from 'lodash'
import { Suspense, useMemo } from 'react'

const useGetRoutes = () => {
  const getV6Routers = (routes: IRouteConfig[]) => {
    routes.forEach((r) => {
      if (r.element) {
        const Component = r.element
        // @ts-ignore
        r.element = (
          <Suspense fallback={<PageLoading />}>
            <Component />
          </Suspense>
        )
      }
      if (r.children) {
        getV6Routers(r.children)
      }
    })
    return routes
  }

  const v6Routes = useMemo(
    () => getV6Routers(cloneDeep(routesConfig)),
    [routesConfig]
  )
  return v6Routes
}

export default useGetRoutes
