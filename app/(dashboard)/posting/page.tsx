import React from 'react'
import DashboardLayout from '../_ui/layout/DashboardLayout'
import { IoIosArrowDown } from "react-icons/io";
import './_style/posting-page.css'
// import PostCardVip from './_ui/card/PostCardVip';
import PostCardVipSlide from './_ui/slide/PostCardVipSlide';
import { dataCardVip } from './_model/dataPosting';
const PostingPage = () => {
  return (
    <DashboardLayout title='Price list posted in news'>
      <div className='container mx-auto '>      
        <div className='bg-zinc-100 min-h-[500px] pl-5 xl:pl-8 pt-10 xl:pt-[90px]'>
            {/* Item option */}
            <div className='max-w-[960px] h-[57px] w-full relative mb-[14px]'>
              <div className='w-full h-full flex justify-between items-center px-6 border border-primary/50 rounded-[4px] bg-white 
              cursor-pointer hover:shadow-md transition duration-200 group absolute top-0 left-0 z-[1]'>
                <p>Benefits and annual account maintenance fees</p>
                <IoIosArrowDown size={20} className='group-hover:drop-shadow-md'/>
              </div>

              {/* show info Benefits and annual account maintenance fees */}
              <div className='show-card__shadow absolute top-0 left-0 w-full h-[440px] pt-[57px] bg-blue-200 rounded-b-[4px] px-6'> 
                <PostCardVipSlide list={dataCardVip} />
              </div>
            </div>



        </div>
      </div>
    </DashboardLayout>
  )
}

export default PostingPage