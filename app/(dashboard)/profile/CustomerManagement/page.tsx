'use client'
import { useRouter } from 'next/navigation'
import './style.css'
import { useState } from 'react'
import Image from 'next/image'
function CustomerManagement() {
    const router = useRouter()
    return (
        <div className='wrap-CustomerManagements'>
            <div className='Gr-CustomerManagements containerflex flex-col gap-4'>
                <div className='wrap-Btn-CM flex items-center justify-between pl-6 pr-4'>
                    <button className='Btn-CM' onClick={() => router.push('/')}>
                        List of customers
                    </button>
                    <Image
                        width={7}
                        height={10}
                        className='w-[7px] h-[auto]'
                        src={'/dashboard/images/profile/NextIcon.png'}
                        alt='NextIcon'
                    />
                </div>
                <div className='wrap-Btn-CM flex items-center justify-between pl-6 pr-4'>
                    <button className='Btn-CM' onClick={() => router.push('/')}>
                        Customers see postings
                    </button>
                    <Image
                        width={7}
                        height={10}
                        className='w-[7px] h-[auto]'
                        src={'/dashboard/images/profile/NextIcon.png'}
                        alt='NextIcon'
                    />
                </div>
            </div>
        </div>
    )
}

export default CustomerManagement
