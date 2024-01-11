import React from 'react'
import Image from 'next/image'
interface HeadTitleProps {
    title: string
    icon?: string
    desc?: string
    select?: boolean
    seeAll?: boolean
    discount?: string
}
const HeadTitle: React.FC<HeadTitleProps> = ({
    title,
    icon,
    desc,
    select,
    seeAll,
    discount
}) => {
    let Icon = null
    if (icon) Icon = icon
    return (
        <div className='bg-white'>
            <div className='container mx-auto px-4 md:px-8 xl:px-[71px] h-[56px] flex justify-between items-center'>
                {/* title */}
                <div className='flex gap-3 items-center lg:items-baseline '>
                    <h2 className='font-bold text-[14px] leading-tight lg:text-[20px] lg:leading-6 font-montserrat'>
                        {title}
                    </h2>
                    {icon && (
                        <Image src={icon} width={34} height={29} alt={'Layer_1.png'} className='w-[26px] lg:w-[34px] h-[21px] lg:h-[29px]' />
                    )}
                    {discount ? (
                        <p className='text-[10px] leading-tight ml-8 font-medium font-montserrat'>
                            Discount up to{' '}
                            <span className='text-[32px] font-montserrat font-medium'>
                                {discount}%!
                            </span>
                        </p>
                    ) : desc ? (
                        <p className='text-[10px] leading-tight ml-3 lg:ml-8 font-medium font-montserrat'>{desc}</p>
                    ) : null}
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
