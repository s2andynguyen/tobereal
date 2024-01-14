'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import HeadTitle from './re-use/HeadTitle'
import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'

import 'swiper/swiper-bundle.css';

const placeList = [
    {
        id: 1,
        place: 'Jakarta',
        imageUrl: '/images/home/hotel-image/demo-hotel.png'
    },
    {
        id: 2,
        place: 'Bandung',
        imageUrl: '/images/home/hotel-image/demo-hotel.png'
    },
    {
        id: 3,
        place: 'Surabaya',
        imageUrl: '/images/home/hotel-image/demo-hotel.png'
    },
    {
        id: 4,
        place: 'Mendan',
        imageUrl: '/images/home/hotel-image/demo-hotel.png'
    },
    {
        id: 5,
        place: 'Tangerang',
        imageUrl: '/images/home/hotel-image/demo-hotel.png'
    },
    {
        id: 6,
        place: 'Jakarta',
        imageUrl: '/images/home/hotel-image/demo-hotel.png'
    }

]

function NextBtnSwiper () {
    const swiper = useSwiper() 
    return (
        <button className='swiper-of-looking-place__btn-next hidden' 
        onClick={() => swiper.slideNext()}>
            <GoArrowRight size={23} color={'#fff'} />
        </button>
    )
}
function PrevBtnSwiper () {
    const swiper = useSwiper() 
    return (
        <button className='swiper-of-looking-place__btn-prev hidden' 
        onClick={() => swiper.slidePrev()}>
            <GoArrowLeft size={23} color={'#fff'} />
        </button>
    )
}
function LookingForPlace() {

        useEffect(() => {
            // swiper-of-looking-place__btn-prev
            const btnLeft:any = document.querySelector('.swiper-of-looking-place__btn-prev')
            const btnRight:any = document.querySelector('.swiper-of-looking-place__btn-next')
            const btnLeftActive = document.querySelector('.swiper-of-looking-place__btn-left-active')
            const btnRightActive = document.querySelector('.swiper-of-looking-place__btn-right-active')
            const prevSwiper = () => { btnLeft.click() }
            const nextSwiper = () => { btnRight.click() }
            btnLeftActive?.addEventListener('click', prevSwiper)
            btnRightActive?.addEventListener('click', nextSwiper) 

            return () => {
                btnLeftActive?.removeEventListener('click', prevSwiper)
                btnRightActive?.removeEventListener('click', nextSwiper)
            }
        }, [])
      
    return (
        <div className='pt-2 pb-6 bg-[#E3E3E3]'>
            <HeadTitle
                title='Looking for a place to stay? 🏠'
                desc='Find “By Travelio” units in Indonesia’s big cities'
                noBackGround
                descBolder
            />
            <div className='container mx-auto px-12 md:px-14 xl:px-[100px] pt-2 relative'>
                <div className='swiper-of-looking-place'>
                    <Swiper  
                        modules={[Navigation]}
                        spaceBetween={22}
                        slidesPerView={2}
                        breakpoints={{  
                            960: {  
                                slidesPerView: 3,
                                spaceBetween: 25
                            },
                            1200: {
                                slidesPerView: 5,
                                spaceBetween: 25
                            }
                        }}
                        className=''
                    >
                        {placeList.map((item, index) => (
                            <SwiperSlide key={index} className='swiper-of-looking-place'>
                                <div className='relative cursor-pointer select-none'>
                                    <div className='h-[200px] w-full bg-red-300 rounded-[10px] '>
                                        {/* Image */}
                                        <Image src={item.imageUrl} alt={'demo-place-img'} 
                                        width={180}
                                        height={200}    
                                        className='w-full h-full absolute top-0 left-0 bg-cover object-cover rounded-[10px]'/>
                                    </div>
                                    <p className='absolute top-[50%] left-0 w-full text-center -translate-y-[50%] font-bold font-montserrat text-[24px] leading-[29px] text-white drop-shadow-context'>{item.place}</p>
                                </div>  
                            </SwiperSlide>  
                        ))}
                        <PrevBtnSwiper/>
                        <NextBtnSwiper/>
                    </Swiper>
                </div>
                {/* Buntton out Swiper box */}  
                <button className='swiper-of-looking-place__btn-left-active w-7 h-7 bg-black rounded-full absolute top-[50%]
                -translate-y-[40%] left-3 md:left-5 xl:left-14 flex justify-center items-center z-[1] select-none cursor-pointer
                shadow-gray hover:bg-[#303030] transition duration-200'
                >
                    <GoArrowLeft size={23} color={'#fff'} />
                </button>
                <button className='swiper-of-looking-place__btn-right-active  w-7 h-7 bg-black rounded-full absolute top-[50%]
                -translate-y-[40%] right-3 md:right-5 xl:right-14 flex justify-center items-center z-[1] select-none cursor-pointer
                shadow-gray hover:bg-[#303030] transition duration-200'
                >
                    <GoArrowRight size={23} color={'#fff'} />
                </button>
            </div>
        </div>

    )
}

export default LookingForPlace