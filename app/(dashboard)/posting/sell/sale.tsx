'use client'
import './styles.css'
import React, { useState } from 'react'
import Checkbox from "@mui/material/Checkbox";
import Image from 'next/image';

const PostingSell = () => {
    //checkbox
    const [inputValue, setInputValue] = useState('');
    const label = { inputProps: { "aria-label": "Checkbox" } };
    const handleInputChange = (event: { target: { value: any; }; }) => {
        const newValue = event.target.value;

        // Giới hạn độ dài của input text 
        if (newValue.length <= 10) {
            setInputValue(newValue);
        }
    };
    return (
        <div className="sale">
            <div className="menu_sell" >
                <div className="menu_read">
                    <Checkbox {...label} />
                    <p>Real estate</p>
                </div>
                <div className="menu_read">
                    <Checkbox {...label} />
                    <p>Land for sale</p>
                </div>
            </div>
            <div className="input_container">
                <textarea
                    className='input_text '
                    placeholder="0/10"
                    value={inputValue}
                    onChange={handleInputChange} />
                <div className="camera-icon">
                    <Image
                        src="/dashboard/images/posting/img/icon_camera.png"
                        alt=""
                        className="w-[55px] h-[41px]"
                        width={55}
                        height={41}
                    />
                </div>
            </div>
        </div>
    )
}

export default PostingSell
