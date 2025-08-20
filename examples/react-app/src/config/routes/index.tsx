import { IRouteConfig } from '../../types/common'
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import Demo from './demo'

//重定向请使用 element:() => <Navigate/> 方法回调 否则可能会报错
export default [
  {
    path: '/',
    element: lazy(() => import('../../layouts')),
    hideInMenu: true,
    children: [
      //空路由重定向
      { path: '/', element: () => <Navigate to="/welcome" replace /> },
      Demo,
      {
        path: '/welcome',
        element: lazy(() => import('../../pages/Welcome')),
        hideInMenu: true
      },
      {
        path: '/404',
        element: lazy(() => import('../../pages/404')),
        hideInMenu: true
      },
      //错误路由跳转404
      {
        path: '/*',
        element: () => <Navigate to="/404" replace />,
        hideInMenu: true
      }
    ]
  }
] as IRouteConfig[]
