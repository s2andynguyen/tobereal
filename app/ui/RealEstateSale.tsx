import React from 'react'
import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'
import { dataHotel } from './model/hotelRoom'
import SwiperWrap from '@/components/SwiperWrap'
// import { GoChevronRight } from 'react-icons/go'
import { IoIosArrowForward } from "react-icons/io";

function RealEstateSale() {
    return (
        <div className='pt-3 pb-[22px] bg-[#DCDCDC] '>
            <div className='container mx-auto px-4 md:px-6 xl:px-[63px]'>
                <h2 className='font-bold text-[20px] leading-6 font-montserrat pl-2 mb-2'>Real Estate Sales</h2>
                <SwiperWrap>
                    {dataHotel.map((room, index) => (
                        <SwiperSlide key={index} className='h-[220px]'>
                                <div className='w-full h-full flex flex-col justify-between rounded-[10px]'>
                                    {/* content */}
                                    <div className='relative'>
                                        <div className='h-full'>
                                            <Image
                                                className='rounded-[10px] h-[140px] w-full bg-cover object-cover bg-center'
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

                                    {/* buttonn start */}
                                    <div className='flex justify-between items-center bg-gradient-bottom rounded-[10px] h-[54px] 
                                    shadow-gray hover:cursor-pointer hover:opacity-85 pl-11 '>
                                        <span className='text-[10px] leading-tight font-bold'>Star from Rp1 millinon/month</span>
                                        <IoIosArrowForward size={30} className={'mr-5'}  />
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
