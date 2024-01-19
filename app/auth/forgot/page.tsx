'use client'
import React from 'react'
import FrameRegister from '../ui/FrameRegister'
import RegisterForm from '../ui/RegisterForm'
import Image from 'next/image'
import FrameLogin from '../ui/FrameLogin'
import ForgotForm from '../ui/ForgotForm'
function ForgotPassWord() {
    return (
        <div className='h-full flex justify-center items-center flex-col md:flex-row py-2 md:py-[100px] relative px-2'>
            {/* image */}
            <div className='hidden md:flex w-[40%] h-full absolute top-[50%] -translate-y-[50%] left-0 max-h-[1024px] items-center'>
                <div className='h-full w-full relative'>
                    <FrameLogin />
                    <Image
                        className='object-contain absolute top-[50%] -translate-y-[50%] z-[3] left-[50%] -translate-x-[50%] xl:w-[472px] md:w-[330px]'
                        src={'/images/auth/frame-login.png'}
                        width={472}
                        height={317}
                        alt='frame-login.png'
                    />
                </div>
            </div>

            {/* form login */}
            <div className='h-full md:h-[96vh] bg-white w-full md:w-[60%] rounded-[20px] md:absolute right-0 md:max-h-[1024px]  mx-2'>
                <ForgotForm />
            </div>
        </div>
    )
}

export default ForgotPassWord