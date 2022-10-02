import { Layout as AntLayout } from 'antd'
import Left from './left'
import Header from './header'
import Right from './right'

const AntHeader = AntLayout.Header
const { Footer, Sider, Content } = AntLayout

export default function Layout({ children }: any) {
  return (
    <AntLayout className='max-w-[1496px] my-0 mx-auto'>
      <Sider className='bg-primary-bg'>
        <Left />
      </Sider>
      <AntLayout>
        <AntHeader className='bg-primary-bg flex justify-end items-center pr-4'>
          <Header />
        </AntHeader>
        <AntLayout>
          <Content className='bg-primary-bg'>{children}</Content>
          <Sider className='bg-primary-bg' width={340}>
            <Right />
            <Footer className='bg-primary-bg'>Copyright</Footer>
          </Sider>
        </AntLayout>
      </AntLayout>
    </AntLayout>
  )
}