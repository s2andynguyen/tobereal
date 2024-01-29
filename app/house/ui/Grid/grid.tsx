'use client'
import React from 'react'
import Image from 'next/image'
import './style.css'
interface MainPathProps {
    id?: number
    img: string
    name: string
    title: string
}
const Main: React.FC<MainPathProps> = ({ img, name, title }) => {
    return (
        <div className='api'>
            <Image height={132} width={161} src={img} alt='Servis Pemasaran Rumah' />
            <h4>{name}</h4>
            <p>{title}</p>
        </div>
    )
}
export default Main
