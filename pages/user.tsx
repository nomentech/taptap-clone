import type { ReactElement } from 'react'
import { Button, Empty, Image, Tabs } from 'antd'
import { ArrowLeftOutlined, ShareAltOutlined, SearchOutlined } from '@ant-design/icons'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import Avatar from '../components/avatar'

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
    },
    {
      label: 'Replies',
      key: '6',
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
    <div>
      <div className='fixed top-0 left-0 w-full z-10'>
        <div className='flex justify-between p-3'>
          <Icon icon={<ArrowLeftOutlined />} />
          <div className='flex'>
            <Icon icon={<ShareAltOutlined />} />
            <Icon icon={<SearchOutlined />} />
            <Avatar />
          </div>
        </div>
      </div>
      <Image src='default_bg.05387bbb.png' preview={false} alt='' />
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
          <span className='text-primary-color mr-2'>0</span>
          <span className='text-[#868c92] mr-2'>Followers</span>
          <span className='text-primary-color mr-2'>0</span>
          <span className='text-[#868c92] mr-2'>Floowing</span>
          <span className='text-primary-color mr-2'>0</span>
          <span className='text-[#868c92] mr-2'>Favorites</span>
        </div>
        <Tabs defaultActiveKey='1' size='large' items={items} />
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