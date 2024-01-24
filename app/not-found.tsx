import React from 'react'
import MainLayout from '@/layouts/MainLayout'
import HeadingSlideBlock from '@/components/HeadingSlideBlock'
function NotFound() {
    return (
        <MainLayout>
            {/* Heading block with filter */}
            <div className='h-[70vh] flex justify-center items-center'>
                <p className='text-[38px] font-bold drop-shadow-md text-yellow-400'>
                    404 | Page not found
                </p>
            </div>
        </MainLayout>
    )
}

export default NotFound
