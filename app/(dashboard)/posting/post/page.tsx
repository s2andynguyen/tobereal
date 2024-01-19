'use client'
import './styles.css'
import React, { useState } from 'react'
import Image from 'next/image';
import Sell from '../sell/page';
import Least from '../least/page';
import Need from '../need/page';


const TabContent1 = () => <div><Sell /></div>;
const TabContent2 = () => <div><Least /></div>;
const TabContent3 = () => <div><Need /></div>;

const PostingPage = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tab: React.SetStateAction<number>) => {
    setActiveTab(tab);
  };

  return (
    <div className='Posting'>
      <div className='Menu'>
        <div className="menu_li" onClick={() => handleTabClick(1)}>
          <p>Sell</p>
          <Image
            src="/dashboard/images/posting/img/Sell.png"
            alt=""
            className='w-[40px] h-[38px]'
            width={40}
            height={38} />
        </div>
        <div className="menu_li" onClick={() => handleTabClick(2)}>
          <p>Lease</p>
          <Image
            src="/dashboard/images/posting/img/Lease.png"
            alt=""
            className='w-[40px] h-[38px]'
            width={40}
            height={38} />
        </div>
        <div className="menu_li" onClick={() => handleTabClick(3)}>
          <p>Need to rent, Need to buy</p>
          <Image
            src="/dashboard/images/posting/img/Need_to.png"
            alt=""
            className='w-[40px] h-[38px]'
            width={40}
            height={38} />
        </div>
      </div>
      <div className="content">
        {activeTab === 1 && <TabContent1 />}
        {activeTab === 2 && <TabContent2 />}
        {activeTab === 3 && <TabContent3 />}
      </div>
    </div>
  );
};
export default PostingPage