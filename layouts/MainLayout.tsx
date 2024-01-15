'use client'
import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
function MainLayout({ children }: { children: React.ReactNode }) {
    const [isShowSidebar, setIsShowSidebar] = useState(false)
    const handleSetSidebar = () => {
        setIsShowSidebar(!isShowSidebar);
    }
    return (
        <div className=''>
            <Header showSidebar={handleSetSidebar} />
            <Sidebar isShow={isShowSidebar} hiddenSidebar={handleSetSidebar}/>
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout
