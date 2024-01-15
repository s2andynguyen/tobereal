import HeadingSlideBlock from '@/components/HeadingSlideBlock'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'

function Voucher() {
  return (
    <MainLayout > 
         {/* Heading block with filter */}
         <HeadingSlideBlock />
        <div className='h-[800px]'>Voucher</div>

    </MainLayout>
  )
}

export default Voucher