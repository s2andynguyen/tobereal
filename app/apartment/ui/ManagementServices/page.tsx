import './style.css'
function ManagementServices({data}) {
    return (
        <div className='wrap-Managements'>
            <img src={data?.img} alt='' />
            <h3 className='name-management'>{data?.name}</h3>
            <p className='title-management'>{data?.title}</p>
        </div>
    )
}

export default ManagementServices
