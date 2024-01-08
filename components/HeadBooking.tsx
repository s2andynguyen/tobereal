import React from 'react'

function HeadBooking() {
  return (
    <div className='absolute -bottom-20 left-0 h-[188px] -mt-20 z-[1] w-full flex justify-center items-center px-[115px]'>
        
        {/* filter */}
        <div className="h-full w-full relative rounded-[20px]">
            <div className="absolute top-0 left-0 z-[2] h-[70px] w-[304px] bg-white rounded-t-[20px] border border-black/30">
                <div className="flex justify-center w-full pt-3 gap-3">
                    <p className='font-montserrat font-bold text-lg py-1 px-5 text-primary'>Rent</p>
                    <p className='font-montserrat font-bold text-lg py-1 px-5'>Buy</p>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 z-[1] h-[137px] w-full bg-white rounded-tl-none rounded-[20px] border border-black/30">

            </div>
        </div>
    </div>
  )
}

export default HeadBooking