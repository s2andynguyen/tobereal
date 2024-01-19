'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import DashboardLayout from '../_ui/layout/DashboardLayout'
import './style.css'

const DepositPage = () => {
    const [ amount, setAmount ] = useState('')
  return (
    <DashboardLayout title='Withdraw'>
        <div className='h-full mx-auto pt-[58px] pb-[120px]'>
            <div className='h-full w-[620px] max-w-[620px] mx-auto'>
                {/* head */}
                <div className="desposit-head mb-4">
                        <div className='w-full h-full flex items-center gap-5 pl-5'>
                            <Image 
                                src={'/images/main-logo.png'}
                                height={24}
                                width={62}
                                alt='main-logo'
                                className='logo-desposit-shadow w-[62px] h-auto object-contain'
                            />
                            <div>
                                <p className='text-sm font-semibold'>Wallet TOBE REAL</p>
                                <p className='font-bold'>0 Đ</p>
                            </div>
                        </div>
                </div>

                {/* content */}
                <div className='px-9'>
                    {/* form amount */}
                    <div className='mb-5'>
                        <label htmlFor="amount" className='font-sm font-medium mb-1 block'>Amout to deposit</label>
                        <input type="text"
                            id='amount'
                            value={amount} 
                            placeholder={`0 Đ`}
                            onChange={(e:any) => setAmount(e.target.value)}
                            className='w-full h-[45px] rounded-[5px] border border-black/10 bg-[#eee]
                            text-black/50 text-xl font-medium pl-9 focus:outline-none'
                        />
                    </div>  
                    <div className='mb-8'>
                        <p className='font-sm font-medium mb-1 block'>From money source</p>
                        <div className='shadow-md h-12 bg-[#fff4c0] border border-black/10 px-8 
                        flex items-center justify-between rounded-[8px] mb-3'>
                            <div className='flex justify-center items-center'>
                                <Image 
                                    src={'/dashboard/images/das-posting/vietcombank.png'}
                                    height={23}
                                    width={24}
                                    alt='vietcombank-logo'
                                    className='w-6 h-auto object-contain'
                                />
                                <p className='text-sm font-semibold ml-4'>Vietcombank</p>
                            </div>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <circle cx="7.5" cy="7.5" r="7" fill="#FFD510" stroke="black"/>
                                </svg>
                            </span>
                        </div>
                        <div className='shadow-md h-12 bg-[#fff4c0] border border-black/10 px-8 
                        flex items-center justify-center rounded-[8px] cursor-pointer hover:shadow-md
                        transition duaration-200'>
                            <span className='mr-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
                                    <path d="M10.5 2.5V19.5" stroke="black" strokeWidth="4" strokeLinecap="round"/>
                                    <path d="M19 11L2 11" stroke="black" strokeWidth="4" strokeLinecap="round"/>
                                </svg>
                            </span>
                            <p className='font-semibold text-sm'>Add bank</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mb-8'>
                        <button className='bg-gradient-right h-10 w-full rounded-[10px] max-w-[283px] mt-3 font-semibold hover:shadow-lg 
                            transition duration-200 hover:opacity-85 flex justify-center items-center'>
                                Submit
                        </button>
                    </div>

                    {/* table history */}
                    <div className='min-h-[292px] w-full shadow-gray bg-[#eee] rounded-lg relative font-inter'>
                        <div className='deposit-table__grid rounded-lg bg-white shadow-gray h-[30px] px-7'>
                            <span className='font-medium'>STT</span>
                            <span className='font-medium pl-5'>Day</span>
                            <span className='font-medium'>Quatity</span>
                            <span className='font-medium'>Status</span>
                        </div>

                        <div className='deposit-table__grid h-[46px] border-b border-black/30 mx-7'>
                            <span className='font-medium'>1</span>
                            <span className='font-medium pl-5'>30/10/2023</span>
                            <span className='font-medium'>5 Đ</span>
                            <span className='font-medium'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                <path d="M9.35788 17.9959C8.54761 18.0401 7.79394 17.7263 7.37466 17.166L0.331748 7.75584C-0.328363 6.87407 0.0273924 5.66602 1.12584 5.05816C2.22314 4.45077 3.64789 4.67229 4.30685 5.55406L9.19155 12.0864L15.6367 1.16492C16.2148 0.184648 17.6049 -0.264645 18.7398 0.160141C19.8746 0.584927 20.3262 1.7233 19.7487 2.70309L11.4202 16.8282C11.0391 17.475 10.2808 17.92 9.44046 17.9901C9.41332 17.9925 9.38618 17.9944 9.35903 17.9959H9.35788Z" fill="#FFD510"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
  )
}

export default DepositPage

