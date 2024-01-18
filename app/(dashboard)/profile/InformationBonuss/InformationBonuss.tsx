import './style.css'
import Image from 'next/image'
function InformationBonuss() {
    return (
        <div className='wrap-InformationBonuss flex flex-col justify-between'>
            <div className='InformationBonuss-Gr flex flex-col gap-4 items-center'>
                <div className='formBalances flex !justify-around'>
                    <div className='flex flex-col items-center'>
                        <p className='InformationBonus-text'>Balance</p>
                        <p className='InformationBonus-text'>$ 4,000.00</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <button className='btn-Balances'>Withdraw</button>
                        <button className='btn-Balances'>Deposit</button>
                    </div>
                </div>
                <div className='formBalances'>
                    <div className='flex flex-col items-center pl-8'>
                        <p className='InformationBonus-text'>Bonus</p>
                        <p className='InformationBonus-text'>$ 4,000.00</p>
                    </div>
                </div>

                <div className='formBalances'>
                    <div className='flex flex-col items-left pl-8'>
                        <p className='InformationBonus-text pl-4'>Gift account</p>
                        <p className='InformationBonus-text'>$ 4,000.00</p>
                    </div>
                </div>
            </div>
            <div className='Gr-Icons-SocialNetwork flex flex-row justify-between'>
                <Image
                    width={45}
                    height={45}
                    className='w-[45px] h-[auto]'
                    src={'/dashboard/images/profile/IconBottomShare.png'}
                    alt='Icon-SocialNetwork'
                />
                <Image
                    width={45}
                    height={45}
                    className='w-[45px] h-[auto]'
                    src={'/dashboard/images/profile/FacebookIcon.png'}
                    alt='Icon-SocialNetwork'
                />
                <Image
                    width={45}
                    height={45}
                    className='w-[45px] h-[auto]'
                    src={'/dashboard/images/profile/TwitterIcon.png'}
                    alt='Icon-SocialNetwork'
                />
                <Image
                    width={45}
                    height={45}
                    className='w-[45px] h-[auto]'
                    src={'/dashboard/images/profile/YoutubeIcon.png'}
                    alt='Icon-SocialNetwork'
                />
                <Image
                    width={45}
                    height={45}
                    className='w-[45px] h-[auto]'
                    src={'/dashboard/images/profile/InstagramIcon.png'}
                    alt='Icon-SocialNetwork'
                />
            </div>
        </div>
    )
}

export default InformationBonuss
