import Link from 'next/link'
import { Image } from 'antd'
import { icon_home_pressed, icon_ranking, icon_discover, icon_moments, icon_groups } from './icons'

export default function LeftBar() {
  const MenuItem = ({ name, icon, active=false }: any) => (
    <li className='h-[48px] mb-[15px] list-item'>
      <Link href='/' >
        <a className={`${active ? 'text-primary-color bg-white' : 'text-custom-black bg-primary-bg' } 
                    ${active ? 'hover:text-primary-color hover:bg-white' : 'hover:text-custom-black hover:bg-[#e3e4e5]' }
                    h-full flex items-center pl-[11px] rounded-full`}>
          {icon}
          <div className='ml-[10px] text-xl font-semibold hidden xl:block'>{name}</div>
        </a>
      </Link>
    </li>
  )
  
  return (
    <div>
      <Link href='/' >
        <a className='ml-2 hidden xl:block'>
          <Image src='1a667685a3d219cfd780ee3f0592a067.png' height={63} width={123} alt='' preview={false} />
        </a>
      </Link>
      <Link href='/' >
        <a className='pt-3 block xl:hidden'>
          <Image src='bc3d91dc1a4da4e24d57810245ae31d8.png' height={48} width={48} alt='' preview={false} />
        </a>
      </Link>
      <ul className='mt-[25px] w-14 xl:w-full'>
        <MenuItem name='Home' icon={icon_home_pressed} active />
        <MenuItem name='Rankings' icon={icon_ranking} />
        <MenuItem name='Discover' icon={icon_discover} />
        <MenuItem name='Moments' icon={icon_moments} />
        <MenuItem name='Groups' icon={icon_groups} />
      </ul>
    </div>
  )
}