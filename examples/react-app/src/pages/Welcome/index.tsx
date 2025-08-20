import { Image, Result } from 'antd'
import styles from './index.less'
const Dashbord = () => {
  return (
    <Result
      className={styles.welcomeContainer}
      icon={
        <Image
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          preview={false}
        />
      }
      title="欢迎使用 Eva"
      subTitle="Welcome to the Eva"
    />
  )
}

export default Dashbord
