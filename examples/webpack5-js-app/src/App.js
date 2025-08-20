import { compose, App } from '@kfe/eva'
import permission from 'modules/permission'
import self from 'modules/self'
import Logo from './components/Logo'
import { app } from './configs'
import Routes from './routes'
import './style/ant.scss'
export default compose(
  permission,
  self
)(({ ...props }) => {
  return (
    <App.default app={app} Logo={() => <Logo name={app.name} />} {...props}>
      <Routes />
    </App.default>
  )
})
