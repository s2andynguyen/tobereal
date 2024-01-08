import React from 'react'
import Image from 'next/image'
function HeadBooking() {
    return (
        <div className='absolute -bottom-20 left-0 h-[188px] -mt-20 z-[1] w-full flex justify-center items-center px-[115px]'>
            <div className='h-full w-full relative rounded-[20px]'>
                {/* option booking */}
                <div className='absolute top-0 left-0] h-[70px] w-[304px] bg-white rounded-t-[20px] drop-shadow-title'>
                    <div className='flex justify-evenly w-full pt-3'>
                        <p className='font-montserrat font-bold text-lg py-1 px-5 text-primary text-center'>
                            Rent
                        </p>
                        <p className='font-montserrat font-bold text-lg py-1 px-5'>Buy</p>
                    </div>
                </div>
                {/* body booking */}
                <div className='absolute bottom-0 left-0 z-[1] h-[137px] w-full bg-white rounded-tl-none rounded-[20px] drop-shadow-title'>
                    <div className='relative'>
                        {/* vector under of option */}
                        <div className='absolute w-[304px] flex justify-start'>
                            <div className='ml-10'>
                                <Image
                                    src={'/images/home/vector/rent-vector.svg'}
                                    width={94}
                                    height={2}
                                    alt='rent-vector.svg'
                                />
                            </div>
                        </div>

                        <div className='flex flex-col gap-2'>
                          {/* row 1 */}
                          <div className="flex gap-3">

                            {/* group date */}
                            <div className="flex"></div>
                            {/* group search */}
                            {/* group filter by day */}


                          </div>
                          
                          {/* row 2 */}


                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadBooking
