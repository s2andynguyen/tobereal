import React, { ReactComponentElement } from 'react'
import { Swiper } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
function SwiperWrap({ children }: { children: React.ReactNode }) {
    return (
        <Swiper
            className='h-[230px]'
            navigation={true}
            breakpoints={{
                320: {
                    slidesPerView: 2
                },
                960: {
                    slidesPerView: 3
                },
                1200: {
                    slidesPerView: 4
                }
            }}
            modules={[Navigation, Pagination]}>
            {children}
        </Swiper>
    )
}

export default SwiperWrap
