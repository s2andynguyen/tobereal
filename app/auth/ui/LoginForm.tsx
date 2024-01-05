'use client'
import React, { useState } from 'react'
import Input from '@/components/Input'
import InputPassword from '@/components/InputPassword'

function AuthForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className='h-full w-full flex flex-col items-center justify-center gap-6'>
            <p className='text-[24px] font-black'>Hi, Welcome Back! 👋</p>
            <div className='w-full px-[150px]'>
                <Input
                    id={'email'}
                    onChange={(e: any) => {
                        setEmail(e.target.value)
                    }}
                    label='Email'
                    type={'email'}
                    placeholder='Enter your Email...'
                    value={email}
                />
                <InputPassword
                    id={'password'}
                    onChange={(e: any) => {
                        setPassword(e.target.value)
                    }}
                    label='Password'
                    placeholder='Enter your Password...'
                    value={password}
                />
                <button className='bg-gradient-left py-4 px-12'>
                    123
                </button>
            </div>
        </div>
    )
}

export default AuthForm
