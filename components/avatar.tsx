import Link from 'next/link'
import { Avatar as AntAvatar, Dropdown, Menu } from 'antd'

export default function Avatar({ size='default' }: any) {
  const menu = (
    <Menu
      items={[
        {
          label: <Link href='#'><a>Profile</a></Link>,
          key: '0',
        },
        {
          label: <Link href='#'><a>Manage Account</a></Link>,
          key: '1',
        },
        {
          label: <Link href='#'><a>Following</a></Link>,
          key: '2',
        },
        {
          label: <Link href='#'><a>Favorites</a></Link>,
          key: '3',
        },
        {
          label: <Link href='#'><a>Orders</a></Link>,
          key: '4',
        },
        {
          label: <Link href='#'><a>Browsing History</a></Link>,
          key: '5',
        },
        {
          label: <Link href='#'><a>Drafts</a></Link>,
          key: '6',
        },
        {
          label: <Link href='#'><a>Creator Center</a></Link>,
          key: '7',
        },
        {
          label: <Link href='#'><a>Appearance</a></Link>,
          key: '8',
        },
        {
          label: <Link href='#'><a>Log Out</a></Link>,
          key: '9',
        },
      ]}
    />
  )

  return (
    <Dropdown overlay={menu} trigger={['click']}
      overlayStyle={{ width: '288px', fontSize: '16px' }}>
      <AntAvatar src='22f1196f825298281376608459bfa7fe.png' size={size} className='cursor-pointer' />
    </Dropdown>
  )
}