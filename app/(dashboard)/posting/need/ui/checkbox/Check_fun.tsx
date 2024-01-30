'use client'
import './styles.css'
import React, { useState } from 'react'

const Checkbox = () => {

    //textra
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (event: { target: { value: any } }) => {
        const newValue = event.target.value

        // Giới hạn độ dài của input text
        if (newValue.length <= 10) {
            setInputValue(newValue)
        }
    }
    //input title 0/100
    const [title, setTitle] = useState('')

    const handleChange = (e: { target: { value: any } }) => {
        const inputText = e.target.value
        setTitle(inputText)

        // Limit the input to 100 characters
        if (inputText.length > 100) {
            e.target.value = inputText.slice(0, 100)
        }
    }

    return (
        <div className='Asset'>
            <span className='Type'>Asset type</span>
            <select className='select-asset' id='Asset-type' name='Asset.type'>
                <option value=''>Select address type</option>
                <option value=''>Selling townhouses</option>
                <option value=''>Selling private house</option>
                <option value=''>Selling villas and townhouses</option>
                <option value=''>Selling apartments</option>
                <option value=''>Selling restaurants and hotels</option>
                <option value=''>Selling warehouse and workshop</option>
            </select>
            <div className='contact_city'>
                <span className='contact_info'>Province/ city</span>
                <select className='provin-info' id='province-type' name='province.type'>
                    <option value=''>Choose province/ city</option>
                    <option value=''>Selling townhouses</option>
                    <option value=''>Selling private house</option>
                    <option value=''>Selling villas and townhouses</option>
                    <option value=''>Selling apartments</option>
                    <option value=''>Selling restaurants and hotels</option>
                    <option value=''>Selling warehouse and workshop</option>
                </select>
                <select className='provin-info' id='District-type' name='District.type'>
                    <option value=''>Choose District</option>
                    <option value=''>Selling townhouses</option>
                    <option value=''>Selling private house</option>
                    <option value=''>Selling villas and townhouses</option>
                    <option value=''>Selling apartments</option>
                    <option value=''>Selling restaurants and hotels</option>
                    <option value=''>Selling warehouse and workshop</option>
                </select>
            </div>
            <div className='ward'>
                <span> Ward / commune</span>
                <select className='ward-info' id='ward-type' name='ward.type'>
                    <option value=''>Choose ward / commune</option>
                    <option value=''>Selling townhouses</option>
                    <option value=''>Selling private house</option>
                    <option value=''>Selling villas and townhouses</option>
                    <option value=''>Selling apartments</option>
                    <option value=''>Selling restaurants and hotels</option>
                    <option value=''>Selling warehouse and workshop</option>
                </select>
            </div>
            <div className='Titlle'>
                <span>Title</span>
                <input
                    type='text'
                    placeholder='Enter a title'
                    value={title}
                    onChange={handleChange}
                    className='input_title'
                />
            </div>
            <div className='Description'>
                <span>Description content</span>
                <input
                    type='text'
                    placeholder='Enter a title'
                    className='Description_title'
                />
            </div>
            <div className='contact_menu'>
                <span className='contact_information'>Contact information</span>
                <input className='name' type='text' placeholder='First and last name' />
                <input className='name' type='text' placeholder='Phone' />
            </div>
            <div className='button-post'>
                <button className='post'>
                    <span>POST</span>
                </button>
            </div>
        </div>
    )
}

export default Checkbox
