'use client'
import './style.css'
import Image from 'next/image'
function ManagementServices({ data }: { data: any }) {
    return (
        <div className='wrap-Managements p-5 justify-between lg:p-12'>
            <Image
                width={175}
                height={162}
                className='h-[auto] max-w-[175px] w-full'
                src={data?.img}
                alt='Managements img'
            />
            <h3 className='name-management'>{data?.name}</h3>
            <p className='title-management'>{data?.title}</p>
        </div>
    )
}

export default ManagementServices
