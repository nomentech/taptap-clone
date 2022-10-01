export default function MainHeader() {
  return (
    <div className='p-0 bg-[#f5f7f8] h-[52px] flex justify-between items-center 
                    xs:w-full xs:py-0 sm:px-4
                    sm:w-[600px] sm:my-0 sm:mx-auto'>
      <div className='flex justify-between items-center py-0 px-4'>
        <div className='h-16'>
          <input placeholder='香肠游戏' className='my-3 h-10 bg-white rounded-[20px]'/>
        </div>
        <div className='py-3 pl-0 pr-[14px] ml-3'>
          <div className='h-10 w-10'>
            <a href='#'><img src='22f1196f825298281376608459bfa7fe.png' /></a>
          </div>
        </div>
      </div>
    </div>
  )
}