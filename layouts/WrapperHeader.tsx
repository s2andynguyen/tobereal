'use client'
import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const WrapperHeader = ({fixedOnMbile}:{fixedOnMbile ?: boolean}) => {
    const [isShowSidebar, setIsShowSidebar] = useState(false)
    const handleSetSidebar = () => {
        setIsShowSidebar(!isShowSidebar);
    }
    return (
        <div>
            <Header showSidebar={handleSetSidebar}  fixedOnMbile={fixedOnMbile}/>
            <Sidebar isShow={isShowSidebar} hiddenSidebar={handleSetSidebar} />
        </div>
    )
}

export default WrapperHeader
