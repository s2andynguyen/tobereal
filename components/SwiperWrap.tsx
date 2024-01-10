import React from 'react'
import { Swiper } from 'swiper/react'
import { Navigation } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import '@/assets/styles/swiper.css'

function SwiperWrap({ children }: { children: React.ReactNode }) {
    return (
        <div className='swiper-wrap'>
            <Swiper
                modules={[Navigation]}
                spaceBetween={22}
                slidesPerView={2}
                navigation
                breakpoints={{
                    960: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 4
                    }
                }}>
                {children}
            </Swiper>
        </div>
    )
}

export default SwiperWrap
