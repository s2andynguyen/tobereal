'use client'
import React, { useState } from 'react'
import Link from 'next/link'

import Input from '@/components/Input'
import InputPassword from '@/components/InputPassword'
import SocialLogin from './SocialLogin'
import CustomCheckbox from '@/components/CustomCheckbox'
import { useRouter } from 'next/navigation'
function AuthForm() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)

    const handleSetRemember =() => {
        setRemember(!remember)
    }
    return (
        <div className='h-full w-full flex flex-col items-center justify-center gap-3 md:gap-8'>
            <p className='text-[24px] font-black'>Hi, Welcome Back! 👋</p>

            {/* form input */}
            <div className='w-full px-8 md:px-16 xl:px-[150px] flex flex-col items-center gap-3 md:gap-6'>
                {/* email */}
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
                {/* password */}
                <InputPassword
                    id={'password'}
                    onChange={(e: any) => {
                        setPassword(e.target.value)
                    }}
                    label='Password'
                    placeholder='Enter your Password...'
                    value={password}
                />

                {/* remember & fogot password */}
                <div className='flex justify-center py-2 md:py-0'>
                    {/* remember me*/}
                        <CustomCheckbox 
                            isChecked={remember}
                            onChange={handleSetRemember}
                            label='Remember Me'
                        />
                    {/* fogot password */}
                    <Link
                        href={'/auth/forgot'}
                        className='text-[#E86969] ml-10 hover:underline'>
                        Forgot Password?
                    </Link>
                </div>
                <button className='bg-gradient-left h-12 w-full rounded-md max-w-[312px] mt-3 font-semibold hover:shadow-lg transition duration-200 hover:opacity-85'
                onClick={() => router.push('/')}>
                    Login
                </button>
            </div>

            {/* login with social */}
            <div className="w-full px-10 xl:px-20">
                <SocialLogin />
            </div>
        </div>
    )
}

export default AuthForm
