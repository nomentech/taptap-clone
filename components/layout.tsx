import { Layout as AntLayout } from 'antd'
import Left from './left'
import Header from './header'

const AntHeader = AntLayout.Header
const { Footer, Sider, Content } = AntLayout

export default function Layout({ children }: any) {
  return (
    <AntLayout className='max-w-[1496px] my-0 mx-auto'>
      <Sider>
        <Left />
      </Sider>
      <AntLayout>
        <AntHeader className='bg-primary-bg flex justify-between items-center pl-0'>
          <Header />
        </AntHeader>
        <AntLayout>
          <Content>{children}</Content>
          <Sider>
            <Content>Sider</Content>
            <Footer>Footer</Footer>
          </Sider>
        </AntLayout>
      </AntLayout>
    </AntLayout>
  )
}