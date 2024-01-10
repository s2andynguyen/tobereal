import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { dataHotel } from './model/hotelRoom'
import SwiperWrap from '@/components/SwiperWrap'
import HeadTitle from './re-use/HeadTitle'
import { FaHouseUser } from 'react-icons/fa'
import Place from '@/icons/Header/Blockhead/Place'

function HotelLioStay() {
    return (
        <div className='pt-5 pb-3 bg-white'>
            <HeadTitle
                title='Stay with Thematic and Instagram Ambience at LioStay'
                icon={FaHouseUser}
                seeAll
            />
            <div className='container mx-auto px-4 md:px-6 xl:px-14'>
                <SwiperWrap>
                    {dataHotel.map((room, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex items-center justify-center h-full w-full '>
                                <div
                                    className='w-full m-2 h-[214px] flex flex-col justify-between rounded-[10px] overflow-hidden relative
                                after:absolute after:left-0 after:right-0  after:bg-[url("/images/home/hotel-image/demo.jpg")] after:w-full after:h-full after:bg-cover after:z-0'>
                                    {/* content */}
                                    <div
                                        className='absolute top-0 left-0 w-full h-full z-[1] bg-opacity-55 px-5 lg:px-3 pb-3
                                    flex flex-col justify-between'>
                                        {/* place */}
                                        <p className='text-[16px] font-bold text-white drop-shadow-md mt-5'>
                                            In malybu
                                        </p>

                                        {/* float info */}
                                        <div className=' '>
                                            <div className='flex items-center justify-start gap-2 mb-2 drop-shadow-md text-white'>
                                                <div className='flex gap-1 items-center text-[10px]'>
                                                    <Place size={12} /> BRAGA
                                                </div>
                                                <div className='flex gap-1 items-center text-[10px]'>
                                                    <FaHouseUser />
                                                    1BR
                                                </div>
                                            </div>
                                            {/* desc */}
                                            <p className='font-medium leading-tight text-[12px] drop-shadow-md text-white'>
                                                Good and Homey 1BR at Branz BSD Cty Apartment
                                                By Travelio - <span>Tangerang</span>
                                            </p>
                                        </div>
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

export default HotelLioStay
