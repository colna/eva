import NotFoundImage from '../assets/404.svg'
import { Button, Image, Result } from 'antd'
import * as cx from 'classnames'
import { useNavigate } from 'react-router-dom'
function NoFoundPage() {
  const navigate = useNavigate()
  return (
    <Result
      icon={
        <Image
          className={cx('status-result-image', 'not-fount-image')}
          src={NotFoundImage}
          preview={false}
        />
      }
      title="404"
      subTitle="对不起，您访问的页面不存在"
      extra={
        <Button type="primary" onClick={() => navigate('/welcome')}>
          回到首页
        </Button>
      }
    />
  )
}
export default NoFoundPage
