import { useRouter } from 'next/navigation'
import './style.css'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
function Manage() {
    const router = useRouter()
    // State để lưu trạng thái hiển thị/ẩn nội dung
    const [isContentVisible, setIsContentVisible] = useState(false)

    // Hàm xử lý sự kiện khi button được click
    const toggleContent = () => {
        setIsContentVisible(!isContentVisible) // Đảo ngược trạng thái
    }
    return (
        <div className='wrap-Manages'>
            <div className='bg-TitleManage flex items-center'>
                <h2 className='top-title-Manage pl-16'>Manage</h2>
            </div>
            <div className='Gr-form-Manages flex flex-col items-center gap-3'>
                <button
                    className='Btn-Manage'
                    onClick={() => router.push('/profile/CustomerManagement')}>
                    Post management
                    <Image
                        width={7}
                        height={10}
                        className='w-[7px] h-[auto]'
                        src={'/dashboard/images/profile/NextIcon.png'}
                        alt='NextIcon'
                    />
                </button>
                <button
                    className='Btn-Manage'
                    onClick={() => router.push('/profile/CustomerManagement')}>
                    Customer management
                    <Image
                        width={7}
                        height={10}
                        className='w-[7px] h-[auto]'
                        src={'/dashboard/images/profile/NextIcon.png'}
                        alt='NextIcon'
                    />
                </button>
                <button
                    className='Btn-Manage'
                    onClick={() => router.push('/profile/CustomerManagement')}>
                    Managing the trading floor
                    <Image
                        width={7}
                        height={10}
                        className='w-[7px] h-[auto]'
                        src={'/dashboard/images/profile/NextIcon.png'}
                        alt='NextIcon'
                    />
                </button>

                <div className='flex flex-col items-center gap-0'>
                    <button className='Btn-Manage btn-parent' onClick={toggleContent}>
                        client
                    </button>
                    {isContentVisible && (
                        <div className='wrap-childs-Manage flex flex-col justify-center gap-4'>
                            <button
                                className='Btn-child-Manage'
                                onClick={() =>
                                    router.push('/profile/CustomerManagement')
                                }>
                                Customers need to buy the project
                                <Image
                                    width={7}
                                    height={10}
                                    className='w-[7px] h-[auto]'
                                    src={'/dashboard/images/profile/NextIcon.png'}
                                    alt='NextIcon'
                                />
                            </button>
                            <button
                                className='Btn-child-Manage'
                                onClick={() =>
                                    router.push('/profile/CustomerManagement')
                                }>
                                Customers need to buy - need to rent
                                <Image
                                    width={7}
                                    height={10}
                                    className='w-[7px] h-[auto]'
                                    src={'/dashboard/images/profile/NextIcon.png'}
                                    alt='NextIcon'
                                />
                            </button>
                            <button
                                className='Btn-child-Manage'
                                onClick={() =>
                                    router.push('/profile/CustomerManagement')
                                }>
                                Contact purchased
                                <Image
                                    width={7}
                                    height={10}
                                    className='w-[7px] h-[auto]'
                                    src={'/dashboard/images/profile/NextIcon.png'}
                                    alt='NextIcon'
                                />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Manage
