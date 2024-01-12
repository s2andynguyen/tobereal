import React from 'react'
import Image from 'next/image'
interface HeadTitleProps {
    title: string
    icon?: string
    desc?: string
    select?: boolean
    seeAll?: boolean
    discount?: string
    descBolder?: boolean
    saleDealBadge?:string
    iconHeight?:number,
    iconWidth?:number,
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
    iconWidth
}) => {
    let Icon = null
    if (icon) Icon = icon
    return (
        <div className='bg-white'>
            <div className='container mx-auto px-4 md:px-8 xl:px-[71px] h-[56px] flex justify-between items-center'>
                {/* title */}
                <div className={`flex gap-3 items-center lg:items-baseline`}>
                    <h2 className='font-bold text-[14px] leading-tight lg:text-[20px] lg:leading-6 font-montserrat'>
                        {title}
                    </h2>
                    {icon && (
                        <Image src={icon} width={iconWidth ?? 34} height={iconHeight ?? 29} alt={'Icon-Head.png'} className={`w-auto  h-[21px]  ${iconHeight ? 'lg:w-auto lg:h-auto': 'lg:w-[34px] lg:h-[29px]'}`} />
                    )}
                    {discount ? (
                        <p className='text-[10px] leading-tight ml-8 font-medium font-montserrat'>
                            Discount up to{' '}
                            <span className='text-[32px] font-montserrat font-medium'>
                                {discount}%!
                            </span>
                        </p>
                    ) : desc ? (
                        <p className={`text-[10px] leading-tight ml-3 lg:ml-8  font-montserrat ${descBolder ? 'font-bold': 'font-medium'}`}>{desc}</p>
                    ) : null}
                    {saleDealBadge && (
                    <div className='flex justify-between items-center sm:items-baseline'>
                        <p className='text-[10px] leading-tight ml-3 lg:ml-5  font-montserrat font-medium self-end mb-1'>Ends In</p>
                        <div className='bg-gradient-to-r from-[#FFBEBE] to-[#FF5151] from-10% w-20 sm:w-[115px] h-[28px] sm:h-[26px] rounded-[5px]
                        text-center align-middle  ml-2 sm:ml-16 select-none flex justify-center items-center'>
                            <p className='text-white font-montserrat text-[13px] '>{saleDealBadge}</p>
                        </div>
                    </div>)}
                </div>

                {/* button */}
                <div className='flex gap-4 items-center'>
                    {/* select */}
                    {select && (
                        <select
                            name=''
                            id=''
                            className='focus:ring-0 focus:outline-none border border-[#cdcdcd] py-1 h-9 w-32 px-4 rounded-md hover:cursor-pointer
                        text-[15px] font-montserrat font-medium hidden lg:block'>
                            <option value='1'>Jakarta</option>
                            <option value='2'>Jakarta</option>
                            <option value='3'>Jakarta</option>
                            <option value='4'>Jakarta</option>
                        </select>
                    )}
                    {/* see all */}
                    {seeAll && (
                        <button
                            className='h-7 w-20 lg:h-9  lg:w-32 bg-gradient-right rounded-md flex justify-center items-center align-middle 
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
