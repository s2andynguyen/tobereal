import React from 'react'
import Image from 'next/image'
interface ImageHighlight {
    listImage: string[]
}
const ImageHighlight: React.FC<ImageHighlight> = ({ listImage }) => {
    return (
        <div className='min-h-[300px] lg:min-h-[400px] grid grid-cols-2 gap-5'>
            <Image
                src={'/images/detail-hotel/room-demo.jpg'}
                height={400}
                width={536}
                alt='room-demo.jpg'
                className='h-full w-auto object-cover rounded-[10px]'
            />

            <div className='grid lg:grid-cols-2 gap-5'>
                {listImage.slice(1,5).map((imageUrl, index) => {
                    return (
                        <Image
                            key={index}
                            src={imageUrl}
                            height={400}
                            width={536}
                            priority
                            alt='room-demo.jpg'
                            className={`h-full w-auto object-cover rounded-[10px] ${
                                index >= 2 ? 'hidden lg:block' : ''
                            }`}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ImageHighlight
