import React from 'react'
import Image from 'next/image'
import VoucherPercent from '@/app/promotion/ui/VoucherPercent'
import { color } from 'framer-motion'
interface VoucherItemProps {
    reverse?: boolean
    percent: string
    fromDay: string
    endDay: string
    title: string
    imageUrl: string
}
const VoucherItem: React.FC<VoucherItemProps> = ({reverse, percent, fromDay, endDay, title, imageUrl }) => {
    return (
        <div className='h-[130px] w-[276px] sm:h-[178px] sm:w-[378px] relative top-0 left-0 z-0 bg-voucher object-contain bg-contain bg-no-repeat drop-shadow-md'>
            <div className={`flex items-center h-full gap-2 w-[313px] pr-5 ${
                reverse ? 'flex-row-reverse' : 'flex-row'
            }`}>
                <Image
                    src={imageUrl}
                    width={165}
                    height={131}
                    alt={imageUrl}
                    className={`w-full h-auto object-cover  ${
                        reverse? '-ml-5' : 'ml-0 -mr-3'
                    }`}
                />
                {/* context */}
                <div className={`flex flex-col h-full py-4 ${
                    reverse? 'pl-5 items-start' : 'items-end'
                }`}>
                    <p className={`font-montserrat text-[15px] font-bold leading-5 min-w-[123px] ${
                        reverse ? 'text-start' : 'text-end'
                    }`}>
                        {title} promotions
                    </p>
                    <span className='block mt-[32px]'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='38'
                            height='4'
                            viewBox='0 0 38 4'
                            fill='none'>
                            <path
                                d='M37.3 2.23999H-0.0100098'
                                stroke={`${reverse ? '#8DB6FF' : '#F9BF6B'}`}
                                strokeWidth='3'
                                strokeMiterlimit='10'
                            />
                        </svg>
                    </span>
                    <p className='font-montserrat font-bold text-[36px] leading-[52px] text-center'>
                        {percent}
                    </p>
                    <p className='font-montserrat text-[10px] text-center text-nowrap mt-2 text-black'>
                        {fromDay} - {endDay}
                    </p>
                </div>
            </div>

            <div className='absolute top-0 right-0 z-0 bg-voucher rounded-[30px] h-full'></div>
            <VoucherPercent className='absolute top-0 right-0' color={reverse ? 'blue' : ''}/>
            <p className='font-montserrat font-bold text-[36px] text-center -rotate-90
                    absolute top-[50%] -translate-y-[50%] right-0 h-full max-h-[50px]'>
                {percent}
            </p>
        </div>
    )
}

export default VoucherItem
