import type { NextPage } from 'next'
import { Tabs } from 'antd'
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
    <div className='flex justify-center'>
      <Tabs defaultActiveKey='1' size='large' items={items} style={{ width: '600px' }}/>
    </div>
  )
}

export default Home
