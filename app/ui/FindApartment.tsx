import React, { useState } from 'react'
import HeadTitle from './re-use/HeadTitle'
import Image from 'next/image'
import Input from '@/components/Input'
import Place from '@/icons/Header/Blockhead/Place'
function FindApartment() {
    const [cityChoosed, setCityChoosed] = useState('')
    const [rangePrice, setrangePrice] = useState({
        lowest: '',
        highest: ''
    })
    return (
        <div>
            <div className='pt-[6px]'>
                <HeadTitle
                    title='Find Apartment that fits your budget! 💳'
                    desc='Price below is Monthly price'
                    descBolder
                />
                <div className='container mx-auto px-3 md:px-8 xl:px-[56px] xl:px-auto pt-2 lg:pt-4 pb-7 lg:pb-[56px]'>
                    {/* border */}
                    <div className='w-full xl:mx-auto xl:w-[965px] lg:h-[190px] shadow-[0_0_5px_0_rgba(240,185,11,0.50)] rounded-[20px]'>
                        <div className='h-full py-4 sm:py-[26px] flex flex-col lg:flex-row lg:gap-0 gap-3'>
                            {/* form */}
                            <div className='h-full w-full md:w-[300px] xl:w-[375px] px-4 sm:px-6 md:pl-5 xl:pl-[37px] flex flex-col justify-between gap-3 lg:gap-0'>
                                {/* Choose City */}
                                <div className='flex flex-col gap-2'>
                                    <label
                                        htmlFor=''
                                        className='text-[13px] leading-tight font-bold '>
                                        Choose City
                                    </label>
                                    {/* input */}
                                    <div className='flex items-center gap-[9px]'>
                                        <input
                                            className='h-10 w-full sm:w-[219px] border border-[#cdcdcd] rounded-[10px] pl-3 text-sm placeholder:text-[#ACB1C6] focus:outline-none '
                                            type='text'
                                            placeholder='Location'
                                        />
                                        <div className='w-8 h-8 rounded-full bg-[#E3E3E3] flex justify-center items-center hover:shadow-md cursor-pointer hover:opacity-85 transition duration-200'>
                                            <Place />
                                        </div>
                                    </div>
                                </div>

                                {/* Input Price */}
                                <div className='flex flex-col gap-2 lg:gap-1'>
                                    <label
                                        htmlFor=''
                                        className='text-[13px] leading-tight font-bold  '>
                                        Input Price
                                    </label>

                                    {/* input */}
                                    <div className='grid grid-cols-2 gap-[13px] w-full sm:w-[219px]'>
                                        <input
                                            className='h-10 w-full border border-[#cdcdcd] rounded-[10px] pl-3 text-sm placeholder:text-[#ACB1C6] focus:outline-none '
                                            type='text'
                                            placeholder='Lowest'
                                        />
                                        <input
                                            className='h-10 w-full border border-[#cdcdcd] rounded-[10px] pl-3 text-sm placeholder:text-[#ACB1C6] focus:outline-none '
                                            type='text'
                                            placeholder='Highest'
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Frequently Used Price */}
                            <div
                                className='h-full flex-grow xl:flex-grow-0 xl:w-[590px] relative px-4 sm:px-6 lg:pl-8 lg:pr-5 xl:pr-10
                                before:w-px before:absolute before:top-0 before:bottom-0 before:left-0 lg:before:bg-black/20 '>
                                <p className='text-[13px] leading-tight font-bold mb-2'>
                                    Frequently Used Price
                                </p>
                                {/* group btn option fillter */}
                                <div className='flex justify-between items-center mb-[23px] gap-2 sm:gap-[22px]'>
                                    {/* button Frequently Budget*/}
                                    <div className='w-full lg:w-[163px] h-12 sm:h-[50px] border border-[#cdcdcd] rounded-[10px] flex items-center gap-2 sm:gap-3 hover:shadow-md cursor-pointer transition duration-200'>
                                        <div className='w-[30px] sm:w-[38px] h-[30px] sm:h-[38px]  ml-[6px] bg-[#ebebeb] rounded-full flex items-center justify-center'>
                                            <Image
                                                src={'/images/home/vector/budget.svg'}
                                                width={24}
                                                height={21}
                                                className='w-4 h-auto sm:w-auto sm:h-auto'
                                                alt='budget.svg'
                                            />
                                        </div>
                                        <div className='flex-grow flex flex-col justify-between py-[6px] sm:py-1 sm:h-auto h-full'>
                                            <p className='text-[12px] sm:text-[14px] leading-tight'>
                                                Budget
                                            </p>
                                            <p className='text-[12px] sm:text-[14px] leading-tight font-bold'>
                                                &#60;$ 4.5
                                            </p>
                                        </div>
                                    </div>

                                    {/* button Frequently Popular*/}
                                    <div className='w-full lg:w-[163px] h-12 sm:h-[50px] border border-[#cdcdcd] rounded-[10px] flex items-center gap-2 sm:gap-3 hover:shadow-md cursor-pointer transition duration-200'>
                                        <Image
                                              src={'/images/home/vector/popular.svg'}
                                              width={38}
                                              height={38}
                                              className='w-[30px] sm:w-[38px] h-[30px] sm:h-[38px] ml-[6px]'
                                              alt='popular.svg'
                                          />
                                        <div className='flex-grow flex flex-col justify-between py-[6px] sm:py-1 sm:h-auto h-full'>
                                            <p className='text-[12px] sm:text-[14px] leading-tight'>
                                                Popular
                                            </p>
                                            <p className='text-[12px] sm:text-[14px] leading-tight font-bold'>
                                                &#60;$ 4.5 - 7
                                            </p>
                                        </div>
                                    </div>

                                    {/* button Frequently Luxury*/}
                                    <div className='w-full lg:w-[163px] h-12 sm:h-[50px] border border-[#cdcdcd] rounded-[10px] flex items-center gap-2 sm:gap-3 hover:shadow-md cursor-pointer transition duration-200'>
                                        <div className='w-[30px] sm:w-[38px] h-[30px] sm:h-[38px]  ml-[6px] bg-[#ebebeb] rounded-full flex items-center justify-center'>
                                            <Image
                                                src={'/images/home/vector/budget.svg'}
                                                width={24}
                                                height={21}
                                                className='w-4 h-auto sm:w-auto sm:h-auto'
                                                alt='budget.svg'
                                            />
                                        </div>
                                        <div className='flex-grow flex flex-col justify-between py-[6px] sm:py-1 sm:h-auto h-full'>
                                            <p className='text-[12px] sm:text-[14px] leading-tight'>
                                                Luxury
                                            </p>
                                            <p className='text-[12px] sm:text-[14px] leading-tight font-bold'>
                                                &#60;$ 7
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* buton submit Frequently */}
                                <button className=' w-full px-8 py-[8.5px] bg-gradient-right font-montserrat leading-tight text-[18px] font-medium 
                                rounded-[30px] cursor-pointer hover:shadow-md hover:opacity-95 transition duration-200'>Find Accomondation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindApartment