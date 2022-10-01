import React from 'react'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { HomeOutlined, TrophyOutlined, GlobalOutlined, FieldTimeOutlined, CommentOutlined } from '@ant-design/icons'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const items: MenuProps['items'] = [
  getItem('Home', '1', <HomeOutlined />),
  getItem('Rankings', '2', <TrophyOutlined />),
  getItem('Discover', '3', <GlobalOutlined />),
  getItem('Moments', '4', <FieldTimeOutlined />),
  getItem('Groups', '5', <CommentOutlined />),
]

export default function LeftBar() {
  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e)
  }
  
  return (
    <div className='px-4'>
      <a href='/' className='ml-2'>
        <img src='1a667685a3d219cfd780ee3f0592a067.png' height={63} width={123} />
      </a>
      <Menu
        onClick={onClick}
        className='bg-primary-bg'
        defaultSelectedKeys={['1']}
        mode='inline'
        items={items}
      />
    </div>
  )
}