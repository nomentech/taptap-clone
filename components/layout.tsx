import { Avatar, Layout as AntLayout } from 'antd'
import Link from 'next/link'
import Bottom from './bottom'
import Left from './left'
import Right from './right'

const { Header, Footer, Sider, Content } = AntLayout

export default function Layout({ children }: any) {
  return (
    <AntLayout className='max-w-[1496px] my-0 mx-auto'>
      <Sider className='bg-primary-bg pl-4 hidden sm:block' width={150}>
        <Left />
      </Sider>
      <AntLayout>
        <Header className='bg-primary-bg hidden lg:flex justify-end items-center pr-4 '>
          <Link href='/login'>
            <Avatar src='22f1196f825298281376608459bfa7fe.png' size='large' className='cursor-pointer' />
          </Link>
        </Header>
        <AntLayout>
          <Content className='bg-primary-bg'>{children}</Content>
          <Sider className='bg-primary-bg hidden lg:block' width={300}>
            <Right />
            <Footer className='bg-primary-bg'>Copyright</Footer>
          </Sider>
        </AntLayout>
        <Footer className='fixed bottom-0 left-0 p-0 min-w-full sm:hidden'>
          <Bottom />
        </Footer>
      </AntLayout>
    </AntLayout>
  )
}