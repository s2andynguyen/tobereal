'use client'
import './styles.css'
import React, { useState } from 'react'
import Image from 'next/image'
import DashboardLayout from '../../_ui/layout/DashboardLayout'
import Link from 'next/link'
import Legal from './ui/legal/page'
import GoogleMap from './ui/map/page'
import Address from './ui/address/page'
import Asset from './ui/asset/page'
import Detailed from './ui/detailed/page'
import Contact from './ui/contact_funt/page'
import Checkbox from './ui/checkbox/page'

const PostingSell = () => {
    const [checkbox1, setCheckbox1] = useState(false)
    const [checkbox2, setCheckbox2] = useState(true)

    const handleCheckbox1Change = () => {
        setCheckbox1(!checkbox1)
        setCheckbox2(false)
    }

    const handleCheckbox2Change = () => {
        setCheckbox2(!checkbox2)
        setCheckbox1(false)
    }
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
        <DashboardLayout title='Post'>
            <Link href='/posting/post'>
                <div className='menu_li'>
                    <p>Sell</p>
                    <Image
                        src='/dashboard/images/posting/img/house.png'
                        alt=''
                        className='w-[40px] h-[38px]'
                        width={40}
                        height={38}
                    />
                </div>
            </Link>
            <div className='sale'>
                <div className='menu_sell'>
                    <label className='menu_read'>
                        <input
                            type='checkbox'
                            checked={checkbox1}
                            onChange={handleCheckbox1Change}
                        />
                        <p> Real estate </p>
                    </label>
                    <label className='menu_read'>
                        <input
                            type='checkbox'
                            checked={checkbox2}
                            onChange={handleCheckbox2Change}
                        />
                        <p> Land for sale </p>
                    </label>
                </div>
                {checkbox1 && (
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
                            <input
                                className='link'
                                type='text'
                                placeholder='Link Youtube'
                            />
                        </div>
                        <div className='contact_menu'>
                            <span className='contact_info'>Contact Info</span>
                            <input className='name' type='text' placeholder='Full Name' />
                            <input className='name' type='text' placeholder='Phone' />
                        </div>
                        <div className='Asset'>
                            <Asset />
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
                                Do you want to deposit with the Vietnamese brokerage
                                community of 10k people?
                            </p>
                            <input type='checkbox' />
                        </div>
                        <div className='note'>
                            <p>
                                Note: TOBE REAL Real Estate does not allow properties to
                                be posted that are not real or misleading to solicit
                                customer information. If discovered, your account will be
                                permanently banned.
                            </p>
                        </div>
                        <div className='button-post'>
                            <button className='post'>
                                <span>POST</span>
                            </button>
                        </div>
                    </div>
                )}
                {checkbox2 && (
                    <div className='sell'>
                        <Checkbox />
                    </div>
                )}
            </div>
        </DashboardLayout>
    )
}

export default PostingSell
