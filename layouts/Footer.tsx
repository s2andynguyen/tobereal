'use client'
import React from 'react'
import Image from 'next/image'
import { ibmPlex } from '@/assets/styles/fonts'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
function Footer() {
    const router = useRouter()
    return (
        <footer className={`bg-gradient-footer ${ibmPlex.className} relative`}>
            {/* Form subscribe */}
            <div className='container mx-auto absolute -top-[100px] left-0 right-0 w-full'>
                <div className='px-3 md:px-7 xl:px-[70px]'>
                    <div
                        className='bg-subscribe-form rounded-[20px] h-[210px] bg-no-repeat bg-cover bg-center
                        flex flex-col lg:flex-row items-center justify-center lg:justify-between px-2 md:px-7 xl:px-14'>
                        {/* content */}
                        <div className='mb-3 lg:mb-0'> 
                            <p className='font-semibold text-[18px] sm:text-2xl text-center sm:text-start'>
                                Solve Complex Data Challenges.
                            </p>
                            <p className='font-semibold sm:leading-10 leading-[15px] text-[13px] text-center sm:text-start'>
                                Subscribe to our newsletter for regular updates.
                            </p>
                        </div>
    
                        {/* form */}
                        <div className='w-full min-w-[280px] md:w-[458px] h-[42px]  mt-5 sm:mt-0 rounded-[30px] border border-black flex items-center'>
                            <input
                                type='text'
                                className=' sm:text-[18px] flex-grow rounded-[30px] bg-transparent focus:outline-none pl-2 sm:pl-7
                                 text-black placeholder:text-black'
                                placeholder='Enter your Email'
                            />
                            <button
                                className='min-w-[80px] sm:w-[120px] md:w-[142px] h-[44px] rounded-[30px] font-semibold text-[14px] sm:text-xl text-white
                              bg-gradient-to-b from-[#FFE259] from-0% to-[#D88A00] outline outline-transparent translate-x-1
                              hover:shadow-gray hover:bg-[#eca62d] transition duration-300'>
                                Subcribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mx-auto pt-[150px]'>
                {/* Footer list */} 
                <div className='mx-3 sm:mx-[50px] pt-10 mb-24'>
                    <div className='flex xl:gap-0 flex-wrap'>
                        
                        {/* logo */}
                        <div className='mb-8 lg:mb-0 flex-[100%] md:flex-[33.33%] lg:flex-[20%] pl-12 md:pl-0'>
                            <Image  
                                src={'/images/main-logo.png'}
                                width={167}
                                height={91}
                                alt='main-logo'
                                className='w-auto h-[60px] sm:h-[91px] bg-contain mt-3 hover:cursor-pointer hover:drop-shadow-md drop-shadow-footer-logo rounded-3xl '
                                onClick={() => router.push('/')}
                            />
                        </div>
                        {/* Popular Search */}
                        <div className=' mb-8 lg:mb-0 flex-[50%] md:flex-[33.33%] lg:flex-[25%] pl-12 md:pl-5 lg:pl-3 xl:pl-8'>
                            <div>
                                <p className='font-bold text-xl'>Popular Search</p>
                                <ul className='flex flex-col gap-2 pt-[6px] items-start'>
                                    <span className='text-[13px] leading-4 cursor-pointer hover:opacity-80 transition duration-200'>
                                        Rent apartment in Bali
                                    </span>
                                    <span className='text-[13px] leading-4 cursor-pointer hover:opacity-80 transition duration-200'>
                                        Rent apartment in Jakarta
                                    </span>
                                    <span className='text-[13px] leading-4 cursor-pointer hover:opacity-80 transition duration-200'>
                                        Rent apartment in Yogyakarta
                                    </span>
                                    <span className='text-[13px] leading-4 cursor-pointer hover:opacity-80 transition duration-200'>
                                        Rent apartment in Surabaya
                                    </span>
                                </ul>
                            </div>
                        </div>
                        {/* About us */}
                        <div className='mb-8 lg:mb-0 flex-[50%] md:flex-[33.33%] lg:flex-[15%] pl-12 lg:pl-0'>
                            <div>
                                <p className='font-bold text-xl'>About us</p>
                                <ul className='flex flex-col gap-2 pt-[6px] items-start'>
                                    <span className='text-[13px] leading-4 cursor-pointer hover:opacity-80 transition duration-200'>
                                        FAQ
                                    </span>
                                    <span className='text-[13px] leading-4 cursor-pointer hover:opacity-80 transition duration-200'>
                                        Blog Travelio
                                    </span>
                                    <Link href={'/promotion'} className='text-[13px] leading-4 cursor-pointer hover:opacity-80 transition duration-200'>
                                        Promotion
                                    </Link>
                                    <Link href={'/house'} className='text-[13px] leading-4 cursor-pointer hover:opacity-80 transition duration-200'>
                                        House
                                    </Link>
                                    <Link href={'/posting'} className='text-[13px] leading-4 cursor-pointer hover:opacity-80 transition duration-200'>
                                        Dashboard
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        {/* Contact us */}
                        <div className='flex-[50%] md:flex-[33.33%] lg:flex-[20%] pl-12 md:pl-0'>
                            <div>
                                <p className='font-bold text-xl'>Contact us</p>
                                <ul className='flex flex-col gap-2 pt-[6px] items-start'>
                                    <Link href={'/contact'} className='text-[13px] leading-4 cursor-pointer hover:opacity-80 transition duration-200'>
                                        Contact page
                                    </Link>
                                    <Link href={'/apartment'} className='text-[13px] leading-4 cursor-pointer hover:opacity-80 transition duration-200'>
                                        Apartment
                                    </Link>
                                    <span className='text-[13px] leading-4 cursor-pointer hover:opacity-80 transition duration-200'>
                                        Live chat on Travelio app
                                    </span>
                                    <span className='text-[13px] leading-4 cursor-pointer hover:opacity-80 transition duration-200'>
                                        hello@travelio.com
                                    </span>
                                    <span className='text-[13px] leading-4 cursor-pointer hover:opacity-80 transition duration-200'>
                                        +6221 395 24523
                                    </span>
                                </ul>
                            </div>
                        </div>
                        {/* Install on Appstore or GooglePlay */}
                        <div className='md:max-w-[33.33%] flex-[50%] md:flex-[33.33%] lg:flex-[20%] pl-12 lg:pl-0'>
                            <div className='flex flex-col gap-[9px] pr-10 sm:pr-8'>
                                <Image
                                    src={'/images/googleplay.png'}
                                    width={204}
                                    height={59}
                                    alt='googleplay'
                                    className='w-auto h-auto bg-contain'
                                />
                                <Image
                                    src={'/images/appstore.png'}
                                    width={204}
                                    height={59}
                                    alt='appstore'
                                    className='w-auto h-auto bg-contain'
                                />
                            </div>
                        </div>
                    </div>
                    {/* end list */}
                </div>
            </div>
            <div className='h-px w-full bg-[#b6b6b6]'></div>
            {/* copyright */}
            <div className='container mx-auto h-[65px] flex items-center justify-between px-5 md:pl-[50px] md:pr-[160px]'>
                <p className='text-[10px] sm:text-[13px] leading-4 text-white'>CopyRight © 2020 - 2022 ............... All Rights Reserved.</p>
                <div className='flex gap-1 sm:gap-3 items-center'>
                        <Image  
                            src={'/images/footer/telegram.svg'}
                            width={30}
                            height={30}
                            alt='telegram.svg'
                            className='w-[16px] h-auto sm:w-auto sm:h-auto bg-contain cursor-pointer hover:drop-shadow-md 
                            hover:opacity-80 transition-all duration-200'
                        />
                            <Image  
                            src={'/images/footer/twitter.svg'}
                            width={30}
                            height={30}
                            alt='twitter.svg'
                            className='w-[16px] h-auto sm:w-auto sm:h-auto bg-contain cursor-pointer hover:drop-shadow-md 
                            hover:opacity-80 transition-all duration-200'
                        />
                            <Image  
                            src={'/images/footer/facebook.svg'}
                            width={30}
                            height={30}
                            alt='facebook.svg'
                            className='w-[16px] h-auto sm:w-auto sm:h-auto bg-contain cursor-pointer hover:drop-shadow-md 
                            hover:opacity-80 transition-all duration-200'
                        />
                            <Image  
                            src={'/images/footer/instagram.svg'}
                            width={30}
                            height={30}
                            alt='instagram.svg'
                            className='w-[16px] h-auto sm:w-auto sm:h-auto bg-contain cursor-pointer hover:drop-shadow-md 
                            hover:opacity-80 transition-all duration-200'
                        />
                </div>
            </div>

        </footer>
    )
}
// bg-subscribe-form
export default Footer
