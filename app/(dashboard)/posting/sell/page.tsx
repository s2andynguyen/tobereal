'use client'
import './styles.css'
import React, { useState } from 'react'
import Image from 'next/image'
import DashboardLayout from '../../_ui/layout/DashboardLayout';
import Link from 'next/link';

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
    //inport img
    const [selectedImageCT, setSelectedImageCT] = useState<File | null>(null)

    const handleImageChangeCT = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0]

        if (file) {
            setSelectedImageCT(file)
        }
    }
    // rooms number

    const [roomCount, setRoomCount] = useState(1);

    const handleIncrease = () => {
        setRoomCount(prevCount => prevCount + 1);
    };

    const handleDecrease = () => {
        if (roomCount > 1) {
            setRoomCount(prevCount => prevCount - 1);
        }
    };
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
    //Detailed information
    const [showLabel, setShowLabel] = useState(false);
    const [roomCounts, setRoomCounts] = useState([0, 0, 0, 0, 0]);

    const increaseRoomCount = (index) => {
        const newRoomCounts = [...roomCounts];
        newRoomCounts[index]++;
        setRoomCounts(newRoomCounts);
    };

    const decreaseRoomCount = (index) => {
        if (roomCounts[index] > 0) {
            const newRoomCounts = [...roomCounts];
            newRoomCounts[index]--;
            setRoomCounts(newRoomCounts);
        }
    };

    const toggleLabel = () => {
        setShowLabel(!showLabel);
    }
    return (
        <DashboardLayout title='Post' >
            <Link href="/posting/post">
                <div className="menu_li">
                    <p>Sell</p>
                    <Image
                        src="/dashboard/images/posting/img/Sell.png"
                        alt=""
                        className='w-[40px] h-[38px]'
                        width={40}
                        height={38} />

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
                        <div className='text_legal'>
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
                            <select
                                className='select-asset'
                                id='Asset-type'
                                name='Asset.type'
                            >
                                <option value=''>Select address type</option>
                                <option value=''>Selling townhouses</option>
                                <option value=''>Selling private house</option>
                                <option value=''>Selling villas and townhouses</option>
                                <option value=''>Selling apartments</option>
                                <option value="">Selling restaurants and hotels</option>
                                <option value="">Selling warehouse and workshop</option>
                            </select>
                        </div>
                        <div className="Address">
                            <span className='text-Address'>Address</span>

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
                                    <p className='contact_textAddress'> ward / commune</p>
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
                                    <input type="text" placeholder='Enter house number' className='input_house' />
                                    <input type="text" placeholder='Enter Road/Street' className='input_house' />
                                    <button className='complete_address' onClick={handleCompleteClick}>Complete</button>
                                </div>
                            )}


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
                        <div className="Detailed">
                            <div onClick={toggleLabel}>Detailed information</div>
                            {showLabel && (
                                <div className='Rooms'>
                                    <p>Legal status</p>
                                    <select>
                                        {/* Nội dung của select */}
                                    </select>
                                    <p>Way in</p>
                                    <select>
                                        {/* Nội dung của select */}
                                    </select>
                                    <p>Asset orientation</p>
                                    <select>
                                        {/* Nội dung của select */}
                                    </select>
                                    <p>Utilities</p>
                                    <select>
                                        {/* Nội dung của select */}
                                    </select>
                                </div>
                            )}

                        </div>
                        <div className="Vietnamese-checkbox">
                            <p>Do you want to deposit with the Vietnamese brokerage community of 10k people?</p>
                            <input type="checkbox" />
                        </div>
                        <div className="note">
                            <p>Note: TOBE REAL Real Estate does not allow properties to be posted that are not real or misleading to solicit customer information. If discovered, your account will be permanently banned.</p>
                        </div>
                        <div className="button-post">
                            <button className='post'>
                                <span>
                                    POST
                                </span>
                            </button>
                        </div>
                    </div>
                )}
                {checkbox2 && (<div className='sell'>
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
                                    <div className='placeholder'>Choose Logo</div>
                                )}
                            </label>
                        </div>
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
                        <select
                            className='select-asset'
                            id='Asset-type'
                            name='Asset.type'
                        >
                            <option value=''>Select address type</option>
                            <option value=''>Selling townhouses</option>
                            <option value=''>Selling private house</option>
                            <option value=''>Selling villas and townhouses</option>
                            <option value=''>Selling apartments</option>
                            <option value="">Selling restaurants and hotels</option>
                            <option value="">Selling warehouse and workshop</option>
                        </select>
                    </div>
                    <div className="Address">
                        <span className='text-Address'>Address</span>

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
                                    <option value=''>EUR</option>
                                    <option value=''>JPY</option>
                                    <option value=''>GBP</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="Detailed">
                        <span>Detailed information</span>
                        <select name="" id="">
                            <option value="">

                            </option>
                        </select>
                    </div>
                    <div className="Vietnamese-checkbox">
                        <p>Do you want to deposit with the Vietnamese brokerage community of 10k people?</p>
                        <input type="checkbox" />
                    </div>
                    <div className="note">
                        <p>Note: TOBE REAL Real Estate does not allow properties to be posted that are not real or misleading to solicit customer information. If discovered, your account will be permanently banned.</p>
                    </div>
                    <div className="button-post">
                        <button className='post'>
                            <span>
                                POST
                            </span>
                        </button>
                    </div>
                </div>
                )}
            </div>
        </DashboardLayout >
    )
}

export default PostingSell
