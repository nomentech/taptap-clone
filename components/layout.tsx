import Menu from './menu'
import RightBar from './rightbar'
import MainHeader from './main_header'

export default function Layout({ children }: any) {
  return (
    <div className='flex justify-between max-w-[1496px] my-0 mx-auto'>
      <header className='hidden pl-4
                        xs:block xs:flex-grow-0 xs:flex-shrink-0 xs:basis-16
                        md:block md:flex-grow-1 md:flex-shrink-1 md:basis-0
                        xl:block xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[248px]'>
        <a href='/' className='w-[123px] h-[63px] inline-block ml-2'>
          <img src='1a667685a3d219cfd780ee3f0592a067.png' />
        </a>
        <Menu />
      </header>
      <main className='p-0 m-0
                      xs:flex-grow-1 xs:flex-shrink-1 xs:basis-0
                      sm:pl-0
                      md:pl-4
                      lg:w-[972px]
                      xl:pl-8
                      2xl:max-h-[1248px] 2xl:w-full 2xl:pl-[140px]'>
        <MainHeader />
        {/* main wrap */}
        <div className='flex justify-between'>
          {/* { children } */}
          {/* <RightBar /> */}
        </div>
      </main>
    </div>
  )
}