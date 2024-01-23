import React, { useEffect, useState } from 'react'
import HeadTitle from './re-use/HeadTitle'
import SliderWithSale from './re-use/SliderWithSale'
import { dataFindBest } from './model/hotelRoom'
function FindBestUnit() {
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
        <div className='pt-3 sm:pt-[6px] bg-[#91F2FF] sm:bg-white'>
            <HeadTitle
                title='Find Best Units for Staycation'
                icon={'/images/home/icon/Layer_3.png'}
                seeAll
                select
                discount='30'
                desc='Diskon hingga $ 1.000.000'
                maxWidhtTitle={200}
                showSelectSlide
            />
            <SliderWithSale
                pending={pending}
                imageBgUrl='/images/home/hotel-image/find-best-units.png'
                bgColor='bg-[#91F2FF]'
                listRoom={dataFindBest}
                hiddenImageOnMobile
                imageInSlide
            />
        </div>
    )
}

export default FindBestUnit
