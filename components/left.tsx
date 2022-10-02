import { Image } from 'antd'
import { icon_home_pressed, icon_ranking, icon_discover, icon_moments, icon_groups } from './icons'

export default function LeftBar() {
  const MenuItem = ({ name, icon, active=false }: any) => (
    <li className='h-[48px] mb-[15px] list-item'>
      <a href='/' 
        className={`${active ? 'text-primary-color bg-white' : 'text-custom-black bg-primary-bg' } 
                    ${active ? 'hover:text-primary-color hover:bg-white' : 'hover:text-custom-black hover:bg-[#e3e4e5]' }
                    h-full flex items-center pl-[15px] rounded-[38px] `
      }>
          {icon}
          <div className='ml-[10px] text-xl font-semibold'>{name}</div>
      </a>
    </li>
  )
  
  return (
    <>
      <a href='/' className='ml-2'>
        <Image src='1a667685a3d219cfd780ee3f0592a067.png' height={63} width={123} />
      </a>
      <ul className='mt-[25px]'>
        <MenuItem name='Home' icon={icon_home_pressed} active />
        <MenuItem name='Rankings' icon={icon_ranking} />
        <MenuItem name='Discover' icon={icon_discover} />
        <MenuItem name='Moments' icon={icon_moments} />
        <MenuItem name='Groups' icon={icon_groups} />
      </ul>
    </>
  )
}