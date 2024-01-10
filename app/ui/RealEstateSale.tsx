import React from 'react'
import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'
import { dataHotel } from './model/hotelRoom'
import SwiperWrap from '@/components/SwiperWrap'
import { GoChevronRight } from 'react-icons/go'

function RealEstateSale() {
    return (
        <div className='pt-3 pb-5 bg-zinc-200 '>
            <div className='container mx-auto px-4 md:px-6 xl:px-14'>
                <h2 className='font-bold text-lg mb-3 pl-2'>Real Estate Sales</h2>

                <SwiperWrap>
                    {dataHotel.map((room, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex items-center justify-center h-full w-full '>
                                <div className='w-full m-2 h-[214px] flex flex-col justify-between rounded-[10px]'>
                                    {/* content */}
                                    <div className='relative'>
                                        <div className='w-full h-full'>
                                            <Image
                                                className='rounded-[10px] h-[140px] w-full bg-cover object-cover bg-center'
                                                src={room.imageUrl}
                                                width={300}
                                                height={180}
                                                alt='hotel-image'
                                            />
                                        </div>
                                        <p className='absolute top-3 left-2 text-[14px] font-montserrat font-medium leading-tight text-white drop-shadow-md'>
                                            Star from Rp1 million/month
                                        </p>
                                    </div>

                                    {/* buttonn start */}
                                    <div className='flex justify-between items-center bg-gradient-bottom rounded-[10px] h-[50px] 
                                    shadow-gray hover:cursor-pointer hover:opacity-85 pl-8 '>
                                        <span className='text-[12px] font-semibold'>Star from Rp1 millinon/month</span>
                                        <GoChevronRight size={32} className={'mr-3'}  />
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </SwiperWrap>
            </div>
        </div>
    )
}

export default RealEstateSale
