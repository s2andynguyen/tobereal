'use client'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/modules'
import React, { useState } from 'react'
import './style.css'
import Image from 'next/image'
// icon
import { SlArrowDown } from 'react-icons/sl'
// mui
import Skeleton from '@mui/material/Skeleton'
// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
// fetch data
import ManagementServices from './ui/ManagementServices/page'
import TrancesNews from './ui/TrancesNews/page'
import Properties from './ui/properties/page'
import SlKatherine from './ui/SlKatherine/page'
import ShowRoomSl from './ui/ShowRoomSl/page'
import { ShowRoom_HOTEL } from './showRoom'
import { Testimonials } from './katherrinesData'
import { GR_properties } from './propertiesGr'
import { Services_TOBE } from './frame'
import { Traces_NEWS } from './News'
// compoment
import RegisterNow from '@/components/RegisterNow/page'

// main Apartment
function Apartment() {
    // state
    const [swiperRef, setSwiperRef] = useState(null)
    const [swiperRef1, setSwiperRef1] = useState(null)

    const [isShowContent, setIsShowContent] = useState(true)

    // mui
    const isLoading = true
    return (
        <div className='wrapper bg-white'>
            <div className='aprtment-wrap h-[650px] md:h-[450px]'>
                <div className='Apartment-Solution container flex-col  md:flex-row'>
                    <div className='title-Apartment text-center md:text-left'>
                        Empty House & Apartment Solutions
                    </div>
                    <RegisterNow />
                </div>
            </div>
            <div className='Management-Services container'>
                <h2 className='text-black font-bold text-center text-2xl md:text-[32px]'>
                    Apartment Management Services by SMART REAL
                </h2>

                <div className='Gr-Services grid grid-cols-1 gap-0 md:grid-cols-3 '>
                    {Services_TOBE?.map((card) => (
                        <ManagementServices data={card} key={card?.id} />
                    ))}
                </div>
            </div>
            <div className='Earnings-wrap container'>
                <div className='wrap-Calculates items-center justify-center gap-10 pb-5 pt-5 flex flex-col lg:flex-row'>
                    <Image
                        width={550}
                        height={290}
                        className='w-[550px] h-[auto]'
                        src={'/images/apartment/Calculate.png'}
                        alt='caluate'
                    />
                    <div className='content-Calculate'>
                        <h3 className='title-Calculates text-xl md:text-2xl text-center lg:text-right'>
                            Calculate Your Earning Potential
                        </h3>
                        <p className='text-Calculate text-base md:text-xl text-center lg:text-right'>
                            *Calculations are estimates based on data on similar units in
                            nearby apartment buildings
                        </p>
                    </div>
                </div>
                <div className='wrap-Calculates items-center justify-center gap-10 pb-5 pt-5 flex flex-col-reverse lg:flex-row'>
                    <div className='content-Calculate'>
                        <h3 className='title-Calculates text-xl md:text-2xl text-center lg:text-left'>
                            INCOME GUARANTEE, FREE SERVICE CHARGE!
                        </h3>
                        <p className='text-Calculate text-base md:text-xl text-center lg:text-left'>
                            At SMART REAL property management, we also provide a DEFINITE
                            RENTAL GUARANTEE!
                        </p>
                    </div>
                    <Image
                        width={423}
                        height={363}
                        className='w-[423px] h-[auto]'
                        src={'/images/apartment/INCOME.png'}
                        alt='caluate'
                    />
                </div>
                <div className='wrap-Calculates items-center justify-center gap-10 pb-5 pt-5 flex flex-col lg:flex-row'>
                    <Image
                        width={420}
                        height={251.648}
                        className='w-[420px] h-[auto]'
                        src={'/images/apartment/chair.png'}
                        alt='caluate'
                    />
                    <div className='content-Calculate'>
                        <h3 className='title-Calculates text-xl md:text-2xl text-center lg:text-right'>
                            FURNISHED BY SMART REAL
                        </h3>
                        <p className='text-Calculate text-base md:text-xl text-center lg:text-right'>
                            SMART REAL will furnish your apartment according to our
                            standards, and the furniture will become your property at the
                            end of the rental period
                        </p>
                    </div>
                </div>
            </div>
            <div className='wrap-activities container gap-16'>
                <h3 className='title-Calculates text-xl md:text-2xl text-center'>
                    All about your units activities at your fingertips
                </h3>
                {/* flex flex-col gap-5 lg:flex-row */}
                <div className='activities flex flex-col gap-5 xl:flex-row'>
                    <div className='mkttop flex flex-col gap-5 md:flex-row'>
                        <div className='g-activies p-0 lg:p-3'>
                            <Image
                                width={86.79}
                                height={86.85}
                                className='w-[86.79px] h-[86.85px]'
                                src={'/images/apartment/mkt-activitie.png'}
                                alt='activie'
                            />

                            <h4 className='title-activie title-Calculates text-xl md:text-2xl text-center lg:text-left'>
                                Marketing and Market Reach
                            </h4>
                            <ul>
                                <li className='text-activie text-Calculate text-base md:text-xl '>
                                    Agent Partner
                                </li>
                                <li className='text-activie text-Calculate text-base md:text-xl '>
                                    Corporate Partners
                                </li>
                                <li className='text-activie text-Calculate text-base md:text-xl '>
                                    Online Property Listing Partner
                                </li>
                            </ul>
                        </div>
                        <div className='g-activies p-0 lg:p-3'>
                            <Image
                                width={86.79}
                                height={86.85}
                                className='w-[86.79px] h-[86.85px]'
                                src={'/images/apartment/clean-activitie.png'}
                                alt='activie'
                            />

                            <h4 className='title-activie title-Calculates text-xl md:text-2xl text-center lg:text-left'>
                                Clear Unit Description
                            </h4>
                            <p className='text-activie text-Calculate text-base md:text-xl'>
                                Photography and Content Writing are clearly complete and
                                professional
                            </p>
                            <ul>
                                <li className='text-activie text-Calculate text-base md:text-xl '>
                                    Our team of photographers will take 360 ​​photos,
                                    facility videos, and detailed photos of your unit
                                </li>
                                <li className='text-activie text-Calculate text-base md:text-xl '>
                                    The description and completeness of the unit was
                                    written by our content writer in detail.
                                </li>
                                <li className='text-activie text-Calculate text-base md:text-xl '>
                                    With all the information listed on your property page,
                                    tenants will find it easy and confident to rent your
                                    unit online.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='mktbottom flex flex-col gap-5 md:flex-row'>
                        <div className='g-activies p-0 lg:p-3'>
                            <Image
                                width={86.79}
                                height={86.85}
                                className='w-[86.79px] h-[86.85px]'
                                src={'/images/apartment/flexlble-activitie.png'}
                                alt='activie'
                            />

                            <h4 className='title-activie title-Calculates text-xl md:text-2xl text-center lg:text-left'>
                                Flexible Payment Options
                            </h4>

                            <ul>
                                <li className='text-activie text-Calculate text-base md:text-xl '>
                                    Virtual Account / Bank Transfer
                                </li>
                                <li className='text-activie text-Calculate text-base md:text-xl '>
                                    Credit card
                                </li>
                                <li className='text-activie text-Calculate text-base md:text-xl '>
                                    Installments by Credit Card
                                </li>
                                <li className='text-activie text-Calculate text-base md:text-xl '>
                                    Monthly and annual rental installments without a
                                    credit card
                                </li>
                            </ul>
                        </div>
                        <div className='g-activies p-0 lg:p-3'>
                            <Image
                                width={86.79}
                                height={86.85}
                                className='w-[86.79px] h-[86.85px]'
                                src={'/images/apartment/services-activitie.png'}
                                alt='activie'
                            />

                            <h4 className='title-activie title-Calculates text-xl md:text-2xl text-center lg:text-left'>
                                Service Standardization
                            </h4>

                            <ul>
                                <li className='text-activie text-Calculate text-base md:text-xl '>
                                    Guaranteed unit standardization
                                </li>
                                <li className='text-activie text-Calculate text-base md:text-xl '>
                                    Accommodation Equipment (Wifi Ready, linen,
                                    toiletries, etc.)
                                </li>
                                <li className='text-activie text-Calculate text-base md:text-xl '>
                                    Customer Service 7 days a week
                                </li>
                                <li className='text-activie text-Calculate text-base md:text-xl '>
                                    Integrity and Transparency
                                </li>
                                <li className='text-activie text-Calculate text-base md:text-xl '>
                                    Trusted legal entity company
                                </li>
                                <li className='text-activie text-Calculate text-base md:text-xl '>
                                    Technician and Service Services 7 days a week
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='wrap-MarketingPartners container gap-6 lg:gap-8'>
                <h3 className='title-Calculates text-xl md:text-2xl p-0 text-center lg:p-8'>
                    SMART REAL Online Marketing Partner
                </h3>

                <div className='Top-Logos flex gap-3 lg:gap-9 '>
                    <Image
                        width={112}
                        height={38}
                        className='w-[auto] lg:w-[142px]'
                        src={'/images/apartment/logo-1.png'}
                        alt='top-logo'
                    />
                    <Image
                        width={40}
                        height={38}
                        className='w-[auto] lg:w-[72px]'
                        src={'/images/apartment/logo-2.png'}
                        alt='top-logo'
                    />
                    <Image
                        width={90}
                        height={33}
                        className='w-[auto] lg:w-[120px]'
                        src={'/images/apartment/logo-3.png'}
                        alt='top-logo'
                    />
                    <Image
                        width={105}
                        height={38}
                        className='w-[75px] h-[auto] lg:w-[105px]'
                        src={'/images/apartment/logo-4.png'}
                        alt='top-logo'
                    />
                    <Image
                        width={98}
                        height={38}
                        className='w-[68px] h-[auto] lg:w-[98px]'
                        src={'/images/apartment/logo-5.png'}
                        alt='top-logo'
                    />
                </div>
                <div className='Bottom-Logos flex gap-3 lg:gap-9 '>
                    <Image
                        width={115}
                        height={38}
                        className='w-[85px] h-[auto] lg:w-[115px]'
                        src={'/images/apartment/logo-6.png'}
                        alt='bottom-logo'
                    />
                    <Image
                        width={179}
                        height={41}
                        className='w-[149px] h-[auto] lg:w-[179px]'
                        src={'/images/apartment/logo-7.png'}
                        alt='bottom-logo'
                    />
                    <Image
                        width={62}
                        height={25}
                        className='w-[32px] h-[auto] lg:w-[62px]'
                        src={'/images/apartment/logo-8.png'}
                        alt='bottom-logo'
                    />
                    <Image
                        width={201}
                        height={31}
                        className='w-[151px] h-[auto] lg:w-[201px]'
                        src={'/images/apartment/logo-9.png'}
                        alt='bottom-logo'
                    />
                </div>
            </div>
            <div className='wrap-properties container'>
                <h3 className='title-Calculates text-xl md:text-2xl pb-8 text-center'>
                    Whose properties do we market?
                </h3>
                <Image
                    width={684}
                    height={2}
                    className='line-propertie hidden h-[auto] lg:block'
                    src={'/images/apartment/svg/line-propertie.svg'}
                    alt='properties'
                />
                <div className='propertie-g flex gap-14 flex-col lg:flex-row'>
                    {GR_properties?.map((card) => (
                        <Properties data={card} key={card?.id} />
                    ))}
                </div>
            </div>
            <div className='wrap-Testimonials container'>
                <h3 className='title-Calculates text-xl md:text-2xl pb-8'>
                    Testimonials
                </h3>
                <div className='slider-wrapper w-full'>
                    <Swiper
                        className='sliders-katherrine flex'
                        loop={false}
                        pagination={true}
                        navigation={{
                            prevEl: '.custom_prev',
                            nextEl: '.custom_next'
                        }}
                        modules={[Navigation, Pagination]}
                        breakpoints={{
                            300: {
                                slidesPerView: 1
                            },
                            550: {
                                slidesPerView: 1
                            },
                            960: {
                                slidesPerView: 2
                            }
                        }}
                        // initialSlide={2}
                        spaceBetween={50}
                        slidesPerView={1}>
                        {Testimonials?.map((card) => (
                            <SwiperSlide key={card?.id}>
                                <SlKatherine data={card} />
                            </SwiperSlide>
                        ))}

                        <span className='arrow-back mr-4  flex slick-arrow custom_prev'>
                            <Image
                                width={20}
                                height={20}
                                className='w-[auto]'
                                src={'/images/apartment/svg/slick-arrow-left.svg'}
                                alt='slick-arrow-r'
                            />
                        </span>
                        <span className='arrow-next flex slick-arrow custom_next'>
                            <Image
                                width={20}
                                height={20}
                                className='w-[auto]'
                                src={'/images/apartment/svg/slick-arrow-right.svg'}
                                alt='slick-arrow-r'
                            />
                        </span>
                    </Swiper>
                </div>
            </div>
            <div className='Wrap-DevloperManagement container gap-5'>
                <div className='nav-DevloperManagements flex-col items-center w-full gap-10'>
                    <div className='flex gap-10 justify-center'>
                        <button
                            onClick={() => setIsShowContent(true)}
                            className='title-Calculates text-xl md:text-2xl pb-6'>
                            Official Developer Partner
                        </button>

                        <button
                            onClick={() => setIsShowContent(false)}
                            className='title-Calculates text-xl md:text-2xl pb-6 '>
                            Building Management
                        </button>
                    </div>
                    <div className='pl-0 line-wrap flex justify-center gap-14 md:gap-2 md:pl-10'>
                        <div className={`${isShowContent ? '' : 'opacity-0'}`}>
                            <Image
                                className='w-[336px] h-[auto]'
                                src={'/images/apartment/line-DevMana.png'}
                                height={2}
                                width={336}
                                alt='line'
                            />
                        </div>
                        <div className={`${isShowContent ? 'opacity-0' : ''}`}>
                            <Image
                                className='w-[336px] h-[auto]'
                                src={'/images/apartment/line-DevMana.png'}
                                height={2}
                                width={336}
                                alt='line'
                            />
                        </div>
                    </div>

                    {isShowContent && (
                        <div className='w-full'>
                            <Swiper
                                className='sliders-Dev'
                                loop={false}
                                pagination={true}
                                navigation={{
                                    prevEl: '.custom_preva',
                                    nextEl: '.custom_nexta'
                                }}
                                modules={[Navigation, Pagination]}
                                breakpoints={{
                                    300: {
                                        slidesPerView: 1
                                    },
                                    550: {
                                        slidesPerView: 2
                                    },
                                    960: {
                                        slidesPerView: 3
                                    },
                                    1200: {
                                        slidesPerView: 4
                                    }
                                }}
                                // initialSlide={2}
                                spaceBetween={20}
                                slidesPerView={2}>
                                {ShowRoom_HOTEL?.map((card) => (
                                    <SwiperSlide key={card?.id}>
                                        <ShowRoomSl data={card} />
                                    </SwiperSlide>
                                ))}

                                <span className='arrow-back mr-4  flex slick-arrow custom_preva'>
                                    <Image
                                        width={20}
                                        height={20}
                                        className='w-[auto]'
                                        src={'/images/apartment/svg/slick-arrow-left.svg'}
                                        alt='slick-arrow-r'
                                    />
                                </span>
                                <span className='arrow-next flex slick-arrow custom_nexta'>
                                    <Image
                                        width={20}
                                        height={20}
                                        className='w-[auto]'
                                        src={
                                            '/images/apartment/svg/slick-arrow-right.svg'
                                        }
                                        alt='slick-arrow-r'
                                    />
                                </span>
                            </Swiper>
                        </div>
                    )}

                    {!isShowContent && (
                        <div className='wrap-Logo-Manage flex flex-col justify-center align-center w-full min-h-[300px] '>
                            <div className='TopLogos-Management flex justify-center'>
                                <Image
                                    width={70}
                                    height={80}
                                    className='w-[auto] lg:w-[138px]'
                                    src={'/images/apartment/logoPartner-Management.png'}
                                    alt='logoPartner'
                                />
                                <Image
                                    width={70}
                                    height={80}
                                    className='w-[auto] lg:w-[138px]'
                                    src={'/images/apartment/logoPartner-Management1.png'}
                                    alt='logoPartner'
                                />
                                <Image
                                    width={70}
                                    height={80}
                                    className='w-[auto] lg:w-[138px]'
                                    src={'/images/apartment/logoPartner-Management2.png'}
                                    alt='logoPartner'
                                />
                                <Image
                                    width={70}
                                    height={80}
                                    className='w-[auto] lg:w-[138px]'
                                    src={'/images/apartment/logoPartner-Management3.png'}
                                    alt='logoPartner'
                                />
                                <Image
                                    width={70}
                                    height={80}
                                    className='w-[auto] lg:w-[138px]'
                                    src={'/images/apartment/logoPartner-Management4.png'}
                                    alt='logoPartner'
                                />
                            </div>
                            <div className='BottomLogos-Managemant flex justify-center'>
                                <Image
                                    width={70}
                                    height={80}
                                    className='w-[auto] lg:w-[138px]'
                                    src={'/images/apartment/logoPartner-Management5.png'}
                                    alt='logoPartner'
                                />
                                <Image
                                    width={70}
                                    height={80}
                                    className='w-[auto] lg:w-[138px]'
                                    src={'/images/apartment/logoPartner-Management6.png'}
                                    alt='logoPartner'
                                />
                                <Image
                                    width={70}
                                    height={80}
                                    className='w-[auto] lg:w-[138px]'
                                    src={'/images/apartment/logoPartner-Management7.png'}
                                    alt='logoPartner'
                                />
                                <Image
                                    width={70}
                                    height={80}
                                    className='w-[auto] lg:w-[138px]'
                                    src={'/images/apartment/logoPartner-Management8.png'}
                                    alt='logoPartner'
                                />
                                <Image
                                    width={70}
                                    height={80}
                                    className='w-[auto] lg:w-[138px]'
                                    src={'/images/apartment/logoPartner-Management9.png'}
                                    alt='logoPartner'
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='wrap-TracesNews container gap-7'>
                <h3 className='title-Calculates text-xl md:text-2xl pb-8 text-center'>
                    SMART REAL Traces In The News
                </h3>

                <Swiper
                    className='gr-news sliders-Dev w-full'
                    loop={false}
                    pagination={true}
                    navigation={{
                        prevEl: '.custom_prevb',
                        nextEl: '.custom_nextb'
                    }}
                    modules={[Navigation, Pagination]}
                    breakpoints={{
                        300: {
                            slidesPerView: 1
                        },
                        550: {
                            slidesPerView: 2
                        },
                        960: {
                            slidesPerView: 3
                        },
                        1200: {
                            slidesPerView: 4
                        }
                    }}
                    // initialSlide={2}
                    spaceBetween={20}
                    slidesPerView={1}>
                    {Traces_NEWS?.map((card) => (
                        <SwiperSlide key={card?.id}>
                            <TrancesNews data={card} />
                        </SwiperSlide>
                    ))}
                    <span className='arrow-back mr-4  flex slick-arrow custom_prevb'>
                        <Image
                            width={20}
                            height={20}
                            className='w-[auto]'
                            src={'/images/apartment/svg/slick-arrow-left.svg'}
                            alt='slick-arrow-r'
                        />
                    </span>
                    <span className='arrow-next flex slick-arrow custom_nextb'>
                        <Image
                            width={20}
                            height={20}
                            className='w-[auto]'
                            src={'/images/apartment/svg/slick-arrow-right.svg'}
                            alt='slick-arrow-r'
                        />
                    </span>
                </Swiper>
                <button className='btn-SeeMore wrap-btn'>See More ➔</button>
            </div>
            <div className='apartmentHouse container flex-col lg:!flex-row'>
                <div className='wrap-content-apartment pb-10 flex flex-col items-center lg:items-start'>
                    <h3 className='title-Calculates text-xl md:text-2xl text-center lg:!text-left'>
                        Is your apartment & house empty?
                    </h3>
                    <p className='textapartment text-center lg:!text-left'>
                        Dont win it, its better to make money. Come on! Just hand it over
                        to Travelio!
                    </p>
                    <button className='register-now-btn wrap-btn'>REGISTER NOW ➔</button>
                </div>
                <Image
                    width={427}
                    height={278}
                    className='h-[auto]'
                    src={'/images/apartment/apartmentHouse.png'}
                    alt='apartmentHouse'
                />
            </div>
            <div className='Wrap-FAQ container'>
                <h3 className='title-Calculates text-xl md:text-2xl pb-8 text-center'>
                    Frequently Asked Questions(FAQ)
                </h3>
                <div className='flex flex-col gap-12 lg:flex-row'>
                    <div className='questions max-w-[420px] md:min-w-[490px]'>
                        <a
                            href='#'
                            className='title-Calculates text-xl md:text-2xl text-questions w-[364px] md:w-[434px]'>
                            - How to Get Started & TPM Areas
                        </a>
                        <a
                            href='#'
                            className='title-Calculates text-xl md:text-2xl text-questions w-[364px] md:w-[434px]'>
                            + Apartment Management Services by Travelio
                        </a>
                        <a
                            href='#'
                            className='title-Calculates text-xl md:text-2xl text-questions w-[364px] md:w-[434px]'>
                            + Property List & Standardization
                        </a>
                        <a
                            href='#'
                            className='title-Calculates text-xl md:text-2xl text-questions w-[364px] md:w-[434px]'>
                            + Guests & Payments{' '}
                        </a>
                        <a
                            href='#'
                            className='title-Calculates text-xl md:text-2xl text-questions w-[364px] md:w-[434px]'>
                            + Security
                        </a>
                        <a
                            href='#'
                            className='title-Calculates text-xl md:text-2xl text-questions w-[364px] md:w-[434px]'>
                            + Prices & Fees
                        </a>
                        <a
                            href='#'
                            className='title-Calculates text-xl md:text-2xl text-questions w-[364px] md:w-[434px]'>
                            + Property Regulations
                        </a>
                    </div>
                    <div className='answers flex flex-col gap-7'>
                        <div className='boxAnswer flex justify-between items-center max-w-[420px] md:min-w-[490px]'>
                            <p className='text-asset'>How easy is it to get started?</p>
                            <SlArrowDown />
                        </div>
                        <div className='boxAnswer flex justify-between items-center max-w-[420px] md:min-w-[490px]'>
                            <p className='text-asset'>
                                Does the apartment have to be fully furnished?
                            </p>
                            <SlArrowDown />
                        </div>
                        <div className='boxAnswer flex justify-between items-center max-w-[420px] md:min-w-[490px]'>
                            <p className='text-asset'>Area Coverage anywhere?</p>
                            <SlArrowDown />
                        </div>
                        <div className='boxAnswer flex justify-between items-center max-w-[420px] md:min-w-[490px]'>
                            <p className='text-asset'>
                                What type of contract should I sign?
                            </p>
                            <SlArrowDown />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apartment
