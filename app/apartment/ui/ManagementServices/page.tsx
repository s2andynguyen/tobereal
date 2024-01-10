'use client'
import './style.css'
function ManagementServices({ data }) {
    return (
        <div className='wrap-Managements p-5 justify-between lg:p-12'>
            <img className='max-h-[162px] min-w-[175px]' src={data?.img} alt='' />
            <h3 className='name-management'>{data?.name}</h3>
            <p className='title-management'>{data?.title}</p>
        </div>
    )
}

export default ManagementServices
