'use client'
import './styles.css'
import React, { useState } from 'react'
import Image from 'next/image'
import Legal from '../legal/page'
import GoogleMap from '../map/page'
import Address from '../address/page'
import Detailed from '..//detailed/page'
import Contact from '../contact_funt/page'

const PostingSell = () => {
    //textra
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (event: { target: { value: any } }) => {
        const newValue = event.target.value

        // Giới hạn độ dài của input text
        if (newValue.length <= 10) {
            setInputValue(newValue)
        }
    }

    return (
        <div className='sell'>
            <div className='input_container'>
                <textarea
                    className='input_text '
                    placeholder='0/10'
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <div className='camera-icon'>
                    <Image
                        src='/dashboard/images/posting/img/icon_camera.png'
                        alt=''
                        className='w-[55px] h-[41px]'
                        width={55}
                        height={41}
                    />
                </div>
            </div>
            <div className='legal'>
                <Legal />
            </div>
            <div className='Add_video'>
                <span className='content_add'>Video Youtube (add video)</span>
                <input className='link' type='text' placeholder='Link Youtube' />
            </div>
            <div className='contact_menu'>
                <span className='contact_info'>Contact Info</span>
                <input className='name' type='text' placeholder='Full Name' />
                <input className='name' type='text' placeholder='Phone' />
            </div>
            <div className='Asset'>
                <span className='Type'>Asset type</span>
                <select className='select-asset' id='Asset-type' name='Asset.type'>
                    <option value=''>Select address type</option>
                    <option value=''>Project land</option>
                    <option value=''>Agricultural and forestry land</option>
                    <option value=''>
                        Ground land - Residential land - Residential land
                    </option>
                </select>
            </div>
            <div className='Address'>
                <Address />
            </div>
            <div className='google_map'>
                <GoogleMap />
            </div>
            <div className='contact'>
                <Contact />
            </div>
            <div className='Detailed'>
                <Detailed />
            </div>
            <div className='Vietnamese-checkbox'>
                <p>
                    Do you want to deposit with the Vietnamese brokerage community of 10k
                    people?
                </p>
                <input type='checkbox' />
            </div>
            <div className='note'>
                <p>
                    Note: TOBE REAL Real Estate does not allow properties to be posted
                    that are not real or misleading to solicit customer information. If
                    discovered, your account will be permanently banned.
                </p>
            </div>
            <div className='button-post'>
                <button className='post'>
                    <span>POST</span>
                </button>
            </div>
        </div>
    )
}

export default PostingSell
