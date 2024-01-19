import React from 'react'
import LeftSidebar from './LeftSidebar'
import HeadingNavbar from './HeadingNavbar'
import { popins } from '@/assets/styles/fonts' 
import '../layoutstyle.css'
type Props = {
    children: React.ReactNode
    title:string
}
const DashboardLayout = ({title, children}:Props) => {
  return (
    
    <div className={`${popins.className}`}>
        <LeftSidebar />
        <HeadingNavbar title={title}/>
        <div className='pl-0 sm:pl-[200px] md:pl-[268px] sm:pt-[80px] xl:pt-32 relative'>
            <div className='dashboard-playout__bg'></div>
            <div className='dashboard-playout__page'>{children}</div>
        </div>
    </div>
  )
}

export default DashboardLayout