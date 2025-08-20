import type { ButtonType } from 'antd/es/button'
import type { ReactNode } from 'react'
//根据react-router-dom v6定义
export interface IRouteConfig {
  // 路由路径
  path?: string
  // 路由组件
  element?: any
  // 路由信息
  name?: string
  //图标
  icon?: string
  //子路由
  children?: IRouteConfig[]
  //layouts中routes类型
  routes?: IRouteConfig[]
  //是否展示菜单
  hideInMenu?: boolean
}

export interface ResponseBody {
  code: number
  success: boolean
  data?: any
  msg?: string
}

export type Response = ({
  isSuccess,
  data,
  message
}: {
  isSuccess: boolean
  data?: any
  message?: string
}) => ResponseBody

export type ButtonOptions = {
  type: ButtonType
  text: string | number | ReactNode
}
