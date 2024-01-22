import React, { useEffect, useState } from 'react'
import HeadTitle from './re-use/HeadTitle'
import CardRecommended from './re-use/CardRecommended'
import SwiperWrap from '@/components/SwiperWrap'
import { BestSellingList } from './model/BestSellingList'
import { SwiperSlide } from 'swiper/react'
import ButtonPrevSwiper from './swiper-slider/ButtonPrevSwiper'
import ButtonNextSwiper from './swiper-slider/ButtonNextSwiper'
import CardRecommendedSkeleton from './skeletons/CardRecommendedSkeleton'
function BestSellingApartment() {
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
        <div className='bg-white pt-3'>
            <HeadTitle
                title='Best Selling Apartment Buildings 🏆'
                select
            />
            {/* BestSellingApartment swiper */}
            <div className='container mx-auto px-2 md:px-4 xl:px-14 pt-[10px] pb-5'>
                {pending ? 
                    <CardRecommendedSkeleton type='apartment'  />
                :
                <SwiperWrap>
                    {BestSellingList.map((room, index) => (
                        <SwiperSlide key={index} className='max-w-[247px] sm:max-w-full h-[220px]'>
                            <CardRecommended
                                typeRoom={room.typeRoom}
                                type={room.type}
                                title={room.title}
                                imageUrl={room.imageUrl}
                                price={room.price}
                                bestSelling
                            />
                        </SwiperSlide>
                    ))}
                    <ButtonPrevSwiper />
                    <ButtonNextSwiper />
                </SwiperWrap>}
            </div>
        </div>
    )
}

export default BestSellingApartment
