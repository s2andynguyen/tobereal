'use client'
import classNames from 'classnames'
import './style.css'
import Image from 'next/image'
import React, { useState } from 'react'
function CreateTrading() {
    const [selectedImageCT, setSelectedImageCT] = useState<File | null>(null)
    const [selectedImageCT1, setSelectedImageCT1] = useState<File | null>(null)

    const handleImageChangeCT = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0]

        if (file) {
            setSelectedImageCT(file)
        }
    }
    const handleImageChangeCT1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0]

        if (file) {
            setSelectedImageCT1(file)
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
            <div className='Gr-wrap-inputCT pt-10 '>
                <div className='CT-grInput'>
                    <label className='text-labelCT' htmlFor='NameTrading'>
                        Name of the trading platform
                    </label>
                    <input
                        className='text-labelCT w-[855.70px] h-[50px] bg-neutral-200 rounded-[5px] border border-white border-opacity-10 pl-12 '
                        type='text'
                        name='NameTrading'
                        id='NameTrading'
                        placeholder='Name of the trading platform'
                    />
                </div>
                <div className='CT-grInput'>
                    <label className='text-labelCT' htmlFor='DescriptionContent'>
                        Description content
                    </label>
                    <textarea
                        className='Description-Style text-labelCT pl-12 '
                        name='DescriptionContent'
                        id='DescriptionContent'
                        placeholder='Enter a description'
                    />
                </div>
                <div className='CT-grInput'>
                    <p className='text-labelCT'>Introductory photo</p>
                    <div className='Image-Introductory '>
                        <label
                            htmlFor='imageIntroductory '
                            className={classNames('labelIntroductory', {
                                selectedImageCT1
                            })}>
                            <input
                                className='inputIntroductory'
                                type='file'
                                id='imageIntroductory '
                                accept='image/*'
                                onChange={handleImageChangeCT1}
                            />

                            {selectedImageCT1 && (
                                <div
                                    className='Introductory-image-preview'
                                    style={{
                                        backgroundImage: `url(${URL.createObjectURL(
                                            selectedImageCT1
                                        )})`
                                    }}
                                />
                            )}
                            {!selectedImageCT1 && (
                                <div className='placeholder1'>0/10</div>
                            )}
                            <div className='overlayIntroductory'>
                                <Image
                                    className='iconCamera w-[50px] h-[auto]'
                                    width={50}
                                    height={37}
                                    alt='IconCameraBlack'
                                    src={'/dashboard/images/profile/IconCameraBlack.png'}
                                />
                            </div>
                        </label>
                    </div>
                </div>
                <div className='CT-grInput'>
                    <label className='text-labelCT'>Headquarters information</label>
                    <input
                        className='text-labelCT w-[855.70px] h-[50px] bg-neutral-200 rounded-[5px] border border-white border-opacity-10 pl-12 '
                        type='text'
                        name=''
                        id=''
                        placeholder='Office address'
                    />
                    <div className='Child-input-informations flex justify-between'>
                        <input
                            className='text-labelCT w-[257px] h-[50px] bg-neutral-200 rounded-[5px] border border-white border-opacity-10 pl-12 '
                            type='text'
                            name=''
                            id=''
                            placeholder='Province/city'
                        />
                        <input
                            className='text-labelCT w-[257px] h-[50px] bg-neutral-200 rounded-[5px] border border-white border-opacity-10 pl-12 '
                            type='text'
                            name=''
                            id=''
                            placeholder='County'
                        />
                        <input
                            className='text-labelCT w-[257px] h-[50px] bg-neutral-200 rounded-[5px] border border-white border-opacity-10 pl-12 '
                            type='text'
                            name=''
                            id=''
                            placeholder='Ward/Commune'
                        />
                    </div>
                    <input
                        className='text-labelCT w-[855.70px] h-[50px] bg-neutral-200 rounded-[5px] border border-white border-opacity-10 pl-12 '
                        type='number'
                        name=''
                        id=''
                        placeholder='Phone'
                    />
                    <input
                        className='text-labelCT w-[855.70px] h-[50px] bg-neutral-200 rounded-[5px] border border-white border-opacity-10 pl-12 '
                        type='number'
                        name=''
                        id=''
                        placeholder='Hotline:'
                    />
                    <input
                        className='text-labelCT w-[855.70px] h-[50px] bg-neutral-200 rounded-[5px] border border-white border-opacity-10 pl-12 '
                        type='text'
                        name=''
                        id=''
                        placeholder='Website:'
                    />
                </div>
            </div>
        </div>
    )
}

export default CreateTrading
