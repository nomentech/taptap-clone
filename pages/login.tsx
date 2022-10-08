import type { NextPage } from 'next'
import { Button, Checkbox, Image, Input } from 'antd'
import { WechatOutlined, QqOutlined, GoogleOutlined, AppleFilled } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Login: NextPage = () => {
  const [focus, setFocus] = useState(false)
  const [height, setHeight] = useState(0)
  const [type, setType] = useState('email')

  const switchType = () => {
    type === 'email' ? setType('phone') : setType('email')
  }

  useEffect(() => {
    setHeight(window.innerHeight)
  }, [])

  return (
    <div style={{ height: height }} className='flex flex-col justify-center'>
      <div className='flex flex-col justify-between pt-[56px] h-full
                      sm:justify-center sm:w-[343px] sm:m-auto sm:h-[658px] 
                      md:border md:pt-0 md:rounded-2xl md:w-[600px] md:px-32'>
        <div>
          <Image src='1a667685a3d219cfd780ee3f0592a067.png' width={123} height={63} alt='' preview={false} />
          <div className='mt-[60px] mb-2 text-xl font-bold'>Sign up / Log in</div>
          <div className='text-custom-grey'>
            Sign up or log in to your existing account with your {type === 'email' ? 'email' : 'phone number' }.
          </div>
          <div className={`mt-[30px] border-b ${focus && 'border-b-primary-color'}`}>
            <Input placeholder={`Enter your ${type === 'email' ? 'email address' : 'phone number' }`} 
              bordered={false} type={`${type === 'email' ? 'email' : 'tel' }`}
              className='pl-0 text-[22px]' onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
            />
          </div>
          <div className='flex justify-end mt-4 text-primary-color cursor-pointer' onClick={switchType}>
            Use {type === 'email' ? 'Phone Number' : 'Email' } Instead
          </div>
        </div>
        <div className='sm:mt-12'>
          <Checkbox className='text-custom-grey text-sm'>By checking the box, you agree to TapTap&#39;s 
            <Link href='#'><a className='text-primary-color'> Terms of Service </a></Link>&
            <Link href='#'><a className='text-primary-color'> Privacy Policy </a></Link>
          </Checkbox>
          <div className='bg-primary-color my-6 rounded-full'>
            <Button type='primary' shape='round' block className='h-12'>Continue</Button>
          </div>
          <div className='py-8 flex justify-center'>
            <WechatOutlined style={{ fontSize: 32, color: '#1ccd31' }} />
            <QqOutlined className='ml-8' style={{ fontSize: 32, color: '#1daafb' }} />
            <GoogleOutlined className='ml-8' style={{ fontSize: 32, color: '#e53832' }} />
            <AppleFilled className='ml-8' style={{ fontSize: 32, color: '#1b1e23' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login