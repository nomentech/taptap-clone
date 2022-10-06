import Link from 'next/link'
import { icon_home_pressed, icon_ranking, icon_discover, icon_moments } from './icons'

export default function Bottom() {
  const MenuItem = ({ name, icon, active=false }: any) => (
    <Link href='/' >
      <a className={`${active ? 'text-primary-color' : 'text-[#868c92]' } 
          h-full flex flex-col justify-center items-center bg-white text-xs`}>
        {icon}
        {name}
      </a>
    </Link>
  )

  return (
    <div className='h-[50px] bg-white flex justify-around items-center'>
      <MenuItem name='Home' icon={icon_home_pressed} active />
      <MenuItem name='Discover' icon={icon_discover} />
      <MenuItem name='Moments' icon={icon_moments} />
      <MenuItem name='Rankings' icon={icon_ranking} />
    </div>
  )
}