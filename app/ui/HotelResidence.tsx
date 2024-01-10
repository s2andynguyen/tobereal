import React from 'react'
import Place from '@/icons/Header/Blockhead/Place'
import HeadTitle from './re-use/HeadTitle'
import HotelResidenceSlide from './swiper-slider/HotelResidenceSlide'

function HotelResidence() {
  return (
    <div className='bg-white'>
      <HeadTitle title='Hotel Residence' desc='Eksklusif Pengalamen Tinggal di Hotel' icon={Place}/>

      <div className="container mx-auto px-4 md:px-6 xl:px-14 pt-2">
        <HotelResidenceSlide />
      </div>
    </div>
  )
}

export default HotelResidence