'use client'
import './styles.css'
import React, { useState, useEffect } from 'react'
import Image from 'next/image';

const TabContent1 = () => <div>Content of Tab 1</div>;
const TabContent2 = () => <div>Content of Tab 2</div>;
const TabContent3 = () => <div>Content of Tab 3</div>;

const PostingPage = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber: React.SetStateAction<number>) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className='Posting'>
      <div className="background">
        <Image
          src="/dashboard/images/posting/img/Backround.png"
          alt="background"
          width={1000}
          height={0}
        />
      </div>
      <div className='Menu'>
        <button className='' onClick={() => handleTabClick(1)}>Sell</button>
        <button onClick={() => handleTabClick(2)}>Lease</button>
        <button onClick={() => handleTabClick(3)}>Need to rent, Need to buy</button>
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