import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import HeadTitle from './re-use/HeadTitle'
import CardRecommended from './re-use/CardRecommended'
import SwiperWrap from '@/components/SwiperWrap'
import { ApartmentList } from './model/ApartmentList'
import { SwiperSlide } from 'swiper/react'
import ButtonPrevSwiper from './swiper-slider/ButtonPrevSwiper'
import ButtonNextSwiper from './swiper-slider/ButtonNextSwiper'
import CardRecommendedSkeleton from './skeletons/CardRecommendedSkeleton'
function RecommendedApartments() {
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
        <div className='bg-[#e3e3e3] pt-1'>
            <HeadTitle
                title='Recommended Apartments 🏬'
                select
                selectBackGround='bg-[#e3e3e3]'
            />
            {/* RecommendedApartments swiper */}
            <div className='container mx-auto px-2 md:px-4 xl:px-14 pt-[10px] pb-5'>
                {pending ? 
                    <CardRecommendedSkeleton type='apartment'  />
                :
                <SwiperWrap>
                    {ApartmentList.map((room, index) => (
                        <SwiperSlide key={index} className='max-w-[247px] sm:max-w-full h-[220px]'>
                            <CardRecommended
                                typeRoom={room.typeRoom}
                                type={room.type}
                                title={room.title}
                                place={room.place}
                                imageUrl={room.imageUrl}
                                liked={room.liked}
                                latest={room.latest}
                                point={room.point}
                                price={room.price}
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

export default RecommendedApartments
