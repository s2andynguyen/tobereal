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
        <div className='CreateTrading-wrap container'>
            <div className='CreateTrading-container'>
                <label
                    htmlFor='imageInput'
                    className={selectedImageCT ? 'has-image' : ''}>
                    <input
                        type='file'
                        id='imageInput'
                        accept='image/*'
                        onChange={handleImageChangeCT}
                    />

                    {selectedImageCT && (
                        <div
                            className='selected-image-preview'
                            style={{
                                backgroundImage: `url(${URL.createObjectURL(
                                    selectedImageCT
                                )})`
                            }}
                        />
                    )}
                    {!selectedImageCT && <div className='placeholder'>Choose Logo</div>}
                </label>
            </div>
            <div className='Gr-wrap-inputCT'>
                <div className='CT-grInput'>
                    <label className='text-labelCT' htmlFor=''>
                        Name of the trading platform
                    </label>
                    <input
                        className='w-[855.70px] h-[50px] bg-neutral-200 rounded-[5px] border border-white border-opacity-10 pl-5'
                        type='text'
                        name=''
                        id=''
                        placeholder='Name of the trading platform'
                    />
                </div>
            </div>
        </div>
    )
}

export default CreateTrading
