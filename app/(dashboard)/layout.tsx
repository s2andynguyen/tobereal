import React from 'react'
import { Metadata } from 'next'
import LeftSidebar from './_ui/layout/LeftSidebar'
import HeadingNavbar from './_ui/layout/HeadingNavbar'
export const metadata: Metadata = {
    title: 'My Profile',
    description: 'Use profile - Smart Real'
}

const LayoutDashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <HeadingNavbar />
        <LeftSidebar />
        {children}
    </div>
  )
}

export default LayoutDashboard