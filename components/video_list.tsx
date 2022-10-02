import { Card, Tag } from 'antd'

const { Meta } = Card

export default function VideoList() {
  return (
    <Card 
      bordered={false} 
      cover={<video src='https://d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4' controls />}
      style={{ borderRadius: '10px', overflow: 'hidden' }}
    >
      <Meta 
        title={<div><span className='mr-2'>Elephants Dream</span><Tag color='#15c5ce'>独家</Tag></div>}
        description='The orange open movie project'
      />
    </Card>
  )
}