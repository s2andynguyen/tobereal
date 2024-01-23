import React from 'react'
import Footer from './Footer'
import WrapperHeader from './WrapperHeader'
function MainLayout({ children }: { children: React.ReactNode }) {
    
    return (
        <div className=''>
            <WrapperHeader />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout
