import type { ReactElement } from 'react'
import Link from 'next/link'
import { Tabs } from 'antd'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import Content from '../components/content'
import Avatar from '../components/avatar'
import Searchbar from '../components/searchbar'

const Home: NextPageWithLayout = () => {
  const items = [
    {
      label: 'For You',
      key: '1',
      children: <Content />
    },
    {
      label: 'Upcoming',
      key: '2',
      children: <Content />
    }
  ]

  return (
    <div className='flex flex-col items-center mx-4 lg:-mt-16'>
      <div className='max-w-[600px]'>
        <div className='flex justify-start items-center'>
          <Searchbar />
          <Link href='/login'>
            <div className='flex-shrink-0 lg:hidden'>
              <Avatar size='large' />
            </div>
          </Link>
        </div>
        <Tabs defaultActiveKey='1' size='large' items={items} />
      </div>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home
