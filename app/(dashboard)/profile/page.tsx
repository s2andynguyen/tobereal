'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import './style.css'
// components
import InformationForm from './InformationForms/InformationForm'
import Favourite from './Favourites/Favourite'
import InformationBonuss from './InformationBonuss/InformationBonuss'
import LinkWebsite from './LinkWebsites/LinkWebsite'
import Manage from './Manages/Manage'
import ChangePassword from './ChangePassword/ChangePassword'
// icon
import IconEdit from '/public/dashboard/images/profile/svg/EditNameUser.svg'
import { SlBookOpen } from 'react-icons/sl'

const Profile = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null)

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0]

        if (file) {
            setSelectedImage(file)
        }
    }

    return (
        <div className='Wrapper-Profile'>
            <div className='image-container'>
                <label htmlFor='imageInput' className={selectedImage ? 'has-image' : ''}>
                    <input
                        type='file'
                        id='imageInput'
                        accept='image/*'
                        onChange={handleImageChange}
                    />
                    <div className='overlay'>
                        <Image
                            className='iconCamera w-[25px] h-[auto]'
                            width={25}
                            height={20}
                            alt='IconCamera'
                            src={'/dashboard/images/profile/IconCamera.png'}
                        />
                        <Image
                            className='iconShare w-[auto] h-[23px]'
                            width={20}
                            height={23}
                            alt='IconShare'
                            src={'/dashboard/images/profile/IconShare.png'}
                        />
                    </div>
                    {selectedImage && (
                        <div
                            className='selected-image-preview'
                            style={{
                                backgroundImage: `url(${URL.createObjectURL(
                                    selectedImage
                                )})`
                            }}
                        />
                    )}
                    {!selectedImage && <div className='placeholder'></div>}
                </label>
            </div>
            <div className='avt-wrap container flex items-center gap-5'>
                <div className='Gr-Avt flex items-center gap-3'>
                    <Image
                        width={103}
                        height={103}
                        className='w-[103px] h-[auto]'
                        alt='AvatarUsers'
                        src={'/dashboard/images/profile/AvatarUsers.png'}
                    />
                    <Image
                        width={22}
                        height={16}
                        className='IconCameraAvt w-[22px] h-[auto]'
                        alt='IconCameraAvt'
                        src={'/dashboard/images/profile/IconCameraAvt.png'}
                    />
                </div>
                <div className='Gr-NameUser flex items-center'>
                    <input
                        className='input-NameUser'
                        type='text'
                        id='IconEditName'
                        placeholder='JSON'
                    />
                    <label htmlFor='IconEditName'>
                        <Image
                            width={14}
                            height={16}
                            className='Icon-EditName w-[14px] h-[auto]'
                            src={IconEdit}
                            alt='IconEdit'
                        />
                    </label>
                </div>
            </div>
            <div className='wrapper-Informations container justify-items-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                <InformationForm />
                <Favourite />
                <InformationBonuss />
                <LinkWebsite />
                <Manage />
                <ChangePassword />
            </div>
        </div>
    )
}

export default Profile
