"use client"
import React from 'react'
import Image from 'next/image'
function FrameLogin() {
  return (
    <div className='h-full relative'>
        <div className='h-[50%] absolute top-[15%] left-[5%] z-0'>
            <Image className='object-contain' 
            src={"/images/auth/frame-1.svg"} width={526} height={661} alt='frame-1.svg' />
        </div>
        <div className='h-[40%] absolute top-[10%] -right-[10%] z-[1]'>
            <Image className='object-contain' 
            src={"/images/auth/frame-2.svg"} width={530} height={607} alt='frame-2.svg' />
        </div>
        <div className='h-[50%] absolute top-[45%] left-0 z-[2]'>
            <Image className='object-contain' 
            src={"/images/auth/frame-3.svg"} width={550} height={469} alt='frame-3.svg' />
        </div>
        
    </div>
  )
}

export default FrameLogin