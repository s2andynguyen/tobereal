'use client'
import React, { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import { IoIosMenu } from 'react-icons/io'
interface HeaderProps {
    showSidebar?: any
}
const Header: React.FC<HeaderProps> = ({ showSidebar }) => {
    const router = useRouter()
    const pathName = usePathname()
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
                    <div className='flex justify-between items-center h-14 md:h-[90px] px-2 lg:px-10'>
                        {/* logo & nav */}
                        <div className='flex justify-start items-center lg:gap-5 xl:gap-10'>
                            {/* logo */}
                            <div
                                className='w-[90px] md:w-[115px] hover:cursor-pointer'
                                onClick={() => router.push('/')}>
                                <Image
                                    width={115}
                                    height={60}
                                    src={'/images/main-logo.png'}
                                    alt='main-logo'
                                />
                            </div>
                            {/* navbar */}
                            <div className='hidden lg:flex gap-3'>
                                <Link
                                    href={'/promotion'}
                                    className={`text-[18px] font-medium font-montserrat px-4 hover:drop-shadow-md h-12  
                                    flex justify-center items-center rounded-[30px] ${
                                        pathName === '/promotion'
                                            ? 'bg-gradient-right'
                                            : ''
                                    }`}>
                                    Promotion
                                </Link>
                                <Link
                                    href={'/property'}
                                    className={`text-[18px] font-medium font-montserrat px-4 hover:drop-shadow-md h-12  
                                    flex justify-center items-center rounded-[30px] ${
                                        pathName === '/property'
                                            ? 'bg-gradient-right'
                                            : ''
                                    }`}>
                                    List My Property
                                </Link>
                                <Link
                                    href={'/map'}
                                    className={`text-[18px] font-medium font-montserrat px-4 hover:drop-shadow-md h-12  
                                    flex justify-center items-center rounded-[30px] ${
                                        pathName === '/map' ? 'bg-gradient-right' : ''
                                    }`}>
                                    MAP
                                </Link>
                            </div>
                        </div>

                        {/* btn  */}
                        <div className='hidden lg:flex flex-row lg:gap-3 xl:gap-[34px]'>
                            <button
                                className='bg-gradient-right h-12 min-w-36 rounded-[30px] font-montserrat text-lg font-medium hover:shadow-md transiton duration-200'
                                onClick={() => router.push('/auth/register')}>
                                Register
                            </button>
                            <button
                                className='border border-primary h-12 min-w-36 rounded-[30px] font-montserrat text-lg font-medium hover:shadow-md transiton duration-200'
                                onClick={() => router.push('/auth/login')}>
                                Login
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
            <div
                className={`w-full fixed top-0 z-[9] -translate-y-full transition-all duration-200 bg-white  ${
                    isShowNavbar ? 'translate-y-0 shadow-md' : ''
                }`}>
                <div className='container mx-auto'>
                    <div className='flex justify-between items-center h-14 md:h-[90px] px-2 lg:px-10'>
                        {/* logo & nav */}
                        <div className='flex justify-start items-center lg:gap-5 xl:gap-10'>
                            {/* logo */}
                            <div
                                className='w-[90px] md:w-[115px] hover:cursor-pointer'
                                onClick={() => router.push('/')}>
                                <Image
                                    width={115}
                                    height={60}
                                    src={'/images/main-logo.png'}
                                    alt='main-logo' 
                                />
                            </div>
                            {/* navbar */}
                            <div className='hidden lg:flex gap-3'>
                                <Link
                                    href={'/promotion'}
                                    className={`text-[18px] font-medium font-montserrat px-4 hover:drop-shadow-md h-12  
                                    flex justify-center items-center rounded-[30px] ${
                                        pathName === '/promotion'
                                            ? 'bg-gradient-right'
                                            : ''
                                    }`}>
                                    Promotion
                                </Link>
                                <Link
                                    href={'/property'}
                                    className={`text-[18px] font-medium font-montserrat px-4 hover:drop-shadow-md h-12  
                                    flex justify-center items-center rounded-[30px] ${
                                        pathName === '/property'
                                            ? 'bg-gradient-right'
                                            : ''
                                    }`}>
                                    List My Property
                                </Link>
                                <Link
                                    href={'/map'}
                                    className={`text-[18px] font-medium font-montserrat px-4 hover:drop-shadow-md h-12  
                                    flex justify-center items-center rounded-[30px] ${
                                        pathName === '/map' ? 'bg-gradient-right' : ''
                                    }`}>
                                    MAP
                                </Link>
                            </div>
                        </div>

                        {/* btn  */}
                        <div className='hidden lg:flex flex-row lg:gap-3 xl:gap-[34px]'>
                            <button
                                className='bg-gradient-right h-12 min-w-36 rounded-[30px] font-montserrat text-lg font-medium hover:shadow-md transiton duration-200'
                                onClick={() => router.push('/auth/register')}>
                                Register
                            </button>
                            <button
                                className='border border-primary h-12 min-w-36 rounded-[30px] font-montserrat text-lg font-medium hover:shadow-md transiton duration-200'
                                onClick={() => router.push('/auth/login')}>
                                Login
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
