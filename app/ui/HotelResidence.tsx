import React from 'react'
import HeadTitle from './re-use/HeadTitle'
import HotelResidenceSlide from './swiper-slider/HotelResidenceSlide'

function HotelResidence() {
    return (
        <div className='bg-white'>
            <HeadTitle
                title='Hotel Residence'
                desc='Eksklusif Pengalamen Tinggal di Hotel'
                icon={'/images/home/icon/Layer_1.png'}
            />

            <div className='container mx-auto px-4 md:px-6 xl:px-[63px] pt-2 pb-4'>
                <HotelResidenceSlide />
            </div>
        </div>
    )
}

export default HotelResidence
