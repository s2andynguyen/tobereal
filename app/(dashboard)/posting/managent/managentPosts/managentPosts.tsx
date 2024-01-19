import './style.css'

function ManamentPosts({ data }: { data: any }) {
    return (
       
       
       <div className='Gr-ManamentPosts flex items-center justify-start pl-7 gap-14 w-[710px] h-[76.53px] bg-gradient-to-b from-yellow-400 to-white rounded shadow'>
            <p className='text-black text-2xl font-normal'>{data?.quanlity}</p>
            <p className='text-black text-2xl font-normal'>{data?.namePost}</p>
        </div>
    )
}

export default ManamentPosts
