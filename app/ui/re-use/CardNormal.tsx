'use client'
import React, { use, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { formatter } from '@/lib/helper'
import { hotelRoom } from '../model/hotelRoom'
import { renderStart } from '@/lib/render'
const CardNormal:React.FC<hotelRoom> = ({typeRoom ,title, place, icon , price, start, imageUrl}) => {
    let Icon:any = null
    if(icon) Icon = icon
    return (
        <Link href={'/'} className='h-[214px] flex justify-center items-center hover:-translate-y-px transition-all duration-300'>
            <div className='shadow-gray mx-2 my-2 rounded-[10px] w-full'>
                <Image
                    src={imageUrl}
                    width={300}
                    height={180}
                    alt='hotel-image'
                    className='bg-cover object-cover w-full h-[120px] rounded-t-[10px] bg-center'
                />
                <div className='bg-white rounded-b-[10px] h-full'>
                    {/* type room card */}
                    <div className='flex justify-start'>
                        <div className='flex items-center justify-between rounded-md px-3 py-1 bg-primary shrink flex-[50%] max-w-[50%] -mt-3'>
                            <p className='font-montserrat text-[11px] font-semibold flex-[120px] text-nowrap max-w-[80%] overflow-hidden line-clamp-1'>
                                {typeRoom}
                            </p>
                            <span className='self-center'>
                                <Icon size={13} />
                            </span>
                        </div>
                    </div>
                    {/* content */}
                    <div className='px-3 py-1 h-full'>
                        <p className='text-[12px] font-black font-montserrat'>
                            {title} - {place}
                        </p>
                        {start && <div className='flex justify-start gap-1 mb-2 mt-1'>
                            {renderStart(start)}
                        </div>}
                        <p className='font-bold text-sm font-montserrat'>
                            {formatter.format(price)}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default CardNormal
