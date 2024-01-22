import React, { useEffect, useState } from 'react'
import HeadTitle from './re-use/HeadTitle'
import SliderWithSale from './re-use/SliderWithSale'
import { dataHotel } from './model/hotelRoom'
import Image from 'next/image'
function MonthlyCheaperPrice() {
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
        <div className='bg-[#e3e3e3] sm:bg-white pt-3 sm:mt-0'>
            <HeadTitle
                title='Stay Monthly For Cheaper Prices'
                icon={'/images/home/icon/Layer_2.png'}
                seeAll
                select
                desc='Diskon hingga $ 1.000.000'
                iconInline
            />
            <SliderWithSale
                pending={pending}
                imageBgUrl='/images/home/hotel-image/frame-cheaper.png'
                listRoom={dataHotel}
                hiddenImageOnMobile
            />
        </div>
    )
}

export default MonthlyCheaperPrice
