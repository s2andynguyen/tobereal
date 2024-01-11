'use client'
import React, { use, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { formatter } from '@/lib/helper'
import { hotelRoom } from '../model/hotelRoom'
import { renderStart } from '@/lib/render'
import Place from '@/icons/Header/Blockhead/Place'
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
    const [imageLoaded, setImageLoaded] = useState(false)
    const handleImageLoad = () => {
        setImageLoaded(true)
    }
    return (
        <div className='w-full h-[220px] cursor-pointer select-none'>
            <div className=' shadow-gray rounded-[10px] relative'>
                <Image
                    src={imageUrl}
                    width={247}
                    height={140}
                    alt='hotel-image'
                    onLoad={handleImageLoad}
                    className='bg-cover object-cover h-[140px] w-full rounded-t-[10px] bg-center'
                    style={{display: imageLoaded ? 'block' : 'none' }}
                />
                <div className='absolute top-2 left-2 w-full flex gap-px'>
                    <div className='h-3 w-3  bg-[#E3E3E3] rounded-md flex justify-center items-center'>
                        <Place className='w-[5.5px] h-[7.5px]' />
                    </div>
                    <div className='w-10 h-3 bg-white rounded-[10px] flex items-center justify-center'>
                        <p className='text-center font-montserrat font-medium text-[4px]'>
                            Menteeng
                        </p>
                    </div>
                </div>

                <div className='bg-white rounded-b-[10px] h-full relative'
                style={{display: imageLoaded ? 'block' : 'none' }}>
                    {/* type room card */}
                    <div className='flex justify-start absolute -top-3 left-0'>
                        <div className='flex items-center justify-center rounded-[5px] px-[10.5px] py-1 bg-primary shrink-0 w-[104px] h-[23px]'>
                            {discount && (
                                <p className='font-montserrat text-[11px] font-medium text-nowrap'>
                                    Promotion {discount}%
                                </p>
                            )}
                        </div>
                    </div>
                    {/* content */}
                    <div className='px-3 pt-[18px] h-20'>
                        <p className='text-[7px] leading-tight font-bold font-montserrat'>
                            {title} - {place}
                        </p>
                        <div className='w-full h-px bg-[rgba(0,0,0,0.3)] my-[6px]'></div>
                        <div className='flex justify-start gap-5'>
                            <p className='font-bold text-[8px] text-[#a3a3a3] leading-tight font-montserrat line-through'>
                                {formatter.format(price)}
                            </p>
                            <p className='font-bold text-[8px] leading-tight font-montserrat uppercase text-[#ff0000]'>
                                {discount}% off
                            </p>
                        </div>
                        <p className='font-bold leading-tight font-montserrat text-[12px] pt-[5px]'>
                            {formatter.format(price)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardWithSale
