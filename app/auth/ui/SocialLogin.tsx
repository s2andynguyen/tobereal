'use client'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'
import { usePathname, useRouter } from 'next/navigation'
function SocialLogin() {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <div className={`flex flex-col items-center gap-10 mt-3 ${pathname==='/auth/login'? 'md:mt-16': 'md:mt-0'}`}>
            {/* seperate */}
            <div className='flex justify-center items-center w-full md:w-[60%] xl:w-[40%] gap-2'>
                <span className='block h-px w-full flex-[30%] bg-black/50'></span>
                <span className='text-black/80 text-lg flex-grow-1'>Or With</span>
                <span className='block h-px w-full flex-[30%] bg-black/50'></span>
            </div>

            {/* login width facebook or google */}
            <div className='flex flex-col xl:flex-row xl:gap-8 gap-5'>
                {/* facebook */}
                <div className='flex flex-justify-start items-center bg-[#1877F2] rounded-[10px] w-60 md:w-[312px] h-12 pl-3 cursor-pointer hover:opacity-85 hover:shadow-lg transition duration-200'>
                    <FaFacebookF size={20} color={'#fff'} />
                    <span className='text-sm md:text-[16px] font-semibold font-montserrat text-white ml-5 md:ml-10'>
                        Login with Facebook
                    </span>
                </div>

                {/* google */}
                <div className='flex flex-justify-start items-center rounded-[10px] w-60 md:w-[312px] h-12 pl-3 border cursor-pointer border-black/40 hover:opacity-85 hover:shadow-lg transition duration-200'>
                    <FcGoogle size={20} />
                    <span className='text-sm md:text-[16px] font-semibold font-montserrat ml-7 md:ml-10 text-black/60'>
                        Login with Google
                    </span>
                </div>
            </div>

            {/* option to signIn or signUp */}
            {pathname === '/auth/login' ? (
                <div className='flex items-center font-medium self-start sm:ml-6 sm:mt-5'>
                    Don&#39;t have an account ?
                    <span
                        className='text-[#2F89FC] cursor-pointer hover:underline hover:opacity-85 inline-block p-1'
                        onClick={() => router.push('/auth/register')}>
                        Sign Up
                    </span>
                </div>
            ) : (
                <div className='flex items-center font-medium self-center ml-6 mt-5 group text-center'>
                    <span className='group-hover:underline'>
                        Already have an account?
                    </span>
                    <span
                        className='text-[#2F89FC] cursor-pointer no-underline hover:underline hover:opacity-85 inline-block p-1'
                        onClick={() => router.push('/auth/login')}>
                        Login
                    </span>
                </div>
            )}
        </div>
    )
}

export default SocialLogin
