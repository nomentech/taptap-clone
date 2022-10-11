import type { ReactElement } from 'react'
import { Button, Empty, Image, Tabs } from 'antd'
import { ArrowLeftOutlined, ShareAltOutlined, SearchOutlined } from '@ant-design/icons'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import Avatar from '../components/avatar'
import Searchbar from '../components/searchbar'

const User: NextPageWithLayout = () => {
  const subitems = [
    {
      label: 'All',
      key: '1',
      children: <Empty description='No content yet' />
    },
    {
      label: 'Reviews',
      key: '2',
      children: <Empty description='No content yet' />
    },
    {
      label: 'Moments',
      key: '3',
      children: <Empty description='No content yet' />
    },
    {
      label: 'Videos',
      key: '4',
      children: <Empty description='No content yet' />
    },
    {
      label: 'Articles',
      key: '5',
      children: <Empty description='No content yet' />
    }
  ]

  const items = [
    {
      label: 'Activities',
      key: '1',
      children: <Tabs defaultActiveKey='1' size='small' items={subitems} />

    },
    {
      label: 'About',
      key: '2',
      children: <Empty description='No content yet' />
    }
  ]

  const Icon = ({ icon }: any) => (
    <Button shape="circle" icon={icon} className='bg-[#1d2127] text-white border-0 mr-2' />
  )

  return (
    <div className='flex flex-col items-center lg:-mt-16 lg:mx-4'>
      <div className='max-w-[600px]'>
        <div className='hidden lg:block'>
          <Searchbar />
        </div>
        <div className='flex justify-between p-3'>
          <Icon icon={<ArrowLeftOutlined />} />
          <div className='flex'>
            <Icon icon={<ShareAltOutlined />} />
            <div className='lg:hidden'>
              <Icon icon={<SearchOutlined />} />
              <Avatar />
            </div>
          </div>
        </div>
        <div className='-mt-[54px]'>
          <Image src='default_bg.05387bbb.png' preview={false} alt='' />
        </div>
        <div className='bg-primary-color mt-1 mr-6 rounded-full float-right'>
          <Button type='primary' shape='round'>Edit Profile</Button>
        </div>
        <div className='ml-6 -mt-16'>
          <Image src='8d7b8d6bfdbafca5212ba9ab29320611.jpg' height={100} width={100} alt='' preview={false}
            className='rounded-full' />
          <div className='font-semibold text-lg'>Nickname</div>
          <div className='text-[#868c92] text-xs'>IP Location: China</div>
          <Button type='primary' className='text-primary-color mt-4 text-xs p-1 rounded-md' size='small'>ID: 509119169</Button>
          <div className='my-2'>
            <span className='text-primary-color mr-1'>0</span>
            <span className='text-[#868c92] mr-1'>Followers |</span>
            <span className='text-primary-color mr-1'>0</span>
            <span className='text-[#868c92] mr-1'>Following |</span>
            <span className='text-primary-color mr-1'>0</span>
            <span className='text-[#868c92] mr-1'>Favorites</span>
          </div>
          <Tabs defaultActiveKey='1' size='large' items={items} />
        </div>
      </div>
    </div>
  )
}

User.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default User