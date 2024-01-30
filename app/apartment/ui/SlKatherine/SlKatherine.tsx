'use client'

import { DiJavascript1 } from 'react-icons/di'
import './style.css'
import Skeleton from '@mui/material/Skeleton'

import Image from 'next/image'
function SlKatherine({ data }: { data: any }) {
    return (
        // {isLoading ? (: any
        //     <Skeleton: any
        //         animation='wave'
        //         variant='rectangular'
        //         height={217}
        //         width={400}
        //     />
        // ) : (
            
        <div className='box-Katherine'>
            <div className='wrap-Katherine'>
                <div className='contents-Katherine max-w-[380px] w-full'>
                    <h4 className='title-Katherine text-xl md:text-2xl pb-3 sm:pb-8'>
                        {data?.title}
                    </h4>
                    <div className='text-Owners gap-8'>
                        <p className='Owner-sz title-Katherine'>{data?.titleSub}</p>
                        <p className='content-Owner-sz pb-2 sm:pb-7'>{data?.textContent}</p>
                    </div>
                    <p className='content-Owner-sz'>{data?.text}</p>
                </div>
                <Image
                    width={50}
                    height={50}
                    className='w-[auto]'
                    src={data?.img}
                    alt='avt-Katherine'
                />
            </div>
            <a href='#'>View Videos ➔</a>
        </div>
        // )}
    // </SwiperSlide> 
    )
}

export default SlKatherine
