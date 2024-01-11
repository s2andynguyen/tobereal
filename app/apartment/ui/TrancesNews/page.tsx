'use client'

import './style.css'
import Image from 'next/image'
function TrancesNews({ data }: { data: any }) {
    return (
        <div className='wrap-infomations'>
            <Image src={data?.img} alt='img infomations' />
            <div className='content-news'>
                <p className='text-news'>{data?.news}</p>
                <p className='text-news title-news'>{data?.title}</p>
            </div>
        </div>
    )
}

export default TrancesNews
