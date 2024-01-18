'use client'
import './style.css'
import Image from 'next/image'
import React, { useState } from 'react'
function CreateTrading() {
    const [selectedImageCT, setSelectedImageCT] = useState<File | null>(null)

    const handleImageChangeCT = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0]

        if (file) {
            setSelectedImageCT(file)
        }
    }
    return (
        <div className='CreateTrading-wrap'>
            <div className='image-CreateTrading '>
                <label
                    htmlFor='imageInput-CT'
                    className={selectedImageCT ? 'has-image' : ''}>
                    <input
                        type='file'
                        id='imageInputCT'
                        accept='image/*'
                        onChange={handleImageChangeCT}
                    />
                    <div className='overlay-CreateTrading'>
                        <Image
                            className='iconCamera-CreateTrading w-[25px] h-[auto]'
                            width={25}
                            height={20}
                            alt='IconCamera'
                            src={'/dashboard/images/profile/IconCamera.png'}
                        />
                        <Image
                            className='iconShare-CreateTrading w-[auto] h-[23px]'
                            width={20}
                            height={23}
                            alt='IconShare'
                            src={'/dashboard/images/profile/IconShare.png'}
                        />
                    </div>
                    {selectedImageCT && (
                        <div
                            className='CreateTrading-image-preview'
                            style={{
                                backgroundImage: `url(${URL.createObjectURL(
                                    selectedImageCT
                                )})`
                            }}
                        />
                    )}
                    {!selectedImageCT && <div className='CreateTrading'></div>}
                </label>
            </div>
        </div>
    )
}

export default CreateTrading
