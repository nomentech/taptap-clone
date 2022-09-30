import Menu from './menu'

export default function Layout({ children }: any) {
  return (
    <div className='flex justify-between max-w-[1496px] my-0'>
      <header className='flex-grow-0 flex-shrink-0 basis-[248px] pl-4'>
        <a href='/' className='w-[123px] h-[63px] inline-block ml-2'>
          <img src='1a667685a3d219cfd780ee3f0592a067.png' />
        </a>
        <Menu />
      </header>
      <main className='max-w-[1248px]'>
        {/* sticky bar */}
        <div className='flex top-0 sticky'>
          <div className='w-[600px]'></div>
          <img src='22f1196f825298281376608459bfa7fe.png' />
        </div>
        {/* main wrap */}
        <div className='flex'>
          {/* main container */}
          <div>
            {/* sticky bar */}
            <div className='top-0 sticky'>
              <div><input placeholder='香肠派对' /></div>
              <div>
                <span>For you</span>
                <span>Upcoming</span>
              </div>
            </div>
            {/* home layout */}
            <div>
              {children}
            </div>
          </div>
          {/* aside container */}
          <aside></aside>
        </div>
      </main>
    </div>
  )
}