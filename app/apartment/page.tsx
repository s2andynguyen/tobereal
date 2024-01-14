'use client'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/modules'
import React, { useState } from 'react'
import './style.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import ManagementServices from './ui/ManagementServices/page'
import TrancesNews from './ui/TrancesNews/page'
import { Services_TOBE } from './frame'
import { Traces_NEWS } from './News'
function Apartment() {
    const [swiperRef, setSwiperRef] = useState(null)

    return (
        <div className='wrapper bg-white'>
            <div className='aprtment-wrap'>
                <div className='Apartment-Solution container'>
                    <div className='title-Apartment'>
                        Empty House & Apartment Solutions
                    </div>
                    <div className='Gr-RegisterNow'>
                        <p className='text-register'>Register Now</p>
                        <div className='Asset-Gr'>
                            <div className='Asset'>
                                <p className='text-asset'>Asset type</p>
                                <img src={'/images/apartment/svg/icon-register.svg'} />
                            </div>
                            <div className='Asset'>
                                <p className='text-asset'>Interior</p>
                                <img src={'/images/apartment/svg/icon-register.svg'} />
                            </div>
                            <div className='Asset'>
                                <p className='text-asset'>Asset</p>
                                <img src={'/images/apartment/svg/icon-register.svg'} />
                            </div>
                            <button className='REGISTERED-btn wrap-btn'>
                                REGISTERED
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Management-Services container'>
                <h2 className="text-black text-[32px] font-bold font-['Montserrat']">
                    Apartment Management Services by TO BE REAL
                </h2>

                <div className='Gr-Services grid grid-cols-3 gap-9'>
                    {Services_TOBE?.map((card) => (
                        <ManagementServices data={card} key={card?.id} />
                    ))}
                </div>
            </div>
            <div className='Earnings-wrap container'>
                <div className='wrap-Calculates flex items-center justify-center gap-10'>
                    <img src={'/images/apartment/Calculate.png'} />
                    <div className='content-Calculate'>
                        <h3 className='title-Calculates'>
                            Calculate Your Earning Potential
                        </h3>
                        <p className='text-Calculate'>
                            *Calculations are estimates based on data on similar units in
                            nearby apartment buildings
                        </p>
                    </div>
                </div>
                <div className='wrap-Calculates flex items-center justify-center gap-10'>
                    <div className='content-Calculate'>
                        <h3 className='title-Calculates'>
                            INCOME GUARANTEE, FREE SERVICE CHARGE!
                        </h3>
                        <p className='text-Calculate'>
                            At TO BE REAL property management, we also provide a DEFINITE
                            RENTAL GUARANTEE!
                        </p>
                    </div>
                    <img src={'/images/apartment/INCOME.png'} />
                </div>
                <div className='wrap-Calculates flex items-center justify-center gap-10'>
                    <img src={'/images/apartment/chair.png'} />
                    <div className='content-Calculate'>
                        <h3 className='title-Calculates'>FURNISHED BY TO BE REAL</h3>
                        <p className='text-Calculate'>
                            TO BE REAL will furnish your apartment according to our
                            standards, and the furniture will become your property at the
                            end of the rental period
                        </p>
                    </div>
                </div>
            </div>
            <div className='wrap-activities container gap-16'>
                <h3 className='title-Calculates'>
                    All about your units activities at your fingertips
                </h3>
                <div className='activities flex gap-9'>
                    <div className='g-activies'>
                        <img src={'/images/apartment/mkt-activitie.png'} />

                        <h4 className='title-activie title-Calculates'>
                            Marketing and Market Reach
                        </h4>
                        <ul>
                            <li className='text-activie text-Calculate '>
                                Agent Partner
                            </li>
                            <li className='text-activie text-Calculate '>
                                Corporate Partners
                            </li>
                            <li className='text-activie text-Calculate '>
                                Online Property Listing Partner
                            </li>
                        </ul>
                    </div>
                    <div className='g-activies'>
                        <img src={'/images/apartment/clean-activitie.png'} />

                        <h4 className='title-activie title-Calculates'>
                            Clear Unit Description
                        </h4>
                        <p className='text-activie text-Calculate'>
                            Photography and Content Writing are clearly complete and
                            professional
                        </p>
                        <ul>
                            <li className='text-activie text-Calculate '>
                                Our team of photographers will take 360 ​​photos, facility
                                videos, and detailed photos of your unit
                            </li>
                            <li className='text-activie text-Calculate '>
                                The description and completeness of the unit was written
                                by our content writer in detail.
                            </li>
                            <li className='text-activie text-Calculate '>
                                With all the information listed on your property page,
                                tenants will find it easy and confident to rent your unit
                                online.
                            </li>
                        </ul>
                    </div>
                    <div className='g-activies'>
                        <img src={'/images/apartment/flexlble-activitie.png'} />

                        <h4 className='title-activie title-Calculates'>
                            Flexible Payment Options
                        </h4>

                        <ul>
                            <li className='text-activie text-Calculate '>
                                Virtual Account / Bank Transfer
                            </li>
                            <li className='text-activie text-Calculate '>Credit card</li>
                            <li className='text-activie text-Calculate '>
                                Installments by Credit Card
                            </li>
                            <li className='text-activie text-Calculate '>
                                Monthly and annual rental installments without a credit
                                card
                            </li>
                        </ul>
                    </div>
                    <div className='g-activies'>
                        <img src={'/images/apartment/services-activitie.png'} />

                        <h4 className='title-activie title-Calculates'>
                            Service Standardization
                        </h4>

                        <ul>
                            <li className='text-activie text-Calculate '>
                                Guaranteed unit standardization
                            </li>
                            <li className='text-activie text-Calculate '>
                                Accommodation Equipment (Wifi Ready, linen, toiletries,
                                etc.)
                            </li>
                            <li className='text-activie text-Calculate '>
                                Customer Service 7 days a week
                            </li>
                            <li className='text-activie text-Calculate '>
                                Integrity and Transparency
                            </li>
                            <li className='text-activie text-Calculate '>
                                Trusted legal entity company
                            </li>
                            <li className='text-activie text-Calculate '>
                                Technician and Service Services 7 days a week
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='wrap-MarketingPartners container gap-8'>
                <h3 className='title-Calculates p-8'>
                    TO BE REAL Online Marketing Partner
                </h3>
                <div className='Top-Logos flex gap-9'>
                    <img src={'/images/apartment/logo-1.png'} />
                    <img src={'/images/apartment/logo-2.png'} />
                    <img src={'/images/apartment/logo-3.png'} />
                    <img src={'/images/apartment/logo-4.png'} />
                    <img src={'/images/apartment/logo-5.png'} />
                </div>
                <div className='Bottom-Logos flex gap-9'>
                    <img src={'/images/apartment/logo-6.png'} />
                    <img src={'/images/apartment/logo-7.png'} />
                    <img src={'/images/apartment/logo-8.png'} />
                    <img src={'/images/apartment/logo-9.png'} />
                </div>
            </div>
            <div className='wrap-properties container'>
                <h3 className='title-Calculates pb-8'>Whose properties do we market?</h3>
                <img src={'/images/apartment/svg/line-propertie.svg'} />
                <div className='propertie-g flex gap-14 '>
                    <div className='group-properties'>
                        <img src={'/images/apartment/svg/arrow-propertie.svg'} />
                        <div className='box-propertie'>
                            <p className='content-propertie text-Calculate '>
                                For those of you who have apartments in Jabodetabek,
                                Bandung, Semarang, Yogyakarta Makasar and Surabaya
                                (Furnished / Unfurnished).
                            </p>
                        </div>
                    </div>
                    <div className='group-properties'>
                        <img src={'/images/apartment/svg/arrow-propertie.svg'} />
                        <div className='box-propertie'>
                            <p className='content-propertie text-Calculate '>
                                Those of you who invest in apartment property and want to
                                achieve maximum yield returns.
                            </p>
                        </div>
                    </div>
                    <div className='group-properties'>
                        <img src={'/images/apartment/svg/arrow-propertie.svg'} />
                        <div className='box-propertie'>
                            <p className='content-propertie text-Calculate '>
                                Those of you who invest in apartment property and want to
                                achieve maximum yield returns.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='wrap-Testimonials container'>
                <h3 className='title-Calculates pb-8'>Testimonials</h3>
                <div className='w-full'>
                    <Swiper
                        className='sliders-katherrine'
                        loop={false}
                        pagination={true}
                        navigation={{
                            prevEl: '.custom_prev',
                            nextEl: '.custom_next'
                        }}
                        modules={[Navigation, Pagination]}
                        breakpoints={{
                            300: {
                                slidesPerView: 2
                            },
                            550: {
                                slidesPerView: 2
                            }
                        }}
                        // initialSlide={2}
                        spaceBetween={50}
                        slidesPerView={1}>
                        <SwiperSlide className='box-Katherine min-w-[400px]'>
                            <div className='wrap-Katherine'>
                                <div className='contents-Katherine'>
                                    <h4 className='title-Calculates pb-8'>Katherine</h4>
                                    <div className='text-Owners gap-8'>
                                        <p className='Owner-sz title-Calculates'>
                                            Apartment Owner
                                        </p>
                                        <p className='content-Owner-sz pb-7'>
                                            Midtown Summarecon & Puri Park View
                                        </p>
                                    </div>
                                    <p className='content-Owner-sz'>
                                        Starting from the deposit, continuing with daily
                                        cleaning, we dont need to take care of it anymore,
                                        everything has been handled by TO BE REAL
                                    </p>
                                </div>
                                <img src={'/images/apartment/room-Katherine.png'} />
                            </div>
                            <a href='#'>View Videos </a>
                        </SwiperSlide>
                        <SwiperSlide className='box-Katherine min-w-[400px]'>
                            <div className='wrap-Katherine'>
                                <div className='contents-Katherine'>
                                    <h4 className='title-Calculates pb-8'>Katherine</h4>
                                    <div className='text-Owners gap-8'>
                                        <p className='Owner-sz title-Calculates'>
                                            Apartment Owner
                                        </p>
                                        <p className='content-Owner-sz pb-7'>
                                            Midtown Summarecon & Puri Park View
                                        </p>
                                    </div>
                                    <p className='content-Owner-sz'>
                                        Starting from the deposit, continuing with daily
                                        cleaning, we dont need to take care of it anymore,
                                        everything has been handled by TO BE REAL
                                    </p>
                                </div>
                                <img src={'/images/apartment/room-Katherine.png'} />
                            </div>
                            <a href='#'>View Videos </a>
                        </SwiperSlide>
                        <SwiperSlide className='box-Katherine min-w-[400px]'>
                            <div className='wrap-Katherine'>
                                <div className='contents-Katherine'>
                                    <h4 className='title-Calculates pb-8'>Katherine</h4>
                                    <div className='text-Owners gap-8'>
                                        <p className='Owner-sz title-Calculates'>
                                            Apartment Owner
                                        </p>
                                        <p className='content-Owner-sz pb-7'>
                                            Midtown Summarecon & Puri Park View
                                        </p>
                                    </div>
                                    <p className='content-Owner-sz'>
                                        Starting from the deposit, continuing with daily
                                        cleaning, we dont need to take care of it anymore,
                                        everything has been handled by TO BE REAL
                                    </p>
                                </div>
                                <img src={'/images/apartment/room-Katherine.png'} />
                            </div>
                            <a href='#'>View Videos </a>
                        </SwiperSlide>
                        <SwiperSlide className='box-Katherine min-w-[400px]'>
                            <div className='wrap-Katherine'>
                                <div className='contents-Katherine'>
                                    <h4 className='title-Calculates pb-8'>Katherine</h4>
                                    <div className='text-Owners gap-8'>
                                        <p className='Owner-sz title-Calculates'>
                                            Apartment Owner
                                        </p>
                                        <p className='content-Owner-sz pb-7'>
                                            Midtown Summarecon & Puri Park View
                                        </p>
                                    </div>
                                    <p className='content-Owner-sz'>
                                        Starting from the deposit, continuing with daily
                                        cleaning, we dont need to take care of it anymore,
                                        everything has been handled by TO BE REAL
                                    </p>
                                </div>
                                <img src={'/images/apartment/room-Katherine.png'} />
                            </div>
                            <a href='#'>View Videos </a>
                        </SwiperSlide>
                        <SwiperSlide className='box-Katherine min-w-[400px]'>
                            <div className='wrap-Katherine'>
                                <div className='contents-Katherine'>
                                    <h4 className='title-Calculates pb-8'>Katherine</h4>
                                    <div className='text-Owners gap-8'>
                                        <p className='Owner-sz title-Calculates'>
                                            Apartment Owner
                                        </p>
                                        <p className='content-Owner-sz pb-7'>
                                            Midtown Summarecon & Puri Park View
                                        </p>
                                    </div>
                                    <p className='content-Owner-sz'>
                                        Starting from the deposit, continuing with daily
                                        cleaning, we dont need to take care of it anymore,
                                        everything has been handled by TO BE REAL
                                    </p>
                                </div>
                                <img src={'/images/apartment/room-Katherine.png'} />
                            </div>
                            <a href='#'>View Videos </a>
                        </SwiperSlide>
                    </Swiper>
                    <div
                        id='carausel-2-columns-1-arrows'
                        className='flex justify-between mb-24'>
                        <span className='mr-4 text-blue-500 flex slick-arrow custom_prev'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='40'
                                height='40'
                                viewBox='0 0 40 40'
                                fill='none'>
                                <g filter='url(#filter0_d_34_590)'>
                                    <circle cx='20' cy='16' r='16' fill='black' />
                                </g>
                                <path
                                    d='M28 17C28.5523 17 29 16.5523 29 16C29 15.4477 28.5523 15 28 15L28 17ZM11.2929 15.2929C10.9024 15.6834 10.9024 16.3166 11.2929 16.7071L17.6569 23.0711C18.0474 23.4616 18.6805 23.4616 19.0711 23.0711C19.4616 22.6805 19.4616 22.0474 19.0711 21.6569L13.4142 16L19.0711 10.3431C19.4616 9.95262 19.4616 9.31946 19.0711 8.92893C18.6805 8.53841 18.0474 8.53841 17.6569 8.92893L11.2929 15.2929ZM28 15L12 15L12 17L28 17L28 15Z'
                                    fill='white'
                                />
                                <defs>
                                    <filter
                                        id='filter0_d_34_590'
                                        x='0'
                                        y='0'
                                        width='40'
                                        height='40'
                                        filterUnits='userSpaceOnUse'
                                        color-interpolation-filters='sRGB'>
                                        <feFlood
                                            flood-opacity='0'
                                            result='BackgroundImageFix'
                                        />
                                        <feColorMatrix
                                            in='SourceAlpha'
                                            type='matrix'
                                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                            result='hardAlpha'
                                        />
                                        <feOffset dy='4' />
                                        <feGaussianBlur stdDeviation='2' />
                                        <feComposite in2='hardAlpha' operator='out' />
                                        <feColorMatrix
                                            type='matrix'
                                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                                        />
                                        <feBlend
                                            mode='normal'
                                            in2='BackgroundImageFix'
                                            result='effect1_dropShadow_34_590'
                                        />
                                        <feBlend
                                            mode='normal'
                                            in='SourceGraphic'
                                            in2='effect1_dropShadow_34_590'
                                            result='shape'
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </span>
                        <span className='text-blue-500 flex slick-arrow custom_next'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='40'
                                height='40'
                                viewBox='0 0 40 40'
                                fill='none'>
                                <g filter='url(#filter0_d_34_593)'>
                                    <circle
                                        cx='20'
                                        cy='16'
                                        r='16'
                                        transform='rotate(-180 20 16)'
                                        fill='black'
                                    />
                                </g>
                                <path
                                    d='M12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17L12 15ZM28.7071 16.7071C29.0976 16.3166 29.0976 15.6834 28.7071 15.2929L22.3431 8.92893C21.9526 8.53841 21.3195 8.53841 20.9289 8.92893C20.5384 9.31946 20.5384 9.95262 20.9289 10.3431L26.5858 16L20.9289 21.6569C20.5384 22.0474 20.5384 22.6805 20.9289 23.0711C21.3195 23.4616 21.9526 23.4616 22.3431 23.0711L28.7071 16.7071ZM12 17L28 17L28 15L12 15L12 17Z'
                                    fill='white'
                                />
                                <defs>
                                    <filter
                                        id='filter0_d_34_593'
                                        x='0'
                                        y='0'
                                        width='40'
                                        height='40'
                                        filterUnits='userSpaceOnUse'
                                        color-interpolation-filters='sRGB'>
                                        <feFlood
                                            flood-opacity='0'
                                            result='BackgroundImageFix'
                                        />
                                        <feColorMatrix
                                            in='SourceAlpha'
                                            type='matrix'
                                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                            result='hardAlpha'
                                        />
                                        <feOffset dy='4' />
                                        <feGaussianBlur stdDeviation='2' />
                                        <feComposite in2='hardAlpha' operator='out' />
                                        <feColorMatrix
                                            type='matrix'
                                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                                        />
                                        <feBlend
                                            mode='normal'
                                            in2='BackgroundImageFix'
                                            result='effect1_dropShadow_34_593'
                                        />
                                        <feBlend
                                            mode='normal'
                                            in='SourceGraphic'
                                            in2='effect1_dropShadow_34_593'
                                            result='shape'
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className='wrap-TracesNews container'>
                <h3 className='title-Calculates pb-8'>TO BE REAL Traces In The News</h3>

                <div className='gr-news flex gap-8 pb-8'>
                    {Traces_NEWS?.map((card) => (
                        <TrancesNews data={card} key={card?.id} />
                    ))}
                </div>
                <button className='btn-SeeMore wrap-btn'>See More ➔</button>
            </div>
            <div className='apartmentHouse container flex'>
                <div className='wrap-content-apartment pb-10'>
                    <h3 className='title-Calculates'>Is your apartment & house empty?</h3>
                    <p className='textapartment'>
                        Dont win it, its better to make money. Come on! Just hand it over
                        to Travelio!
                    </p>
                    <button className='register-now-btn wrap-btn'>REGISTER NOW ➔</button>
                </div>
                <img src={'/images/apartment/apartmentHouse.png'} />
            </div>
        </div>
    )
}

export default Apartment