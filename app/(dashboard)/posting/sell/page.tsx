'use client'
import './styles.css'
import React, { useState } from 'react'
import Image from 'next/image'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

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
                <div className='sale'>
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
                    <div className='text_legal'>
                        <span>Legal images</span>
                        <p>Update images to a maximum of two images</p>
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
                        <span>Asset type</span>
                        <select
                            className='select-asset'
                            id='Asset-type'
                            name='Asset.type'
                        >
                            <option value=''>Select address</option>
                            <option value=''>Selling townhouses</option>
                            <option value=''>Selling private house</option>
                            <option value=''>Selling villas and townhouses</option>
                            <option value=''>Selling apartments</option>
                            <option value="">Selling restaurants and hotels</option>
                            <option value="">Selling warehouse and workshop</option>
                        </select>
                    </div>
                    <div className="Address">
                        <span>Address</span>

                    </div>
                    <div className="google_map">
                        <Image
                            src='/dashboard/images/posting/img/Map.png'
                            alt=''
                            className='w-[934px] h-[900px]'
                            width={934}
                            height={900}
                        />

                    </div>
                    <div className="Titlle">
                        <span>Title</span>
                        <input type="text" placeholder='' />
                    </div>
                    
                </div>
            )}
            {checkbox2 && <p>aaaaa</p>}
        </div>
    )
}

export default PostingSell
