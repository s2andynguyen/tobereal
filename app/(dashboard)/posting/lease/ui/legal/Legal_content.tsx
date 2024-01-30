'use client'
import './styles.css'
import React, { useState } from "react";
import Image from "next/image";

const Legalimages = () => {
    //inport img
    const [selectedImageCT, setSelectedImageCT] = useState<File | null>(null)

    const handleImageChangeCT = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0]

        if (file) {
            setSelectedImageCT(file)
        };
    };
    return (
        <div className='legal_images'>
            <span>Legal images</span>
            <p>Update images to a maximum of two images</p>
            <div className='lable_input'>
                <label
                    htmlFor='image_Input'
                    className={selectedImageCT ? 'has-image' : ''}>
                    <input
                        type='file'
                        id='image_Input'
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
                        <Image
                            src='/dashboard/images/posting/img/icon_camera.png'
                            alt=''
                            className='w-[55px] h-[41px] icon'
                            width={55}
                            height={41}
                        />
                    )}
                </label>
            </div>
        </div>
    )
}
export default Legalimages