import type { NextPage } from 'next'
import { Input, Tabs } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import VideoList from '../components/video_list'

const Home: NextPage = () => {
  const items = [
    {
      label: 'For You',
      key: '1',
      children: <VideoList />
    },
    {
      label: 'Upcoming',
      key: '2',
      children: 'Upcoming Content'
    }
  ]

  return (
    <div className='flex flex-col items-center -mt-16'>
      <Input placeholder='香肠游戏' bordered={false} prefix={<SearchOutlined />} className='bg-white max-w-[600px] rounded-full mr-4' />
      <Tabs defaultActiveKey='1' size='large' items={items} style={{ width: '600px' }}/>
    </div>
  )
}

export default Home
