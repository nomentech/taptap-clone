import type { NextPage } from 'next'
import { Avatar, Input, Tabs } from 'antd'
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
      children: <VideoList />
    }
  ]

  return (
    <div className='flex flex-col items-center mt-0 lg:-mt-16'>
      <div>
        <div className='flex items-center'>
          <Input placeholder='香肠游戏' bordered={false} prefix={<SearchOutlined />} size='large'
            style={{ backgroundColor: 'white' }}
            className='rounded-full my-2 mr-4' 
          />
          <Avatar src='22f1196f825298281376608459bfa7fe.png' className='lg:hidden' size='large' />
        </div>
        <Tabs defaultActiveKey='1' size='large' items={items} />
      </div>
    </div>
  )
}

export default Home
