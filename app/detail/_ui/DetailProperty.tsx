import React from 'react'

const DetailProperty = () => {
    return (
        <div className=''>
            <h3 className='font-montserrat font-bold'>Property</h3>
            <div className='flex flex-col gap-10 p-5'>
                {/* row 1 */}
                <div className='flex -mx-2'>
                    <div className='flex-shrink-0 w-[20%] basis-[20%] px-2'>
                        <p className='text-[10px] font-bold font-montserrat'>
                            Property Type
                        </p>
                        <p className='text-[10px] font-bold font-montserrat text-[#969696]'>
                            Hotel
                        </p>
                    </div>
                </div>

                {/* row 2 */}
                <div className='flex -mx-2'>
                    <div className='flex-shrink-0 w-[20%] basis-[20%] px-2'>
                        <p className='text-[10px] font-bold font-montserrat'>Floor</p>
                        <p className='text-[10px] font-bold font-montserrat text-[#969696]'>
                            Based On Availability
                        </p>
                    </div>
                    <div className='flex-shrink-0 w-[20%] basis-[20%] px-2'>
                        <p className='text-[10px] font-bold font-montserrat'>
                            Property Aired Since
                        </p>
                        <p className='text-[10px] font-bold font-montserrat text-[#969696]'>
                            26 Oct 2023
                        </p>
                    </div>
                </div>

                {/* row 3 */}
                <div className='flex -mx-2'>
                    <div className='flex-shrink-0 w-[20%] basis-[20%] px-2'>
                        <p className='text-[10px] font-bold font-montserrat'>Check-in</p>
                        <p className='text-[10px] font-bold font-montserrat text-[#969696]'>
                            14:00
                        </p>
                    </div>
                    <div className='flex-shrink-0 w-[20%] basis-[20%] px-2'>
                        <p className='text-[10px] font-bold font-montserrat'>Checkout</p>
                        <p className='text-[10px] font-bold font-montserrat text-[#969696]'>
                            12:00
                        </p>
                    </div>
                    <div className='flex-shrink-0 w-[20%] basis-[20%] px-2'>
                        <p className='text-[10px] font-bold font-montserrat'>
                            Cleaning Fees
                        </p>
                        <p className='text-[10px] font-bold font-montserrat text-[#969696]'>
                            Complimentary daily housekeeping service
                        </p>
                    </div>
                    <div className='flex-shrink-0 w-[20%] basis-[20%] px-2'>
                        <p className='text-[10px] font-bold font-montserrat'>Other</p>
                        <p className='text-[10px] font-bold font-montserrat text-[#969696]'>
                            Complimentary 2 pieces of Laundry Service per day per person
                            non-accumulative, exclude dry cleaning and pressing
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProperty
