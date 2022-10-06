import { useEffect, useState } from 'react'
import { List } from 'antd'
import Video from './video'

export default function Content() {
  const [height, setHeight] = useState(0)
  
  const data = [
    <Video key='1' />,
    <Video key='2' />,
    <Video key='3' />
  ]

  useEffect(() => {
    // bottom=50, searchbar=52.14 Tabbar=57.14
    const h = window.innerHeight - 50 - 52.14 - 57.14
    setHeight(h)
  }, [])

  return (
    <List
      className='overflow-auto no-scrollbar'
      style={{ height: height }}
      dataSource={data}
      split={false}
      renderItem={item => (
        <List.Item>
          {item}
        </List.Item>
      )}
    />
  )
}