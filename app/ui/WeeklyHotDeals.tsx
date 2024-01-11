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
                title='Premium'
                icon={'/images/home/icon/Layer_4.png'}
                seeAll
                desc='Selected premium unit with 5 star service by Travelio'
            />
            <SliderWithSale
                pending={pending}
                imageUrl='/images/home/hotel-image/hot-deals.png'
                bgColor='bg-gradient-pink'
                bgWidth={203}
                bgHeight={198}
            />
        </div>
    )
}

export default WeeklyHotDeals
