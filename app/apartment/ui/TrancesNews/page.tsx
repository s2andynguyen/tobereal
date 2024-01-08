import './style.css'

function TrancesNews({ data }) {
    return (
        <div className='wrap-infomations'>
            <img src={data?.img} alt='' />
            <div className='content-news'>
                <p className='text-news'>{data?.news}</p>
                <p className='text-news title-news'>{data?.title}</p>
            </div>
        </div>
    )
}

export default TrancesNews
