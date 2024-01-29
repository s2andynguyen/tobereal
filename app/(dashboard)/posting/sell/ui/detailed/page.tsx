'use client'
import './styles.css'
import React, { useState } from "react";
import Image from "next/image";

const Asset = () => {

    //Detailed information
    const [showLabel, setShowLabel] = useState(false);
    const [livingRooms, setLivingRooms] = useState(0);
    const [bedrooms, setBedrooms] = useState(0);
    const [toilets, setToilets] = useState(0);
    const [otherRooms, setOtherRooms] = useState(0);
    const [floors, setFloors] = useState(0);

    const increaseValue = (setter: (arg0: (prevValue: any) => any) => void) => {
        setter((prevValue) => prevValue + 1);
    };

    const decreaseValue = (setter: (arg0: (prevValue: any) => number) => void) => {
        setter((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
    };
    const toggleLabel = () => {
        setShowLabel(!showLabel);
    }
    //Detailed checkbox
    const [otherUtility, setOtherUtility] = useState('');

    const handleOtherUtilityChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setOtherUtility(event.target.value);
    };


    return (
        <div className="Detailed">
            <div className="detailedinformation">
                <button onClick={toggleLabel}>Detailed information</button>
            </div>
            {showLabel && (
                <div>
                    <div className="detailedInformation">
                        <div className="grid">
                            <div className="item">
                                <p>Number of living rooms:</p>
                                <div className="valueControl">
                                    <button onClick={() => decreaseValue(setLivingRooms)}>
                                        <Image
                                            src="/dashboard/images/posting/img/Tru.png"
                                            alt=""
                                            className='w-[20px] h-[20px]'
                                            width={20}
                                            height={20} />
                                    </button>
                                    <span>{livingRooms}</span>
                                    <button onClick={() => increaseValue(setLivingRooms)}>
                                        <Image
                                            src="/dashboard/images/posting/img/Cong.png"
                                            alt=""
                                            className='w-[20px] h-[20px]'
                                            width={20}
                                            height={20} />
                                    </button>
                                </div>
                            </div>
                            <div className="item">
                                <p>Bedroom number:</p>
                                <div className="valueControl">
                                    <button onClick={() => decreaseValue(setBedrooms)}>
                                        <Image
                                            src="/dashboard/images/posting/img/Tru.png"
                                            alt=""
                                            className='w-[20px] h-[20px]'
                                            width={20}
                                            height={20} />
                                    </button>
                                    <span>{bedrooms}</span>
                                    <button onClick={() => increaseValue(setBedrooms)}>
                                        <Image
                                            src="/dashboard/images/posting/img/Cong.png"
                                            alt=""
                                            className='w-[20px] h-[20px]'
                                            width={20}
                                            height={20} />
                                    </button>
                                </div>
                            </div>
                            <div className="item">
                                <p>The toilet number:</p>
                                <div className="valueControl">
                                    <button onClick={() => decreaseValue(setToilets)}>
                                        <Image
                                            src="/dashboard/images/posting/img/Tru.png"
                                            alt=""
                                            className='w-[20px] h-[20px]'
                                            width={20}
                                            height={20} />
                                    </button>
                                    <span>{toilets}</span>
                                    <button onClick={() => increaseValue(setToilets)}>
                                        <Image
                                            src="/dashboard/images/posting/img/Cong.png"
                                            alt=""
                                            className='w-[20px] h-[20px]'
                                            width={20}
                                            height={20} />
                                    </button>
                                </div>
                            </div>
                            <div className="item">
                                <p>Other rooms:</p>
                                <div className='valueControl'>
                                    <button onClick={() => decreaseValue(setOtherRooms)}>
                                        <Image
                                            src="/dashboard/images/posting/img/Tru.png"
                                            alt=""
                                            className='w-[20px] h-[20px]'
                                            width={20}
                                            height={20} />
                                    </button>
                                    <span>{otherRooms}</span>
                                    <button onClick={() => increaseValue(setOtherRooms)}>
                                        <Image
                                            src="/dashboard/images/posting/img/Cong.png"
                                            alt=""
                                            className='w-[20px] h-[20px]'
                                            width={20}
                                            height={20} />
                                    </button>
                                </div>
                            </div>
                            <div className="item">
                                <p>How many floors:</p>
                                <div className="rectangle">
                                    <button onClick={() => decreaseValue(setFloors)}>
                                        <Image
                                            src="/dashboard/images/posting/img/Tru.png"
                                            alt=""
                                            className='w-[20px] h-[20px]'
                                            width={20}
                                            height={20} />
                                    </button>
                                    <span>{floors}</span>
                                    <button onClick={() => increaseValue(setFloors)}>
                                        <Image
                                            src="/dashboard/images/posting/img/Cong.png"
                                            alt=""
                                            className='w-[20px] h-[20px]'
                                            width={20}
                                            height={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Rooms'>
                        <p>Legal status</p>
                        <div className='customSelect'>
                            <select>
                                <option className='input_custom' value="">Choose legal status</option>
                                <option className='input_custom' value="">House ownership certificate</option>
                                <option className='input_custom' value="">Red paper</option>
                                <option className='input_custom' value="">Hand paper</option>
                                <option className='input_custom' value="">Valid documents</option>
                                <option className='input_custom' value="">Being legalized</option>
                                <option className='input_custom' value="">Private transfer owner</option>
                                <option className='input_custom' value="">Contract</option>
                                <option className='input_custom' value="">Unknown</option>
                            </select>
                        </div>
                        <p>Way in</p>
                        <div className="customSelect">
                            <select>
                                <option className='input_custom'>Select the distance from the outside</option>
                                <option className='input_custom'>Undefined </option>
                                <option className='input_custom'>1m</option>
                                <option className='input_custom'>2m</option>
                                <option className='input_custom'>3m</option>
                                <option className='input_custom'>4m</option>
                                <option className='input_custom'>5m</option>
                                <option className='input_custom'>6m</option>
                                <option className='input_custom'>7m</option>
                                <option className='input_custom'>8m</option>
                                <option className='input_custom'>9m</option>
                                <option className='input_custom'>10m</option>
                                <option className='input_custom'>10m - 20m</option>
                                <option className='input_custom'>20m - 30m</option>
                                <option className='input_custom'>30m - 40m</option>
                                <option className='input_custom'>40m - 50m</option>
                                <option className='input_custom'>50m - 60m</option>
                                <option className='input_custom'>60m - 70m</option>
                                <option className='input_custom'>70m - 80m</option>
                                <option className='input_custom'>80m - 90m</option>
                                <option className='input_custom'>90m - 100m</option>
                                <option className='input_custom'>100m - 200m</option>
                                <option className='input_custom'> {'>'} 200m</option>
                                <option className='input_custom'> {'>'} 300m</option>
                            </select>
                        </div>
                        <p>Asset orientation</p>
                        <div className="customSelect">
                            <select>
                                <option className='input_custom'>Choose property direction</option>
                                <option className='input_custom'>Winter </option>
                                <option className='input_custom'>West</option>
                                <option className='input_custom'>Male</option>
                                <option className='input_custom'>North</option>
                                <option className='input_custom'>northeast</option>
                                <option className='input_custom'>South East</option>
                                <option className='input_custom'>northwest</option>
                                <option className='input_custom'>Southwest</option>
                                <option className='input_custom'>Unknown</option>
                            </select>
                        </div>
                        <div className='Utilities_contact'>
                            <p>Utilities</p>
                            <div className='Utilities'>
                               <div className='input_box'>
                                    <input type="checkbox" id="fullFacilities" />
                                    <label htmlFor="fullFacilities">Full facilities</label>
                               </div>

                                <div className='input_box'>
                                    <input type="checkbox" id="parkingSpace" />
                                    <label htmlFor="parkingSpace">Parking space</label>
                                </div>

                                <div className='input_box'>
                                    <input type="checkbox" id="businessConvenience" />
                                    <label htmlFor="businessConvenience">Business convenience</label>
                                </div>

                                <div className='input_box'>
                                    <input type="checkbox" id="garden" />
                                    <label htmlFor="garden">Garden</label>
                                </div>

                                <div className='input_box'>
                                    <input type="checkbox" id="convenientfor" />
                                    <label htmlFor="convenientfor">Convenient for production</label>
                               </div>

                                <div className='input_box'>
                                    <input type="checkbox" id="convenientToLive" />
                                    <label htmlFor="convenientToLive">Convenient to live</label>
                                </div>

                                <div className='input_box'>
                                    <input type="checkbox" id="pool" />
                                    <label htmlFor="pool">Pool</label>
                                </div>

                                <div className='input_box'>
                                    <input type="checkbox" id="Todooffice" />
                                    <label htmlFor="Todooffice">Convenient to do office</label>
                                </div>

                                <div className='input_textbox'>
                                    <input type="checkbox" id="otherUtility" />
                                    <input
                                        className='enter_other'
                                        type="text"
                                        placeholder='Enter the other little other'
                                        id="otherUtilityText"
                                    />
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )

}
export default Asset