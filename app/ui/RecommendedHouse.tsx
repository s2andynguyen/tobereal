import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import HeadTitle from './re-use/HeadTitle'
import CardRecommended from './re-use/CardRecommended'
import SwiperWrap from '@/components/SwiperWrap'
import { HouseList } from './model/HouseList'
import { SwiperSlide } from 'swiper/react'
import ButtonPrevSwiper from './swiper-slider/ButtonPrevSwiper'
import ButtonNextSwiper from './swiper-slider/ButtonNextSwiper'
import CardRecommendedSkeleton from './skeletons/CardRecommendedSkeleton'
function RecommendedHouse() {
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
        <div className='bg-white pt-1'>
            <HeadTitle
                title='Recommended Houses 🏠'
                select
            />
            {/* RecommendedHouse swiper */}
            <div className='container mx-auto px-2 md:px-4 xl:px-14 pb-5'>
                {pending ? 
                    <CardRecommendedSkeleton type='house'/>
                :
                <SwiperWrap>
                    {HouseList.map((room, index) => (
                        <SwiperSlide key={index} className='h-[220px]'>
                            <CardRecommended
                                typeRoom={room.typeRoom}
                                type={room.type}
                                title={room.title}
                                place={room.place}
                                imageUrl={room.imageUrl}
                                liked={room.liked}
                                latest={room.latest}
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

export default RecommendedHouse
