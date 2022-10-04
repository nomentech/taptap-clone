import type { NextPage } from 'next'
import { Avatar, Input, Tabs } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import Content from '../components/content'

const Home: NextPage = () => {
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
    <div className='flex flex-col items-center lg:-mt-16'>
      <div className='max-w-[600px]'>
        <div className='flex justify-start items-center'>
          <Input placeholder='香肠游戏' bordered={false} prefix={<SearchOutlined />} size='large'
            style={{ backgroundColor: 'white' }}
            className='rounded-full my-2 mr-2' 
          />
          <Avatar src='22f1196f825298281376608459bfa7fe.png' className='flex-shrink-0 lg:hidden' size='large' />
        </div>
        <Tabs defaultActiveKey='1' size='large' items={items} />
      </div>
    </div>
  )
}

export default Home
