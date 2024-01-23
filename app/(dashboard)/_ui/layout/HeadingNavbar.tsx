import React from 'react'
import { inter } from '@/assets/styles/fonts'
import Image from 'next/image'
import Mail from '@/icons/Header-Dashboard/Mail'
import Bell from '@/icons/Header-Dashboard/Bell'
import { IoIosMenu } from 'react-icons/io'
type Props = {
    title: any
    isShowSidebar: boolean
    toggleSidebar: any
}
const HeadingNavbar = ({ title, isShowSidebar, toggleSidebar }: Props) => {
    return (
        <div className={`header-layout-style fixed top-0 right-0 w-full xl:pl-[var(--leftsidebar-width)] h-[var(--navbar-height)] 
            z-[2] transition-all duration-300 ${ isShowSidebar ? 'lg:pl-[var(--leftsidebar-width)]' : '' }`}
        >
            {/* wrapper */}
            <div className={`pr-4 pl-2 md:pr-8 md:pl-5 xl:px-12 h-full sm:pt-3 ${inter.className} flex justify-between items-center`}>
                <div className='xl:self-end xl:mb-5 flex justify-center items-center'>
                    {/* menu-icon on mobile */}
                    <div
                        className='sm:px-3 py-3 cursor-pointer hover:drop-shadow-md block xl:hidden'
                        onClick={() => {
                            toggleSidebar()
                        }}>
                        <IoIosMenu size={30} />
                    </div>
                    <h2 className='leading-tight md:text-xl lg:text-3xl pl-3 xl:pl-0 xl:text-[44px] font-bold'>
                        {title}
                    </h2>
                    {/* <div className='w-full h-px bg-black'></div> */}
                </div>

                <div className='flex items-center gap-5'>
                    <div className='hidden sm:block'><Mail/></div>
                    <div className='hidden sm:block'><Bell/></div>
                    <div className='flex flex-row items-center'>
                            <Image
                                src={'/dashboard/images/das-posting/avatar.jpg'}
                                height={43}
                                width={43}
                                className='w-[30px] h-[30px] sm:w-[43px] sm:h-[43px] rounded-full object-cover bg-opacity-85 flex-grow flex-shrink-0'
                                alt='avatar.jpg'
                            />
                        <div className='ml-[6px] sm:ml-3'>
                            <p className='font-semibold text-[12px] sm:text-sm text-[#404040]'>Andrew</p>
                            <p className='text-[10px] sm:text-sm text-[#404040]'>$4,000.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadingNavbar
