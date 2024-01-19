import React from 'react'
import DashboardLayout from '../_ui/layout/DashboardLayout'
import { inter } from '@/assets/styles/fonts'
import './style-booking.css'
import Image from 'next/image'
const Booking = () => {
    return (
        <DashboardLayout title='My Bookings'>
            <div className={`pt-[51px] md:px-10 xl:pl-[41px] xl:pr-[90px] min-h-[300px] pb-14 ${inter.className} `}>
                <div className='my-booking__head my-booking__head--grid mb-6 max-w-[1500px]'>
                    <div></div>
                    <div>Place to Rent</div>
                    <div className='text-center'>Room Number</div>
                    <div>Time</div>
                    <div>Price</div>
                    <div></div>
                </div>

                {/* cart 1 */}
                <div className='my-booking__item my-booking__head--grid mb-[30px]'>
                    <div>1</div>
                    <div>
                        <p className='font-bold mb-[16px] leading-[22px]'>Gran Melia Hotel Jakarta - Jakarta</p>
                        <p>Hotel Residence 🏨</p>
                    </div>
                    <div>1</div>
                    <div>1 Day</div>
                    <div>$ 2,000.00</div>
                    <div className=''>
                      <span>
                        <Image src={'/dashboard/images/my-booking/close-icon.svg'}
                        height={31}
                        width={31}
                        alt='close-icon.svg'
                        className='w-[31px] h-auto object-cover cursor-pointer hover:drop-shadow-md' />
                      </span>
                    </div>
                </div>

                {/* cart 2*/}
                <div className='my-booking__item my-booking__head--grid mb-[30px]'>
                    <div>1</div>
                    <div className='h-full w-full flex justify-center items-center'>
                        <p className='font-bold mb-[16px] leading-[22px]'>Gran Melia Hotel Jakarta - Jakarta</p>
                        <p>Hotel Residence 🏨</p>
                    </div>
                    <div>1</div>
                    <div>1 Day</div>
                    <div>$ 2,000.00</div>
                    <div className=''>
                      <span>
                        <Image src={'/dashboard/images/my-booking/close-icon.svg'}
                        height={31}
                        width={31}
                        alt='close-icon.svg'
                        className='w-[31px] h-auto object-cover cursor-pointer hover:drop-shadow-md' />
                      </span>
                    </div>
                </div>

                {/* cart */}
                <div className='my-booking__item my-booking__head--grid mb-[30px]'>
                    <div>1</div>
                    <div className=''>
                        <p className='font-bold mb-[16px] leading-[22px]'>Gran Melia Hotel Jakarta - Jakarta</p>
                        <p>Hotel Residence 🏨</p>
                    </div>
                    <div>1</div>
                    <div>1 Day</div>
                    <div>$ 2,000.00</div>
                    <div className=''>
                      <span>
                        <Image src={'/dashboard/images/my-booking/close-icon.svg'}
                        height={31}
                        width={31}
                        alt='close-icon.svg'
                        className='w-[31px] h-auto object-cover cursor-pointer hover:drop-shadow-md' />
                      </span>
                    </div>
                </div>

            </div>
        </DashboardLayout>
    )
}

export default Booking
