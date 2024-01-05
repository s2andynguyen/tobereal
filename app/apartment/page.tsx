import React from 'react'
import './style.css'
import ManagementServices from './ui/ManagementServices'
import { Services_TOBE } from './frame'
function Apartment() {
    return (
        <div className='main bg-white'>
            <div className='Apartment-Solution container'>
                <div className='title-Apartment'>Empty House & Apartment Solutions</div>
                <div className='Gr-RegisterNow'>
                    <p className='text-register'>Register Now</p>
                    <div className='Asset-Gr'>
                        <div className='Asset'>
                            <p className='text-asset'>Asset type</p>
                            <img src={'/images/apartment/icon-register.svg'} />
                        </div>
                        <div className='Asset'>
                            <p className='text-asset'>Interior</p>
                            <img src={'/images/apartment/icon-register.svg'} />
                        </div>
                        <div className='Asset'>
                            <p className='text-asset'>Asset</p>
                            <img src={'/images/apartment/icon-register.svg'} />
                        </div>
                        <button className='REGISTERED-btn wrap-btn'>REGISTERED</button>
                    </div>
                </div>
            </div>
            <div className='Management-Services'>
                <h2>Apartment Management Services by TO BE REAL</h2>
                {/* <div className='Gr-Services grid grid-cols-3 gap-7'>
                    {Services_TOBE?.map((card) => (
                        <ManagementServices data={card} key={card?.id} />
                    ))}
                </div> */}
            </div>
        </div>
    )
}

export default Apartment
