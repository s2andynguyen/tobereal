import React from 'react'
import Image from 'next/image'
import '@/assets/styles/base.css'
import SelectPlaceCustom from '@/components/SelectPlaceCustom'
interface HeadTitleProps {
    title: string
    icon?: string
    desc?: string
    select?: boolean
    seeAll?: boolean
    discount?: string
    descBolder?: boolean
    saleDealBadge?: string
    iconHeight?: number
    iconWidth?: number
    selectBackGround?: string
    bgTitle?: string
    maxWidhtTitle?: number
    iconInline?: boolean
}
const HeadTitle: React.FC<HeadTitleProps> = ({
    title,
    icon,
    desc,
    select,
    seeAll,
    discount,
    descBolder,
    saleDealBadge,
    iconHeight,
    iconWidth,
    selectBackGround,
    bgTitle,
    maxWidhtTitle, // thay đổi max width cho title trên mobile
    iconInline // tùy chọn inline cho icon
}) => {
    let Icon = null
    if (icon) Icon = icon
    return (
        <div className={`${bgTitle ? bgTitle : ''}`}>
            <div className='container mx-auto px-4 md:px-8 xl:px-[71px] min-h-[56px] flex justify-between items-center'>
                {/* title */}
                <div className={`flex gap-3 items-center lg:items-baseline`}>
                    <div className='flex flex-col sm:flex-row'>
                        <div className='flex gap-3 sm:items-end items-center'>
                            <h2
                                className={`font-bold text-[18px] leading-tight lg:text-[20px] lg:leading-6 font-montserrat ${
                                    maxWidhtTitle ? 'maxwidth-title__head' : ''
                                }`}>
                                {title}
                                {icon && iconInline && (
                                    <Image
                                        src={icon}
                                        width={iconWidth ?? 34}
                                        height={iconHeight ?? 29}
                                        alt={'Icon-Head.png'}
                                        className={`w-auto h-[21px] inline-block ml-3 sm:ml-0 sm:hidden ${
                                            iconHeight
                                                ? 'lg:w-auto lg:h-auto'
                                                : 'lg:w-[34px] lg:h-[29px]'
                                        }`}
                                    />
                                )}
                            </h2>
                            {icon && (
                                <Image
                                    src={icon}
                                    width={iconWidth ?? 34}
                                    height={iconHeight ?? 29}
                                    alt={'Icon-Head.png'}
                                    className={`w-auto  h-[31px] ${
                                        iconHeight
                                            ? 'lg:w-auto lg:h-auto'
                                            : 'lg:w-[34px] lg:h-[29px]'
                                    } ${iconInline ? 'sm:inline-block hidden' : ''}`}
                                />
                            )}
                        </div>
                        {discount ? (
                            <p className='text-[10px] leading-tight ml-8 font-medium font-montserrat hidden sm:block'>
                                Discount up to{' '}
                                <span className='text-[32px] font-montserrat font-medium'>
                                    {discount}%!
                                </span>
                            </p>
                        ) : desc ? (
                            <p
                                className={`text-[10px] leading-tight mt-2 sm:mt-3 sm:ml-3 lg:ml-8  font-montserrat ${
                                    descBolder ? 'font-bold' : 'font-medium'
                                }`}>
                                {desc}
                            </p>
                        ) : null}
                        {/* for weekly deal (end in) */}
                        {saleDealBadge ? (
                            <p className='text-[10px] leading-tight sm:ml-3 lg:ml-5 font-montserrat font-medium self-start sm:self-end mb-1'>
                                Ends In
                            </p>
                        ) : (
                            ''
                        )}
                    </div>
                    {saleDealBadge && (
                        // <div className='flex justify-between items-center sm:items-baseline'>
                            <div
                                className='bg-gradient-to-r from-[#FFBEBE] to-[#FF5151] from-10% w-[66px] sm:w-[115px] h-[15px] sm:h-[26px] rounded-[5px]
                        text-center align-middle  ml-2 sm:ml-16 select-none flex justify-center items-center self-start sm:self-none'>
                                <p className='text-white font-montserrat text-[10px] sm:text-[13px] '>
                                    {saleDealBadge}
                                </p>
                            </div>
                        // </div>
                    )}
                </div>
    
                {/* button */}
                <div className='flex gap-4 items-center sm:self-auto self-start'>
                    {/* select */}
                    {select && (
                        // <select
                        //     name=''
                        //     id=''
                        //     className={`focus:ring-0 focus:outline-none border border-[#cdcdcd] py-1 h-9 w-32 px-4 rounded-md hover:cursor-pointer
                        //     text-[15px] font-montserrat font-medium hidden lg:block ${
                        //         selectBackGround ?? ''
                        //     }`}>
                        //     <option value='1'>Jakarta</option>
                        //     <option value='2'>Jakarta</option>
                        //     <option value='3'>Jakarta</option>
                        //     <option value='4'>Jakarta</option>
                        // </select>
                        <SelectPlaceCustom />
                    )}
                    {/* see all */}
                    {seeAll && (
                        <button
                            className='h-7 w-20 lg:h-9 lg:w-32 bg-gradient-right rounded-md flex justify-center items-center align-middle 
                        hover:shadow-md text-[15px] font-montserrat font-medium'>
                            See All
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HeadTitle
