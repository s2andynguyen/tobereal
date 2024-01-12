import React, { useEffect, useState } from 'react'
import HeadTitle from './re-use/HeadTitle'
import SliderWithSale from './re-use/SliderWithSale'
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
        <div className='pt-[6px]'>
            <HeadTitle
                title='Weekly Hot Deals 🔥'
                saleDealBadge='2 day(s)'
                select
                seeAll
            />
            <SliderWithSale
                pending={pending}
                imageUrl='/images/home/hotel-image/hot-deals.png'
                bgColor='bg-gradient-pink'
                // imageStyle={{marginLeft: '30px'}}
                bgWidth={203}
                bgHeight={198}
            />
        </div>
    )
}

export default WeeklyHotDeals
