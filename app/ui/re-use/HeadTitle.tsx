import React from 'react'
interface HeadTitleProps {
    title: string
    icon?: any
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
            <div className='container mx-auto px-4 md:px-8 xl:px-16 h-20 flex justify-between items-center'>
                {/* title */}
                <div className='flex gap-2 items-baseline '>
                    <h2 className='font-bold text-lg'>{title}</h2>
                    {icon && <Icon />}
                    {discount ? (
                        <p className='text-[12px] ml-5'>
                            Discount up to{' '}
                            <span className='text-[28px] font-montserrat font-bold'>
                                {discount}%!
                            </span>
                        </p>
                    ) : desc ? (
                        <p className='text-[12px] ml-5'>{desc}</p>
                    ) : null}
                </div>

                {/* button */}
                <div className='flex gap-4 items-center'>
                    {/* select */}
                    {select && <select
                        name=''
                        id=''
                        className='focus:ring-0 focus:outline-none border border-[#cdcdcd] py-1 h-9 w-32 px-4 rounded-md hover:cursor-pointer
                        text-[15px] font-montserrat font-medium'>
                        <option value='1'>Jakarta</option>
                        <option value='2'>Jakarta</option>
                        <option value='3'>Jakarta</option>
                        <option value='4'>Jakarta</option>
                    </select>}
                    {/* see all */}
                    {seeAll && <button
                        className='h-9 w-32 bg-gradient-right rounded-md flex justify-center items-center align-middle 
                        hover:shadow-md text-[15px] font-montserrat font-medium'>
                        See All
                    </button>}
                </div>
            </div>
        </div>
    )
}

export default HeadTitle
