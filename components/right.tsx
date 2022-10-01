import { Card, Image, List, Tag } from 'antd'
import { StarFilled } from '@ant-design/icons'

const data = [
  {
    title: '香肠派对',
    src: 'f2c7b4693b78e2daaaa56569dd9ec323_360.png'
  },
  {
    title: 'Infinity Dungeon',
    src: '3873a6f0a54c13d184de0446ecbdd4f5_360.png'
  },
  {
    title: '古代战争',
    src: '8d43dd7a0d983c3767cf294b73e830bb_360.png'
  },
  {
    title: '召唤与合成',
    src: 'efee420992648d5b5908bc31d480278b_360.png'
  },
]

export default function Right() {
  return (
    <Card title='Popular Games' bordered={false} className='mr-4 rounded-xl'>
      <List
        itemLayout='horizontal'
        dataSource={data}
        split={false}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Image src={item.src} width={56} height={56} />}
              title={<a href='#'>{item.title}</a>}
              description={
                <>
                  <Tag color='#f5f7f8' className='text-[#868c92]'>Shooter</Tag>
                  <Tag color='#f5f7f8' className='text-[#868c92]'>PUBG</Tag>
                </>
              }
            />
            <div className='text-primary-color flex items-center'>
              <StarFilled />
              <span className='ml-1'>9.0</span>
            </div>
          </List.Item>
        )}
      />
    </Card>
  )
}