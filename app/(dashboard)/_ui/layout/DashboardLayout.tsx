'use client'
import React, { useState } from 'react'
import LeftSidebar from './LeftSidebar'
import HeadingNavbar from './HeadingNavbar'
import { popins } from '@/assets/styles/fonts'
import '../layoutstyle.css'
type Props = {
    children: React.ReactNode
    title: string
}
const DashboardLayout = ({ title, children }: Props) => {
    const [isShowSidebar, setIsShowSidebar] = useState(false)
    const handleToggleSidebar = () => {
        setIsShowSidebar(!isShowSidebar)
    }
    return (
        <div className={`${popins.className}`}>
            <HeadingNavbar title={title} isShowSidebar={isShowSidebar} toggleSidebar={handleToggleSidebar}/>
            
            <LeftSidebar isShowSidebar={isShowSidebar} toggleSidebar={handleToggleSidebar}/>
            
            <div className={`pl-0 xl:pl-[var(--leftsidebar-width)] pt-[var(--navbar-height)] relative transition-all duration-300 ${
                isShowSidebar ? 'lg:pl-[var(--leftsidebar-width)]' : ''}`}
            >
                <div className='dashboard-playout__bg'></div>
                <div className='dashboard-playout__page'>{children}</div>
            </div>

            {/* Layout sidebar*/}
            {isShowSidebar && <div className={`block lg:hidden fixed top-0 left-0 bottom-0 right-0 bg-zinc-600/50 z-[3] transition-all duration-300 ${
                isShowSidebar ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={handleToggleSidebar}
            ></div>}
        </div>
    )
}

export default DashboardLayout
