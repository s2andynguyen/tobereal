'use client'
import React, { useState } from 'react'
import ArrowDown from '@/icons/Arrow/ArrowDown'
const SelectPlaceCustom = () => {
    const [isShow, setIsShow] = useState(false)

    const toggleShow = () => {
        setIsShow(!isShow)
    }
  return (
    <div className='relative group h-7 sm:h-10 hidden sm:block'>
        <div className='w-[150px] h-7 sm:h-10 relative border border-[#C4C4C4] 
        flex justify-between items-center px-4 rounded-[5px] cursor-pointer 
        hover:shadow-md transition duration-200 select-none z-[1]'
        onClick={toggleShow}>
            <span>jakarta</span>
            <ArrowDown />
        </div>
        
            <ul className='absolute top-8 sm:top-12 right-0 shadow-gray w-[200px]
                rounded-md py-2 after:h-3 bg-white hidden group-hover:block opacity-0 
                group-hover:opacity-100
                transition-all duration-300 z-[2]
                after:bg-transparent after:block after:absolute after:-top-3 after:right-0 after:w-[150px]'>
                <li className='px-5 cursor-pointer hover:bg-[#ebe7e7] select-none'>jakarta</li>
                <li className='px-5 cursor-pointer hover:bg-[#ebe7e7] select-none'>jakarta</li>
                <li className='px-5 cursor-pointer hover:bg-[#ebe7e7] select-none'>jakarta</li>
                <li className='px-5 cursor-pointer hover:bg-[#ebe7e7] select-none'>jakarta</li>
            </ul>
    </div>
  )
}

export default SelectPlaceCustom