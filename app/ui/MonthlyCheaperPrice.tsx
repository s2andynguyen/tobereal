import React from 'react'
import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'
import { dataHotel } from './model/hotelRoom'
import SwiperWrap from '@/components/SwiperWrap'
import HeadTitle from './re-use/HeadTitle'
import { FaHouseUser } from 'react-icons/fa'
import CardWithSale from './re-use/CardWithSale'
function MonthlyCheaperPrice() {
    return (
           <>
                <HeadTitle
                    title='Stay Monthly For Cheaper Prices'
                    icon={'/images/home/icon/Layer_2.png'}
                    seeAll
                    select
                    desc='Diskon hingga $ 1.000.000'
                />
                <div className='pt-5 pb-10 bg-zinc-200 '>
                    <div className='container mx-auto px-4 md:px-6 xl:px-14 flex items-center '>
                        <div className='flex items-center justify-center shrink-0 flex-grow flex-[33.3333%] max-w-[33.3333%]'>
                            <Image src={'/images/home/hotel-image/frame-cheaper.png'} 
                                width={232}
                                height={218}
                                alt='frame-cheaper'
                                className='w-[232px] h-[218px] bg-cover object-cover'
                            />
                        </div>
                        <div className='shrink-0 flex-grow flex-[66.6667%] max-w-[66.6667%] h-[214px]'>
                            <SwiperWrap>
                                {dataHotel.map((room, index) => (
                                    <SwiperSlide key={index} >
                                        <CardWithSale 
                                            imageUrl={room.imageUrl}
                                            title={room.title}
                                            oldprice={room.oldprice}
                                            price={room.price}
                                            discount={room.discount}
                                        />
                                    </SwiperSlide>
                                ))}
                            </SwiperWrap>
                        </div>
                    </div>
                </div>
           </>
    )
}

export default MonthlyCheaperPrice
