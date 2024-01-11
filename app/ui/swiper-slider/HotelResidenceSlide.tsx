'use client'
import React, { useEffect, useState } from 'react'
import { dataHotel } from '../model/hotelRoom'
import CardNormal from '../re-use/CardNormal'
import SwiperWrap from '@/components/SwiperWrap'
import NavigationCustom from './NavigationCustom'
import CardNormalSlideSkeleton from '../skeletons/CardNormalSlideSkeleton'
import { SwiperSlide } from 'swiper/react'

function HotelResidenceSlide() {
    const [pending, setPending] = useState(true)
    useEffect(() => {
        const LoadingTimeOutId = setTimeout(() => {
            setPending(false)
        }, 1000)

        return () => {
            clearTimeout(LoadingTimeOutId)
        }
    }, [])
    if(pending) {
        return <CardNormalSlideSkeleton />
    } 
    return (
        <SwiperWrap>
            {dataHotel.map((room, index) => (
                <SwiperSlide key={index} className='h-[220px]'>
                    <CardNormal
                        title={room.title}
                        typeRoom={room.typeRoom}
                        start={room.start}
                        place={room.place}
                        icon={room.icon}
                        price={room.price}
                        imageUrl={room.imageUrl}
                    />
                </SwiperSlide>
            ))}
            <NavigationCustom />
        </SwiperWrap>
    )
}

export default HotelResidenceSlide
