"use client"
import React from 'react'
import Image from 'next/image'
function FrameLogin() {
  return (
    <div className='h-full relative'>
        <div className='xl:w-[520px] md:w-[376px] absolute xl:top-[120px] md:top-[270px] left-5 z-0'>
            <Image className='object-contain' 
            src={"/images/auth/frame-1.svg"} width={526} height={661} alt='frame-1.svg' />
        </div>
        <div className='xl:w-[530px] md:w-[380px] absolute xl:top-[38px] md:top-[238px] -right-11 z-[1]'>
            <Image className='object-contain' 
            src={"/images/auth/frame-2.svg"} width={530} height={607} alt='frame-2.svg' />
        </div>
        <div className='xl:w-[550px] md:w-[398px] absolute md:top-[460px] left-2 z-[2]'>
            <Image className='object-contain' 
            src={"/images/auth/frame-3.svg"} width={550} height={469} alt='frame-3.svg' />
        </div>
        
    </div>
  )
}

export default FrameLogin