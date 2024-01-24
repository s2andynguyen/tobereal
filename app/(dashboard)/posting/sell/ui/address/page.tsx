'use client'
import './styles.css'
import React, { useState } from "react";


const Address = () => {

    //address
    const [showSelect, setShowSelect] = useState(false);
    const [selectedValues, setSelectedValues] = useState({
        firstSelect: '',
        secondSelect: '',
        thirdSelect: '',
    });
    const handleLabelClick = () => {
        setShowSelect(true);
    };

    const handleSelectChange = (selectName: string, value: string) => {
        setSelectedValues((prevValues) => ({
            ...prevValues,
            [selectName]: value,
        }));
    };

    const handleCompleteClick = () => {
        // Do something with the selected values
        console.log('Selected Values:', selectedValues);

        // Reset state
        setShowSelect(false);
        setSelectedValues({
            firstSelect: '',
            secondSelect: '',
            thirdSelect: '',
        });
    };

    return (
        <div className="Address">
            <p className='text-Address'>Address</p>

            <label onClick={handleLabelClick}>Select address</label>
            {showSelect && (
                <div className='contact_address'>
                    <p className='contact_textAddress'>Province/ city</p>
                    <select
                        value={selectedValues.firstSelect}
                        onChange={(e) => handleSelectChange('firstSelect', e.target.value)}
                    >
                        <option value="">Choose province/ city</option>
                        <option value="Option1">Option 1</option>
                        <option value="Option2">Option 2</option>
                    </select>
                    <p className='contact_textAddress'>District</p>
                    <select
                        value={selectedValues.secondSelect}
                        onChange={(e) => handleSelectChange('secondSelect', e.target.value)}
                    >
                        <option value="">Choose District</option>
                        <option value="OptionA">Option A</option>
                        <option value="OptionB">Option B</option>
                    </select>
                    <p className='contact_textAddress'> Ward / commune</p>
                    <select
                        value={selectedValues.thirdSelect}
                        onChange={(e) => handleSelectChange('thirdSelect', e.target.value)}
                    >
                        <option value="">Choose ward / commune</option>
                        <option value="ChoiceX">Choice X</option>
                        <option value="ChoiceY">Choice Y</option>
                    </select>
                    <div className="Address-checkbox">
                        <p>Enter another ward / commune</p>
                        <input type="checkbox" />
                    </div>
                    <p className='contact_textAddress'>House number</p>
                    <div className="contact_house">
                        <input type="text" placeholder='Enter house number' className='input_house' />
                        <input type="text" placeholder='Enter Road/Street' className='input_house' />
                    </div>
                    <div className="complete_button">
                        <button className='complete_address' onClick={handleCompleteClick}>Complete</button>
                    </div>
                </div>
            )}
        </div>

    )

}
export default Address