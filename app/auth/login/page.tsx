import React from 'react'
import FrameLogin from '../ui/FrameLogin'
import LoginForm from '../ui/LoginForm'
import Image from 'next/image'
function Login() {
    return (
        <div className='h-full flex justify-center items-center flex-col md:flex-row py-[100px] relative px-2 md:px-0'>
            {/* image */}
            <div className='hidden md:flex w-[40%] h-full absolute top-[50%] -translate-y-[50%] left-0 max-h-[1024px] items-center'>
                <div className='h-full w-full relative'>
                    <FrameLogin />
                    <Image className='object-contain absolute top-[50%] -translate-y-[50%] z-[3] left-[50%] -translate-x-[50%]' 
                    src={"/images/auth/frame-login.png"} width={472} height={317} alt='frame-login.png' />
                </div>
            </div>  

            {/* form login */}
            <div className='h-full md:h-[80%] bg-white md:w-[60%] w-full rounded-[20px] md:absolute right-0 md:max-h-[1024px] my-auto mx-2'>
                <LoginForm />
            </div>
        </div>
    )
}

export default Login
