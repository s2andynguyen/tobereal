'use client'
import React from 'react'
import { FiChevronsLeft } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

const BackToHome = () => {
    const router = useRouter()
    
  return (
    <div className='absolute bottom-3 left-3 hidden md:block'>
        <button className='hover:no-underline underline font-medium flex items-center'
        onClick={() => {router.push('/')}}
        ><FiChevronsLeft size={22} /><span>Back to Home</span></button>
    </div>
  )
}

export default BackToHome