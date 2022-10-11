import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

export default function Searchbar() {
  return (
    <Input placeholder='香肠游戏' bordered={false} prefix={<SearchOutlined />} size='large'
      style={{ backgroundColor: 'white' }}
      className='rounded-full my-2 mr-2' 
    />
  )
}