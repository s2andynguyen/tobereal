'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '@/redux/store'
import { UseDispatch } from 'react-redux'
import { IoCheckmark } from 'react-icons/io5'
import { openModal } from '@/redux/features/modal-slice'
import { chageLanguage } from '@/redux/features/language'
import ArrowDown from '@/icons/Arrow/ArrowDown'
interface SidebarProps {
    isShow: boolean
    hiddenSidebar?: any
}
const Sidebar: React.FC<SidebarProps> = ({ isShow, hiddenSidebar }) => {
    const [isSelectLanguage, setIsSelectLanguage] = useState(false)
    const router = useRouter()
    const dispatch = useDispatch()
    const listLanguage = useAppSelector((state) => state.language.languages)
    const handleChangeRoute = (path: string) => {
        hiddenSidebar()
        router.push(path)
    }
    const handleChangeLanguage = (locale: string) => {
        dispatch(chageLanguage(locale))
    }
    const handleToggleLanguage = () => {
        setIsSelectLanguage(!isSelectLanguage)
    }
    return (
        <div className='block lg:hidden'>
            {/* layout */}
            <div
                className={`h-full w-full fixed top-0 left-0 bg-zinc-900 bg-opacity-70 transition duration-300 z-10 ${
                    isShow ? 'block' : 'hidden'
                }`}
                onClick={() => hiddenSidebar()}></div>
            <div
                className={`w-[275px] fixed top-0 right-0 h-full bg-white transition duration-300 z-10 ${
                    isShow ? 'translate-x-0' : 'translate-x-full'
                }`}>
                {/* btn  */}
                <div className='flex flex-col gap-3 xl:gap-[34px] px-5 pt-5 pb-3'>
                    <button
                        className='border border-primary h-12 min-w-36 rounded-[10px] font-montserrat text-lg font-medium hover:shadow-md transiton duration-200'
                        onClick={() => {
                            dispatch(openModal('login'))
                            hiddenSidebar()
                        }}>
                        Login
                    </button>
                    <button
                        className='bg-gradient-right h-12 min-w-36 rounded-[10px] font-montserrat text-lg font-medium hover:shadow-md transiton duration-200'
                        onClick={() => {
                            dispatch(openModal('register'))
                            hiddenSidebar()
                        }}>
                        Register
                    </button>
                </div>
                <ul>
                    <li className='px-5 hover:bg-[#e3e3e3] transition duration-200 cursor-pointer'>
                        <div
                            className='flex gap-2 pt-4 pb-3 border-b border-zinc-900/10'
                            onClick={() => handleChangeRoute('/')}>
                            <Image
                                src={'/images/nav/home-icon.svg'}
                                width={25}
                                height={25}
                                alt='icon-navbar-1.png'
                                className='w-6 h-6'
                            />
                            <span>Home</span>
                        </div>
                    </li>
                    <li className='px-5 hover:bg-[#e3e3e3] transition duration-200 cursor-pointer'>
                        <div
                            className='flex gap-2 pt-4 pb-3 border-b border-zinc-900/10'
                            onClick={() => handleChangeRoute('/')}>
                            <Image
                                src={'/images/nav/icon-navbar-2.png'}
                                width={25}
                                height={25}
                                alt='icon-navbar-2.png'
                                className='w-6 h-6'
                            />
                            <span>Pengelolaan Apartemen</span>
                        </div>
                    </li>
                    <li className='px-5 hover:bg-[#e3e3e3] transition duration-200 cursor-pointer'>
                        <div
                            className='flex gap-2 pt-4 pb-3 border-b border-zinc-900/10'
                            onClick={() => handleChangeRoute('/deposit')}>
                            <Image
                                src={'/images/nav/icon-navbar-3.png'}
                                width={25}
                                height={25}
                                alt='icon-navbar-3.png'
                                className='w-6 h-6'
                            />
                            <span>Deposit</span>
                        </div>
                    </li>

                    {/* Language */}
                    <li className='cursor-pointer select-none'>
                        <div
                            className='px-5 bg-white hover:bg-[#e3e3e3] relative z-[1]'
                            onClick={handleToggleLanguage}>
                            <div className='flex items-center justify-between pt-4 pb-3 pr-3 border-b border-zinc-900/10 select-none'>
                                <div className='flex items-center gap-2'>
                                    <Image
                                        src={'/images/nav/global-language-com.svg'}
                                        width={25}
                                        height={25}
                                        alt='global-language-com.svg'
                                        className='w-6 h-6'
                                    />
                                    <span>Language</span>
                                </div>

                                <ArrowDown className={`w-3 h-3 transition-all duration-200 ${isSelectLanguage ? '-rotate-180' : 'rotate-0'}`} />
                            </div>
                        </div>
                        <ul
                            className={`pl-4 transition-all duration-200 overflow-hidden  ${
                                isSelectLanguage
                                    ? 'h-[110px] visible translate-y-0 opacity-100'
                                    : 'h-0 invisible -translate-y-[50%] opacity-0'
                            }`}>
                            {listLanguage.map((lang, index) => (
                                <li
                                    key={index}
                                    className='px-5 hover:bg-[#e3e3e3] transition duration-200 cursor-pointer'
                                    onClick={() => handleChangeLanguage(lang.locale)}>
                                    <div className='flex items-center justify-between gap-2 pt-4 pb-3 border-b border-zinc-900/10 pr-5'>
                                        <div>
                                            <span className='uppercase'>
                                                {lang.locale} -{' '}
                                            </span>
                                            ({lang.name})
                                        </div>
                                         <IoCheckmark  size={20} className={`transition-all duration-200 ${
                                            lang.selected ? 'visible opacity-100 scale-1' : 'invisible opacity-0 scale-0'
                                         }`} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className='px-5 hover:bg-[#e3e3e3] transition duration-200 cursor-pointer'>
                        <div
                            className='flex gap-2 pt-4 pb-3 border-b border-zinc-900/10'
                            onClick={() => handleChangeRoute('/profile')}>
                            <Image
                                src={'/images/nav/icon-navbar-4.png'}
                                width={25}
                                height={25}
                                alt='icon-navbar-4.png'
                                className='w-6 h-6'
                            />
                            <span>Profile</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
