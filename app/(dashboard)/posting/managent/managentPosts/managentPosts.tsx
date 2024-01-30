function ManamentPosts({ data }: { data: any }) {
    return (
        <div className='Gr-ManamentPosts flex items-center justify-start pl-7 gap-7 md:gap-14 h-[36px] w-full max-w-[710px] md:h-[76.53px] bg-gradient-to-b from-yellow-400 to-white rounded shadow cursor-pointer hover:shadow-lg'>
            <p className='text-black md:text-2xl font-normal text-ml'>{data?.quanlity}</p>
            <p className='text-black md:text-2xl font-normal text-ml'>{data?.namePost}</p>
        </div>
    )
}

export default ManamentPosts
