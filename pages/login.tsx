import type { NextPage } from 'next'
import { Button, Checkbox, Image, Input } from 'antd'
import { WechatOutlined, QqOutlined, GoogleOutlined, AppleFilled } from '@ant-design/icons'
import { useState } from 'react'
import Link from 'next/link'

const Login: NextPage = () => {
  const [focus, setFocus] = useState(false)

  return (
    <div className='h-[100vh] flex flex-col justify-between pt-[56px] 
                    sm:justify-center sm:w-[343px] sm:m-auto'>
      <div>
        <Image src='1a667685a3d219cfd780ee3f0592a067.png' width={123} height={63} alt='' preview={false} />
        <div className='mt-[60px] mb-2 text-lg font-bold'>Sign up / Log in</div>
        <div className='text-sm text-custom-grey'>Sign up or log in to your existing account with your email.</div>
        <div className={`mt-[30px] border-b ${focus && 'border-b-primary-color'}`}>
          <Input placeholder='Enter your email address' bordered={false} type='Email'
            className='pl-0 text-[22px]' onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          />
        </div>
        <Link href='#'>
          <a className='flex justify-end mt-4 text-primary-color'>Use Phone Number Instead</a>
        </Link>
      </div>
      <div className='sm:mt-12'>
        <Checkbox className='text-custom-grey text-sm'>By checking the box, you agree to TapTap's 
          <Link href=''><a className='text-primary-color'> Terms of Service </a></Link>&
          <Link href=''><a className='text-primary-color'> Privacy Policy </a></Link>
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
  )
}

export default Login