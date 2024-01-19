import React from 'react'
import DashboardLayout from '../_ui/layout/DashboardLayout'
// import PostCardVip from './_ui/card/PostCardVip';
import PostCardVipSlide from './_ui/slide/PostCardVipSlide';
import { dataCardVip, dataCardPackage, dataOnlineTrading } from './_model/dataPosting';
import PostingPackageSlide from './_ui/slide/PostingPackageSlide';
import TypeOfNewsSlide from './_ui/slide/TypeOfNewsSlide';
import OnlineTrading from './_ui/slide/OnlineTrading';
import PostButton from './_ui/PostButton';
const PostingPage = () => {
  return (
    <DashboardLayout title='Price list posted in news'>
      <div className='container mx-auto'>
        <div className='pl-5 xl:pl-8 pt-10 xl:pt-[60px] pb-[60px] pr-5'>
          {/* Benefits and annual account maintenance fees */}
          <PostCardVipSlide list={dataCardVip} />

          {/* Posting package */}
          <PostingPackageSlide list={dataCardPackage} />

          {/* Cost for each type of news */}
          <TypeOfNewsSlide list={dataCardVip} />

          {/* Create an online trading platform */}
          <OnlineTrading list={dataOnlineTrading} />

          <div className='mt-[80px]'><PostButton /></div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default PostingPage