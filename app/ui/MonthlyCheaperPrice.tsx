import React, { useEffect, useState } from 'react'
import HeadTitle from './re-use/HeadTitle'
import SliderWithSale from './re-use/SliderWithSale'
import { dataHotel } from './model/hotelRoom'
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
        <>
            <HeadTitle
                title='Stay Monthly For Cheaper Prices'
                icon={'/images/home/icon/Layer_2.png'}
                seeAll
                select
                desc='Diskon hingga $ 1.000.000'
            />
            <SliderWithSale
                pending={pending}
                imageUrl='/images/home/hotel-image/frame-cheaper.png'
                listRoom={dataHotel}
            />
        </>
    )
}

export default MonthlyCheaperPrice
