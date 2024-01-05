"use client"
import React, { useState } from 'react'

import Image from 'next/image'
import EyeShowIcon from '@/icons/Form/EyeShowIcon'
import EyeHiddenIcon from '@/icons/Form/EyeHiddenIcon'

interface InputPasswordProps {
    id: string
    onChange: any
    value: string
    label?: string
    placeholder?: string
    type?: string
}

const Input: React.FC<InputPasswordProps> = ({
    id,
    onChange,
    value,
    label,
    placeholder,
    type
}) => {
    const [ishowPassword, setIsShowPassword] = useState("password")

    const toggleShowPassword = () => {
        setIsShowPassword((prev) => {
            if(prev === 'password') {
                return 'text'
            } 
            return 'password'
        })
    }
    return (
        <div className='w-full mb-4 relative'>
            {label && (
                <label
                    htmlFor={id}
                    className='font-[14px] text-[#695C5C] font-montserrat block pb-2'>
                    {label}
                </label>
            )}
            <input
                id={id}
                value={value}
                type={ishowPassword}
                onChange={onChange}
                className='input border-black/40 h-12'
                placeholder={placeholder}
            />
            <span className='absolute right-2 bottom-1 z-[1] cursor-pointer p-3 hover:drop-shadow-lg'
            onClick={toggleShowPassword}>
                {ishowPassword==='password' ? <EyeShowIcon /> : <EyeHiddenIcon />}
            </span>
        </div>
    )
}

export default Input
