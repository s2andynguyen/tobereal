'use client'
import React, { useEffect, useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import { IoIosArrowForward } from 'react-icons/io'
import Image from 'next/image'

import { dataHotel } from './model/hotelRoom'
import SwiperWrap from '@/components/SwiperWrap'
import NavigationCustom from './swiper-slider/NavigationCustom'
import RealEstateSaleSkeleton from './skeletons/RealEstateSaleSkeleton'

function RealEstateSale() {
    const [pending, setPending] = useState(true)
    useEffect(() => {
        const LoadingTimeOutId = setTimeout(() => {
            setPending(false)
        }, 1000)
        return () => {
            clearTimeout(LoadingTimeOutId)
        }
    }, [])
    return (
        <div className='pt-3 pb-[22px] bg-[#DCDCDC] '>
            <div className='container mx-auto px-2 md:px-4 xl:px-[57px]'>
                <h2 className='font-bold text-[14px] leading-tight lg:text-[20px] lg:leading-6 font-montserrat pl-3'>
                    Real Estate Sales
                </h2>
                {pending ? (
                    <RealEstateSaleSkeleton />
                ) : (
                    <SwiperWrap>
                        {dataHotel.map((room, index) => (
                            <SwiperSlide key={index} className={`h-[220px] `}>
                                <div className='w-full h-[220px] flex flex-col justify-between rounded-[10px]'>
                                    {/* content */}
                                    <div className='relative'>
                                        <div className='h-full'>
                                            <Image
                                                className='rounded-[10px] h-[140px] w-full xl:w-auto bg-cover object-cover bg-center'
                                                src={room.imageUrl}
                                                width={247}
                                                height={140}
                                                alt='hotel-image'
                                            />
                                        </div>
                                        <p className='absolute top-[15px] left-[14px] text-[14px] font-montserrat font-bold leading-[17px] text-white drop-shadow-context'>
                                            Star from Rp1 million/month
                                        </p>
                                    </div>

                                    {/* button start */}
                                    <div
                                        className='flex justify-between items-center  w-full xl:max-w-[247px] bg-gradient-bottom 
                                    rounded-[10px] h-[54px] shadow-gray hover:cursor-pointer hover:opacity-85 pl-11 '
                                        >
                                        <span className='text-[10px] leading-tight font-bold'>
                                            Star from Rp1 millinon/month
                                        </span>
                                        <IoIosArrowForward size={30} className={'mr-5'} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <NavigationCustom />
                    </SwiperWrap>
                )}
            </div>
        </div>
    )
}

export default RealEstateSale
