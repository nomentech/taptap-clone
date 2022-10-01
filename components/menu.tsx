import { icon_home_pressed, icon_ranking, icon_discover, icon_moments, icon_groups } from './icons'

const MenuItem = ({ name, icon, active=false }: any) => (
  <li className='h-[48px] mb-[15px] list-item'>
    <a href='/' className={`${active ? 'text-primary-color bg-white' : 'text-custom-black bg-primary-bg' } h-full flex items-center pl-[15px] rounded-[38px]`}>
        {icon}
        <div className='ml-[10px] font-semibold'>{name}</div>
    </a>
  </li>
)
export default function Menu() {
  return (
    <ul className='mt-[25px]'>
      <MenuItem name='Home' icon={icon_home_pressed} active />
      <MenuItem name='Rankings' icon={icon_ranking} />
      <MenuItem name='Discover' icon={icon_discover} />
      <MenuItem name='Moments' icon={icon_moments} />
      <MenuItem name='Groups' icon={icon_groups} />
    </ul>
  )
}