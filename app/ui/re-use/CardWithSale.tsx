'use client'
import React, { use, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { formatter } from '@/lib/helper'
import { hotelRoom } from '../model/hotelRoom'
import { renderStart } from '@/lib/render'
const CardWithSale: React.FC<hotelRoom> = ({
    title,
    place,
    icon,
    price,
    oldprice,
    imageUrl,
    discount
}) => {
    let Icon: any = null
    if (icon) Icon = icon
    return (
        <div
            className='h-[214px] flex items-center'>
            <div className='shadow-gray mx-2 my-2 rounded-[10px] w-full  '>
                <Image
                    src={imageUrl}
                    width={300}
                    height={180}
                    alt='hotel-image'
                    className='bg-cover object-cover w-full h-[110px] rounded-t-[10px] bg-center'
                />
                <div className='bg-white rounded-b-[10px] '>
                    {/* type room card */}
                    <div className='flex justify-start'>
                        <div className='flex items-center justify-between rounded-md px-3 py-1 bg-primary shrink flex-[50%] max-w-[50%] -mt-3'>
                            {discount && (
                                <p className='font-montserrat text-[11px] font-semibold flex-[120px] text-nowrap    '>
                                    Promotion {discount}%
                                </p>
                            )}
                        </div>
                    </div>
                    {/* content */}
                    <div className='px-3 py-1'>
                        
                        <p className='text-[12px] '>{title}</p>
                        <p className='font-bold text-sm font-montserrat'>
                            {formatter.format(oldprice)}
                        </p>
                        <p className='font-bold text-sm font-montserrat'>
                            {formatter.format(price)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardWithSale
