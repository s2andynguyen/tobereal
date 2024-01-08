'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import { IoIosMenu } from 'react-icons/io'
interface HeaderProps {
    showSidebar?: any
}
const Header: React.FC<HeaderProps> = ({ showSidebar }) => {
    const router = useRouter()
    const [isShowNavbar, setIsShowNavBar] = useState(false)
    useEffect(() => {
        const handleScrollNavbar = () => {
            const scrollPosition = window.scrollY
            setIsShowNavBar(scrollPosition > 250)
        }
        window.addEventListener('scroll', handleScrollNavbar)

        return () => {
            window.removeEventListener('scroll', handleScrollNavbar)
        }
    })
    return (
        <>
            <div className={`w-full`}>
                <div className='container mx-auto'>
                    <div className='flex justify-between items-center h-14 md:h-[90px] px-2 md:px-10'>
                        {/* logo & nav */}
                        <div className='flex justify-start items-center'>
                            {/* logo */}
                            <div className='w-24 md:w-32'>
                                <Image
                                    width={240}
                                    height={100}
                                    src={'/images/logo.png'}
                                    alt='logo.png'
                                />
                            </div>
                            {/* navbar */}
                            <div className='hidden lg:flex gap-3'>
                                <Link
                                    href={'/'}
                                    className='text-[18px] font-medium font-montserrat px-3 hover:drop-shadow-md'>
                                    Promotion
                                </Link>
                                <Link
                                    href={'/'}
                                    className='text-[18px] font-medium font-montserrat px-3 hover:drop-shadow-md'>
                                    List My Property
                                </Link>
                                <Link
                                    href={'/'}
                                    className='text-[18px] font-medium font-montserrat px-3 hover:drop-shadow-md'>
                                    MAP
                                </Link>
                            </div>
                        </div>
    
                        {/* btn  */}
                        <div className='hidden lg:flex flex-row gap-7'>
                            <button
                                className='bg-gradient-right h-12 min-w-36 rounded-[30px] font-montserrat text-lg font-medium hover:shadow-md transiton duration-200'
                                onClick={() => router.push('/auth/login')}>
                                Login
                            </button>
                            <button
                                className='border border-primary h-12 min-w-36 rounded-[30px] font-montserrat text-lg font-medium hover:shadow-md transiton duration-200'
                                onClick={() => router.push('/auth/register')}>
                                Register
                            </button>
                        </div>
    
                        {/* menu-icon on mobile */}
                        <div
                            className='p-3 cursor-pointer hover:drop-shadow-md block lg:hidden'
                            onClick={() => {
                                showSidebar()
                            }}>
                            <IoIosMenu size={38} />
                        </div>
                    </div>
                </div>
            </div>

            {/* nav on scroll */}
            <div className={`w-full fixed top-0 z-[1] -translate-y-full transition-all duration-200 bg-white  ${isShowNavbar ? 'translate-y-0 shadow-md' : ''}`}>
                <div className='container mx-auto'>
                    <div className='flex justify-between items-center h-14 md:h-[90px] px-2 md:px-10'>
                        {/* logo & nav */}
                        <div className='flex justify-start items-center'>
                            {/* logo */}
                            <div className='w-24 md:w-32'>
                                <Image
                                    width={240}
                                    height={100}
                                    src={'/images/logo.png'}
                                    alt='logo.png'
                                />
                            </div>
                            {/* navbar */}
                            <div className='hidden lg:flex gap-3'>
                                <Link
                                    href={'/'}
                                    className='text-[18px] font-medium font-montserrat px-3 hover:drop-shadow-md'>
                                    Promotion
                                </Link>
                                <Link
                                    href={'/'}
                                    className='text-[18px] font-medium font-montserrat px-3 hover:drop-shadow-md'>
                                    List My Property
                                </Link>
                                <Link
                                    href={'/'}
                                    className='text-[18px] font-medium font-montserrat px-3 hover:drop-shadow-md'>
                                    MAP
                                </Link>
                            </div>
                        </div>

                        {/* btn  */}
                        <div className='hidden lg:flex flex-row gap-7'>
                            <button
                                className='bg-gradient-right h-12 min-w-36 rounded-[30px] font-montserrat text-lg font-medium hover:shadow-md transiton duration-200'
                                onClick={() => router.push('/auth/login')}>
                                Login
                            </button>
                            <button
                                className='border border-primary h-12 min-w-36 rounded-[30px] font-montserrat text-lg font-medium hover:shadow-md transiton duration-200'
                                onClick={() => router.push('/auth/register')}>
                                Register
                            </button>
                        </div>

                        {/* menu-icon on mobile */}
                        <div
                            className='p-3 cursor-pointer hover:drop-shadow-md block lg:hidden'
                            onClick={() => {
                                showSidebar()
                            }}>
                            <IoIosMenu size={38} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
