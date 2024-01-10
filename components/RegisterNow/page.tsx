import './style.css'

function RegisterNow() {
    return ( 
        <div className='Gr-RegisterNow'>
                        <p className='text-register'>Register Now</p>
                        <div className='Asset-Gr'>
                            <div className='Asset'>
                                <p className='text-asset'>Asset type</p>
                                <img src={'/images/apartment/svg/icon-register.svg'} />
                            </div>
                            <div className='Asset'>
                                <p className='text-asset'>Interior</p>
                                <img src={'/images/apartment/svg/icon-register.svg'} />
                            </div>
                            <div className='Asset'>
                                <p className='text-asset'>Asset</p>
                                <img src={'/images/apartment/svg/icon-register.svg'} />
                            </div>
                            <button className='REGISTERED-btn wrap-btn'>
                                REGISTERED
                            </button>
                        </div>
                    </div>
     );
}

export default RegisterNow;