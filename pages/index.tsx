import type { NextPage } from 'next'
import { Layout } from 'antd'

const { Header, Footer, Sider, Content } = Layout

const Home: NextPage = () => {
  return (
    <div className='w-[600px] h-full'>
      <div className='top-0 left-0 sticky'>
        {/* <div className='h-16 w-full flex items-center'>
          <div className='my-3 flex justify-start bg-white rounded-[20px] h-10 w-full'>
          </div>
        </div> */}
        <div className='h-16 flex'>
          <div className='mx-[18px]'>
            <a href='#' className='text-[22px] leading-[30px] font-semibold'>For you</a>
          </div>
          <div className='mx-[18px]'>
            <a href='#' className='text-[22px] leading-[30px] font-semibold'>Upcoming</a>
          </div>
        </div>
      </div>
      <div>
        Main content
      </div>
    </div>
  )
}

export default Home
