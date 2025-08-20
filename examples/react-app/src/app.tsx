import { PageLoading } from '@ant-design/pro-components'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import { Suspense } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import useGetRoutes from './hooks/useGetRoutes'
const App = () => {
  const Router = useGetRoutes()
  const RenderRoutes = () => useRoutes(Router)

  return (
    <Suspense fallback={<PageLoading />}>
      <ConfigProvider locale={zhCN}>
        <BrowserRouter>
          <RenderRoutes />
        </BrowserRouter>
      </ConfigProvider>
    </Suspense>
  )
}
export default App
