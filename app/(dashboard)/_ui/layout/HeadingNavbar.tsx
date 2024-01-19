import React from 'react'
import { inter } from '@/assets/styles/fonts'
import Image from 'next/image'
import Mail from '@/icons/Header-Dashboard/Mail'
import Bell from '@/icons/Header-Dashboard/Bell'
type Props = {
    title: any
}
const HeadingNavbar = ({ title }: Props) => {
    return (
        <div className='fixed top-0 right-0 hidden sm:block sm:left-[200px] md:left-[268px] bg-white h-[80px] xl:h-[110px] z-[2]'>
            <div className={``}>
                {/* <div className={`md:px-5 xl:px-12 h-full pt-3 ${inter.className} flex justify-between items-center`}> */}
                <div className='self-end mb-px'>
                    <h2 className='md:text-xl lg:text-3xl mb-3 xl:mb-5 xl:text-[44px] font-bold'>
                        {title}
                    </h2>
                    <div className='w-full h-px bg-black'></div>
                </div>

                <div className='flex items-center gap-5'>
                    <Mail />
                    <Bell />
                    <div className='flex item-center'>
                        <Image
                            src={'/dashboard/images/das-posting/avatar.jpg'}
                            height={43}
                            width={43}
                            className='w-[43px] h-[43px] rounded-full object-cover bg-opacity-85'
                            alt='avatar.jpg'
                        />
                        <div className='ml-3'>
                            <p className='font-semibold text-sm text-[#404040]'>Andrew</p>
                            <p className='text-sm text-[#404040]'>$4,000.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadingNavbar
