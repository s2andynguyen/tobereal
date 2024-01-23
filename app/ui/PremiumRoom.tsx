import React, { useEffect, useState } from 'react'
import HeadTitle from './re-use/HeadTitle'
import SliderWithSale from './re-use/SliderWithSale'
import { dataPremium } from './model/hotelRoom'
function PremiumRoom() {
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
        <div className='pt-3 sm:pt-[6px]'>
            <HeadTitle
                title='Premium'
                icon={'/images/home/icon/Layer_4.png'}
                seeAll
                desc='Selected premium unit with 5 star service by Travelio'
                descBolder
                iconHeight={26}
                iconWidth={14}
                showSelectSlide
            />
            <SliderWithSale
                pending={pending}
                imageBgUrl='/images/home/hotel-image/premium-img.png'
                bgColor='bg-gradient-fade-yellow'
                bgWidth={333}
                bgHeight={221}
                listRoom={dataPremium}
                hiddenImageOnMobile
                imageInSlide
            />
        </div>
    )
}

export default PremiumRoom
