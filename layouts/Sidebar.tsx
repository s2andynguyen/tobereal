'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface SidebarProps {
    isShow: boolean
    hiddenSidebar?: any
}
const Sidebar: React.FC<SidebarProps> = ({ isShow, hiddenSidebar }) => {
    const router = useRouter()  
    return (
        <div className='block lg:hidden'>
            {/* layout */}
            <div
                className={`h-full w-full fixed top-0 left-0 bg-zinc-900 bg-opacity-70 transition duration-500 z-10 ${
                    isShow ? 'block' : 'hidden'
                }`}
                onClick={() => hiddenSidebar()}></div>
            <div
                className={`w-[300px] fixed top-0 right-0 h-full bg-white transition duration-500 z-10 ${
                    isShow ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <ul>
                    <li className='px-5'>
                        <div
                            className='flex gap-2 pt-4 pb-3 border-b border-zinc-900/10'
                            onClick={() => router.push('/')}>
                            <Image
                                src={'/images/nav/icon-navbar-1.png'}
                                width={25}
                                height={25}
                                alt='icon-navbar-1.png'
                                className='w-6 h-6'
                            />
                            <span>Home</span>
                        </div>
                    </li>
                    <li className='px-5'>
                        <div
                            className='flex gap-2 pt-4 pb-3 border-b border-zinc-900/10'
                            onClick={() => router.push('/promotion')}>
                            <Image
                                src={'/images/nav/icon-navbar-2.png'}
                                width={25}
                                height={25}
                                alt='icon-navbar-2.png'
                                className='w-6 h-6'
                            />
                            <span>Promotion</span>
                        </div>
                    </li>
                    <li className='px-5'>
                        <div
                            className='flex gap-2 pt-4 pb-3 border-b border-zinc-900/10'
                            onClick={() => router.push('/')}>
                            <Image
                                src={'/images/nav/icon-navbar-3.png'}
                                width={25}
                                height={25}
                                alt='icon-navbar-3.png'
                                className='w-6 h-6'
                            />
                            <span>Pengelolaan Apartemen</span>
                        </div>
                    </li>
                    <li className='px-5'>
                        <div
                            className='flex gap-2 pt-4 pb-3 border-b border-zinc-900/10'
                            onClick={() => router.push('/')}>
                            <Image
                                src={'/images/nav/icon-navbar-4.png'}
                                width={25}
                                height={25}
                                alt='icon-navbar-4.png'
                                className='w-6 h-6'
                            />
                            <span>Referensikan Pemilik</span>
                        </div>
                    </li>
                    <li className='px-5'>
                        <div
                            className='flex gap-2 pt-4 pb-3 border-b border-zinc-900/10'
                            onClick={() => router.push('/')}>
                            <Image
                                src={'/images/nav/icon-navbar-5.png'}
                                width={25}
                                height={25}
                                alt='icon-navbar-5.png'
                                className='h-6 w-6'
                            />
                            <span>Situs travelio.com</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
