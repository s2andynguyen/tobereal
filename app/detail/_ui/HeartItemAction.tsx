'use client'
import React, { useState } from 'react'
import Image from 'next/image'
interface HeartItemActionProps {
    liked: boolean
} 
const HeartItemAction:React.FC<HeartItemActionProps> = ({liked}) => {
    const [likedState, setLikedState] = useState(liked)
    const toggleLiked = () => {
        setLikedState(!likedState)
    }
    return (
        <div
            className='w-12 h-[44px] bg-white rounded-[5px] shadow-gray flex justify-center items-center cursor-pointer group ml-3 sm:ml-0'
            onClick={toggleLiked}>
            <Image
                src={`/images/home/vector/${
                    likedState ? 'liked-heart' : 'heart-white'
                }.svg`}
                height={30}
                width={26}
                className='w-auto h-auto scale-150 group-hover:drop-shadow-md transition duration-200'
                alt='liked-heart'
            />
        </div>
    )
}

export default HeartItemAction
