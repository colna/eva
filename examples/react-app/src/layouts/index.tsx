// @ts-nocheck
import routes from '../config/routes'
import { PageContainer, ProLayout, ProCard } from '@ant-design/pro-components'
import { Link, useLocation, useNavigate, useOutlet } from 'react-router-dom'
import avatar from '../assets/avatar.png'
export default () => {
  const location = useLocation()
  const navigate = useNavigate()
  const outlet = useOutlet()
  const PageContent = outlet

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh'
      }}
    >
      <ProLayout
        title="Eva"
        route={routes?.[0]}
        siderWidth={216}
        location={location}
        avatarProps={{
          src: avatar,
          title: '绫波丽',
          size: 'small'
        }}
        layout="mix"
        actionsRender={(props) => {
          if (props.isMobile) return []
          return []
        }}
        menuItemRender={(item, dom) => {
          if (item.isUrl || !item.path) {
            return dom
          }
          return <Link to={item.path}>{dom}</Link>
        }}
        onMenuHeaderClick={() => navigate('/welcome')}
      >
        <PageContainer>
          <ProCard
            style={{
              height: '100vh',
              minHeight: 800
            }}
          >
            {PageContent}
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  )
}
