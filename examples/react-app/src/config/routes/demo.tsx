import { BankTwoTone } from '@ant-design/icons'
import { lazy } from 'react'

export default {
  name: '路由',
  path: '/demo',
  icon: <BankTwoTone />,
  children: [
    {
      path: '/demo/children',
      name: 'demo',
      icon: <BankTwoTone />,
      element: lazy(() => import('../../pages/Demo'))
    }
  ]
}
