'use client'
import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import BookingRent from '@/app/ui/BookingRent'
interface HeadBookingProps {
    toggleTab: string, 
    setToggleTab: any
}
const HeadBooking:React.FC<HeadBookingProps> = ({toggleTab, setToggleTab}) => {
    return (
        <div className='absolute -bottom-80 sm:-bottom-36 lg:-bottom-20 left-0 h-[188px] z-[1] w-full flex justify-center items-center px-2 md:px-20 lg:px-5 xl:px-[115px]'>
            <div className='h-full w-full relative rounded-[20px]'>
                {/* option booking */}  
                <div className='absolute -top-[180px] sm:-top-[110px] lg:top-0 left-0 h-[70px] w-full sm:w-[304px] bg-white rounded-t-[20px] shadow-yellow'>
                    <div className='flex justify-evenly w-full pt-3'>
                        <p className={`font-montserrat font-bold text-lg py-1 px-5  text-center cursor-pointer ${
                            toggleTab === 'rent' ? 'text-primary' : '' 
                        }`}
                        onClick={() => setToggleTab('rent')}>
                            Rent
                        </p>
                        <p className={`font-montserrat font-bold text-lg py-1 px-5 cursor-pointer ${
                            toggleTab === 'buy' ? 'text-primary' : '' 
                        }`}
                        onClick={() => setToggleTab('buy')}>Buy</p>
                    </div>
                </div>
                {/* body booking */}
                <div className={`absolute -top-[130px] sm:-top-[60px] lg:top-[56px] left-0 z-[1] min-h-[137px] w-full bg-white rounded-tl-none rounded-[20px] shadow-yellow `}>
                {/* <div className='absolute -top-[50px] sm:top-auto left-0 z-[1] min-h-[137px] w-full bg-white rounded-tl-none rounded-[20px] shadow-yellow'> */}
                    <div className='relative'>
                        {/* vector under of option */}
                        <div className='absolute w-full sm:w-[304px] flex justify-evenly'>
                            <div className='w-[94px]'>
                                <Image
                                    src={'/images/home/vector/rent-vector.svg'}
                                    width={94}
                                    height={2}
                                    className={`w-full h-full ${toggleTab==='rent' ? '' : 'hidden'}`}
                                    alt='rent-vector.svg'
                                />
                            </div>
                            <div className='w-[94px]'>
                                <Image
                                    src={'/images/home/vector/rent-vector.svg'}
                                    width={94}
                                    height={2}
                                    className={`w-full h-full ${toggleTab==='buy' ? '' : 'hidden'}`}
                                    alt='rent-vector.svg'
                                />
                            </div>
                        </div>

                        {/* BookingRent component */}
                        <BookingRent toggleTab={toggleTab} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadBooking
