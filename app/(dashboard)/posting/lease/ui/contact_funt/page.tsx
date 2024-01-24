'use client'
import './styles.css'
import React, { useState } from "react";


const Contact = () => {
    //input title
    const [title, setTitle] = useState('');

    const handleChange = (e: { target: { value: any; }; }) => {
        const inputText = e.target.value;
        setTitle(inputText);

        // Limit the input to 100 characters
        if (inputText.length > 100) {
            e.target.value = inputText.slice(0, 100);
        }
    };
    return (
        <div className="contact_center">
            <div className="Titlle">
                <span>Title</span>
                <input
                    type="text"
                    placeholder="Enter a title"
                    value={title}
                    onChange={handleChange}
                    className='input_title'

                />
            </div>
            <div className="Description">
                <span>Description content</span>
                <input
                    type="text"
                    placeholder="Enter a title"
                    value={title}
                    onChange={handleChange}
                    className='Description_title'

                />
            </div>
            <div className="Acrea">
                <span>Acreage (m2)</span>
                <input
                    type="text"
                    placeholder="Enter the land area"
                    className='text_Acrea'
                />
            </div>
            <div className="content_Hori">
                <div className="Horizontal">
                    <span>Horizontal (m)</span>
                    <input
                        type="text"
                        placeholder="Enter horizontal"
                        className='text_Hori'
                    />
                </div>
                <div className="Longs">
                    <span>Longs (m)</span>
                    <input
                        type="text"
                        placeholder="Enter horizontal"
                        className='text_Longs'
                    />
                </div>
            </div>
            <div className="container_Price">
                <div className="flex-price">
                    <span>Price</span>

                    <div className="Price">

                        <input
                            type="text"
                            placeholder="Enter Price"
                            className='input_Price'
                        />

                        <select
                            className='content_input'
                            id='price-vnd'
                            name='price.vnd'
                        >
                            <option value=''>VNĐ</option>
                            <option value=''>USD</option>
                            <option value=''>EUR</option>
                            <option value=''>JPY</option>
                            <option value=''>GBP</option>
                        </select>
                        <select
                            className='content_input'
                            id='form_total'
                            name='form_total-area'
                        >
                            <option value=''>Total area</option>
                            <option value=''></option>
                            <option value=''></option>
                            <option value=''></option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact