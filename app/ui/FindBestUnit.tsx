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
        <div className='pt-[6px]'>
            <HeadTitle
                title='Find Best Units for Staycation'
                icon={'/images/home/icon/Layer_3.png'}
                seeAll
                select
                discount='30'
                desc='Diskon hingga $ 1.000.000'
            />
            <SliderWithSale
                pending={pending}
                imageUrl='/images/home/hotel-image/find-best-units.png'
                bgColor='bg-[#91F2FF]'
                listRoom={dataFindBest}
            />
        </div>
    )
}

export default FindBestUnit
