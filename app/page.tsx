'use client'
import { useState } from 'react'
import Image from 'next/image'
import MainLayout from '@/layouts/MainLayout'
import HeadBooking from '@/components/HeadBooking'
import HotelResidence from './ui/HotelResidence'
import RealEstateSale from './ui/RealEstateSale'
import HotelLioStay from './ui/HotelLioStay'
import MonthlyCheaperPrice from './ui/MonthlyCheaperPrice'

export default function Home() {
    const [toggleTab , setToggleTab] = useState('buy')
    const handleSetToggleTab = (value:string) => {
        setToggleTab(value)
    }
    return (
        <MainLayout>
            <div className={`w-full h-60 lg:mb-32 sm:h-[321px] bg-headblock bg-no-repeat bg-cover bg-left-top md:bg-center ${
                toggleTab === 'rent' ? 'sm:mb-40 mb-72' : 'sm:mb-20 mb-[180px]'
            }`}>
                <div className='container mx-auto h-full bg-opacity-35 relative'>
                    <div className='flex gap-3 h-full px-5 md:px-10 lg:px-[115px]'>
                      {/* title & content */}
                        <div className='flex-[65%] lg:flex-[50%] h-full '>
                            <div className='flex flex-col md:py-6 pt-10'>
                                <h2 className='h2 drop-shadow-title'>Utility and quality</h2>
                                <p className='font-medium max-w-[456px] leading-5 text-[sm] md:text-[16px]'>
                                    Create a good living or working environment, with the
                                    right amenities and quality for you
                                </p>    
                            </div>  
                        </div>

                        {/* image headblock*/}
                        <div className='flex-[35%] lg:flex-[50%] h-full '>
                             <div className='h-full flex justify-center items-start'>
                                <Image
                                    src={'/images/home/img-content-headblock.png'}
                                    width={266}
                                    height={227}
                                    className=' md:mt-2 mt-8 '
                                    alt='img-content-headblock.png'
                                />
                            </div>
                        </div>
                    </div>
                    {/* block booking */}
                    <HeadBooking toggleTab={toggleTab} setToggleTab={handleSetToggleTab}/>
                </div>
            </div>
            {/* content */}
            <div className='h-full  pb-16'>
                {/* Section 1 */}
                <HotelResidence />

                {/* Section 2 */}
                <RealEstateSale />

                {/* Section 3 */}
                <HotelLioStay />

                {/* Section 4 */}
                <MonthlyCheaperPrice />
            </div>

        </MainLayout>
    )
}
