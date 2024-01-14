'use client'
import React, { useEffect, useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import { dataHotel } from './model/hotelRoom'
import SwiperWrap from '@/components/SwiperWrap'
import HeadTitle from './re-use/HeadTitle'
import Image from 'next/image'
import NavigationCustom from './swiper-slider/NavigationCustom'
import HotelLioStaySkeleton from './skeletons/HotelLioStaySkeleton'
function HotelLioStay() {
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
        <div className='pt-2 pb-7 bg-white'>
            <HeadTitle
                title='Stay with Thematic and Instagram Ambience at LioStay ✨'
                seeAll
            />
            <div className='container mx-auto px-2 md:px-4 xl:px-[57px] pt-2'>
                {pending ? (
                    <HotelLioStaySkeleton />
                ) : (
                    <SwiperWrap>
                        {dataHotel.map((room, index) => (
                            <SwiperSlide key={index} className='h-[220px]'>
                                <div className='h-[220px] relative rounded-[10px] overflow-hidden shadow-gray'>
                                    <div className='h-full absolute top-0 left-0'>
                                        <Image
                                            src={room.imageUrl}
                                            width={247}
                                            height={140}
                                            alt='image-room'
                                            className='h-full w-full object-cover'
                                        />
                                    </div>
                                    <div className='w-full h-[214px] flex flex-col justify-between rounded-[10px] overflow-hidden '>
                                        {/* content */}
                                        <div
                                            className='absolute top-0 left-0 h-full z-[1] px-4 lg:px-3 pt-[29px] pb-[10px]
                                        flex flex-col justify-between'>
                                            {/* place */}
                                            <p className='text-[20px] leading-6 font-bold font-montserrat text-white drop-shadow-context'>
                                                In malybu
                                            </p>

                                            {/* float info */}
                                            <div className=' '>
                                                <div className='flex items-end justify-start gap-2 mb-[10px] drop-shadow-md text-white'>
                                                    <div className='flex h-full gap-1 items-end text-[7px] leading-[8.5px]'>
                                                        <Image
                                                            src={
                                                                '/images/home/vector/group_2061.svg'
                                                            }
                                                            height={11}
                                                            width={9}
                                                            alt='group_2061'
                                                            className='w-[9px] h-[11px] self-baseline'
                                                        />
                                                        BRAGA
                                                    </div>
                                                    <div className='flex h-full gap-1 items-end text-[7px] leading-[8.5px]'>
                                                        <Image
                                                            src={
                                                                '/images/home/vector/bed.svg'
                                                            }
                                                            height={11}
                                                            width={10}
                                                            alt='bed.svg'
                                                            className='w-[10px] h-[11px] self-center'
                                                        />
                                                        1BR
                                                    </div>
                                                </div>
                                                {/* desc */}
                                                <p className='font-bold leading-tight text-[10px] font-montserrat drop-shadow-context text-white'>
                                                    Good and Homey 1BR at Branz BSD City
                                                    Apartment By Travelio - {room.place}
                                                    <span>Tangerang</span>
                                                </p>
                                            </div>
                                        </div>
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

export default HotelLioStay