'use client'
import React, { useState } from 'react'
import Link from 'next/link'

import Input from '@/components/Input'
import InputPassword from '@/components/InputPassword'
import SocialLogin from './SocialLogin'

function RegisterForm() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className='h-full w-full flex flex-col items-center justify-start gap-3 md:gap-8 pt-3 sm:pt-8 md:pt-16'>
            <div className='text-center mb-3 sm:mb-0'>
                <p className='text-[24px] font-semibold'>Create an account</p>
                <p className='text-sm text-[#343434]'>Connect with your friends today!</p>
            </div>
            {/* form input */}
            <div className='w-full px-6 sm:px-10 md:px-16 xl:px-[150px] flex flex-col items-center gap-5 md:gap-6'>
                <Input
                    id={'username'}
                    onChange={(e: any) => {
                        setUsername(e.target.value)
                    }}
                    type={'text'}
                    placeholder='Enter Your Username'
                    value={username}
                />
                <Input
                    id={'email'}
                    onChange={(e: any) => {
                        setEmail(e.target.value)
                    }}
                    type={'email'}
                    placeholder='Enter your Email'
                    value={email}
                />
                <Input
                    id={'phoneNumber'}
                    onChange={(e: any) => {
                        setPhoneNumber(e.target.value)
                    }}
                    type={'number'}
                    placeholder='Enter your Phone Number'
                    value={phoneNumber}
                />
                <InputPassword
                    id={'password'}
                    onChange={(e: any) => {
                        setPassword(e.target.value)
                    }}
                    placeholder='Enter your Password...'
                    value={password}
                />

                <button className='bg-gradient-left h-12 w-full rounded-md max-w-[312px] mt-3 font-semibold hover:shadow-lg transition duration-200 hover:opacity-85'>
                    Sign Up
                </button>
            </div>

            <div className='w-full px-10 xl:px-20'>
                <SocialLogin />
            </div>
        </div>
    )
}

export default RegisterForm
