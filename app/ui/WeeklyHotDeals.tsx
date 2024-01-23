import React, { useEffect, useState } from 'react'
import HeadTitle from './re-use/HeadTitle'
import SliderWithSale from './re-use/SliderWithSale'
import { dataFindBest } from './model/hotelRoom'
function WeeklyHotDeals() {
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
        <div className='pt-3 sm:pt-0 bg-gradient-pink sm:bg-white'>
            <HeadTitle
                title='Weekly Hot Deals 🔥'
                saleDealBadge='2 day(s)'
                select
                seeAll
                bgTitle='bg-transparent sm:bg-white'
                showSelectSlide
            />
            <SliderWithSale
                pending={pending}
                imageBgUrl='/images/home/hotel-image/hot-deals.png'
                bgColor='bg-gradient-pink'
                bgWidth={203}
                bgHeight={198}
                hotDeal
                listRoom={dataFindBest}
                imageInSlide
                hiddenImageOnMobile
            />
        </div>
    )
}

export default WeeklyHotDeals
