'use client'
import classNames from 'classnames'
import DashboardLayout from '@/app/(dashboard)/_ui/layout/DashboardLayout'
import Image from 'next/image'
import React, { useState } from 'react'
import './style.css'
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
        <DashboardLayout title='Create a trading platform for free'>
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
                        {!selectedImageCT && (
                            <div className='placeholder'>Choose Logo</div>
                        )}
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
                                        src={
                                            '/dashboard/images/profile/IconCameraBlack.png'
                                        }
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
                        <div className='Child-input-informations flex justify-between w-[855.70px]'>
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
                    <div className='CT-grInput'>
                        <p className='text-labelCT'>Website</p>
                        <Image
                            width={856}
                            height={855}
                            className='w-[856px] h-[auto]'
                            alt='MapHCM'
                            src={'/dashboard/images/profile/Map.jpg'}
                        />
                    </div>
                    <div className='CT-grInput'>
                        <p className='text-labelCT'>Branch information</p>
                        <button className='AddBranch-CT flex w-[855.70px] h-[50px] bg-gradient-to-b from-yellow-500 to-yellow-200 rounded-[5px] border justify-center gap-5'>
                            <Image
                                width={32}
                                height={32}
                                className='w-[32px] h-[auto]'
                                alt='addBranch'
                                src={'/dashboard/images/profile/AddBranch-Icon2.png'}
                            />
                            Add branch
                        </button>
                    </div>
                    <div className='CT-grInput'>
                        <label className='text-labelCT' htmlFor=''>
                            Contact person information
                        </label>
                        <input
                            className='text-labelCT w-[855.70px] h-[50px] bg-neutral-200 rounded-[5px] border border-white border-opacity-10 pl-12 '
                            type='text'
                            name=''
                            id=''
                            placeholder='Full name'
                        />
                        <input
                            className='text-labelCT w-[855.70px] h-[50px] bg-neutral-200 rounded-[5px] border border-white border-opacity-10 pl-12 '
                            type='text'
                            name=''
                            id=''
                            placeholder='Position'
                        />
                        <input
                            className='text-labelCT w-[855.70px] h-[50px] bg-neutral-200 rounded-[5px] border border-white border-opacity-10 pl-12 '
                            type='email'
                            name=''
                            id=''
                            placeholder='Email'
                        />
                        <input
                            className='text-labelCT w-[855.70px] h-[50px] bg-neutral-200 rounded-[5px] border border-white border-opacity-10 pl-12 '
                            type='number'
                            name=''
                            id=''
                            placeholder='Phone'
                        />
                    </div>
                    <div className='CT-grInput w-[855.70px] flex items-center'>
                        <button className='Create-Btn w-[749.73px] h-[70px] bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-[10px] text-black text-[32px] font-bold'>
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
export default CreateTrading
