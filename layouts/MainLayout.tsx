'use client'
import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
function MainLayout({ children }: { children: React.ReactNode }) {
    const [isShowSidebar, setIsShowSidebar] = useState(false)
    const handleSetSidebar = () => {
        setIsShowSidebar(!isShowSidebar);
    }
    return (
        <div className='min-h-[2000px]'>
            <Header showSidebar={handleSetSidebar} />
            <Sidebar isShow={isShowSidebar} hiddenSidebar={handleSetSidebar}/>
            {children}
        </div>
    )
}

export default MainLayout
