import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { IoStar } from 'react-icons/io5'
import { dataHotel } from '../model/hotelRoom'
import CardNormal from '../re-use/CardNormal'
import SwiperWrap from '@/components/SwiperWrap'

function HotelResidenceSlide() {
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
        </SwiperWrap>
    )
}

export default HotelResidenceSlide
