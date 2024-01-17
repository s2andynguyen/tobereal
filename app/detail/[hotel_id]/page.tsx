import React, { useState } from 'react'
import { Metadata } from 'next'
import Image from 'next/image'

import MainLayout from '@/layouts/MainLayout'
import DetailBreadcrumb from '../_ui/DetailBreadcrumb'
import ImageHighlight from '../_ui/ImageHighlight'
import HeartItemAction from '../_ui/HeartItemAction'
import DetailProperty from '../_ui/DetailProperty'
import AboutHotel from '../_ui/AboutHotel'
import { renderStart } from '@/lib/render'
import OtherAccommodation from '../_ui/OtherAccommodation'


type Props = {
    params: {
        hotel_id: string
    }
}
// can use async to get data to generate
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const head = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hotel VN - ${params.hotel_id}`)
        }, 1000)
    })
    return {
        title: `${head}`
    }
}
const ListHotelImageDemo = [
    '/images/detail-hotel/room-demo.jpg',
    '/images/detail-hotel/room-demo.jpg',
    '/images/detail-hotel/room-demo.jpg',
    '/images/detail-hotel/room-demo.jpg',
    '/images/detail-hotel/room-demo.jpg',
    '/images/detail-hotel/room-demo.jpg',
    '/images/detail-hotel/room-demo.jpg'
]
const listUnitFacillities = [
    'Air Conditioner (AC)',
    'Blankets',
    'Complimentary Bottled Water',
    'Iron',
    'Mirrors',
    'Slippers',
    'Telephone',
    'Wardrobe/ Multi Purpose Hanger',
    'Bathrooms',
    'Cable TV',
    'Concierge',
    'Desks & Chairs',
    'Ironing Board',
    'Shower',
    'Sofa',
    'Toiletries',
    'Water heater',
    'Outdoor Pools',
    'Bathtub',
    'City View',
    'Deposit Box',
    'Electric Kettles',
    'Laundry',
    'Sink',
    'TV',
    'Towels',
    'Garden'
]
const listAbout = [
    {
        title: 'Tentang Hotel Gran Melia Jakarta',
        content: [
            'Kamar Tidur Studio: Bersantailah di studio yang luas dan didekorasi dengan penuh cita rasa dengan perabotan modern.',
            '1 Kamar Mandi: Kamar mandi lengkap dengan fasilitas kelas atas untuk kenyamanan dan kemudahan Anda.',
            'King Bed (180x200) 1 Qty'
        ]
    },
    {
        title: 'Fasilitas hotel',
        content: [
            'Keamanan 24 Jam: Yakinlah dengan keamanan sepanjang waktu yang memastikan keselamatan Anda.',
            'Kolam Renang: Berenanglah di kolam renang setelah hari yang melelahkan.',
            'Pusat Kebugaran: Pertahankan rutinitas kebugaran Anda dengan peralatan canggih.',
            'Bersantap di Tempat: Nikmati masakan lezat di restoran hotel.',
            'Pusat Bisnis: Fasilitas yang nyaman untuk pelancong bisnis.',
            'Spa dan Pusat Kesehatan: Manjakan diri Anda dengan perawatan spa yang menenangkan.',
            'Antar-Jemput Bandara: Akses mudah ke layanan transportasi.'
        ]
    },
    {
        title: 'Rekomendasi Rekreasi dan Kuliner',
        content: [
            'Plaza Festival (0,8 km, sekitar 5 menit): Belanja fashion, elektronik, dan nikmati berbagai pilihan bersantap.',
            'Setiabudi One (1 km, sekitar 5 menit): Tujuan gaya hidup dan bersantap yang dinamis.',
            'Epicentrum Walk (1,4 km, sekitar 10 menit): Temukan pilihan bersantap, berbelanja, dan hiburan.',
            'Kota Kasablanka (2 km, sekitar 15 menit): Mal luas yang menampilkan beragam pilihan ritel dan tempat makan.'
        ]
    },
    {
        title: 'Landmark',
        content: [
            'Kuningan City (1,5 km, sekitar 10 menit): Pusat perbelanjaan terkemuka di kawasan ini.',
            'Taman Menteng (2.8 km, sekitar 15 menit): Taman kota yang tenang, cocok untuk berjalan-jalan santai.',
            'Museum Satriamandala (3,7 km, sekitar 20 menit): Jelajahi sejarah dan warisan militer Indonesia.'
        ]
    },
    {
        title: 'Kendaraan umum',
        content: [
            'Rasakan akses mudah ke pusat transportasi terdekat:',
            'Halte Busway Gatot Subroto (0.8 km, sekitar 5 menit): Akses transportasi umum.',
            'Stasiun Kereta Api Sudirman (2,5 km, sekitar 15 menit): Stasiun kereta api pusat yang menghubungkan Anda ke berbagai tujuan.',
            'Bandara Internasional Halim Perdanakusuma (14,5 km, sekitar 30 menit): Bandara terdekat dengan penerbangan domestik.'
        ]
    }
]

function DetailHotel() {
    return (
        <MainLayout>
            <div className='container mx-auto min-h-[1800px] font-montserrat pb-20'>
                <div className='px-16 pt-10 pb-20'>
                    {/* Breadcrum Render */}
                    <DetailBreadcrumb place='Jakarta' hotel='Gran Melia Jakarta' />

                    {/* Group Image */}
                    <div className='mt-5 mb-3'>
                        <ImageHighlight listImage={ListHotelImageDemo} />
                    </div>

                    <div className='flex'>
                        {/* col left */}
                        <div className='max-w-[65%] basis-[65%] w-[65%] min-h-20 mb-6'>
                            {/* title */}
                            <div className='flex items-center gap-[30px]'>
                                <h2>Gran Melia Hotel Jakarta - Jakarta</h2>
                                <div className='h-14 px-2 w-32 text-center font-bold font-montserrat leading-[28px] py-1 pr-3 bg-primary rounded-[5px]'>
                                    Hotel Residence 🏨
                                </div>
                                {/* Heart icon */}
                                <HeartItemAction liked={true} />
                            </div>
                            {/* rating */}
                            <div className='flex item-center gap-2'>
                                {renderStart(4, 24)}
                            </div>

                            {/* address */}
                            <div className='flex items-center gap-5 mb-[30px]'>
                                <p className='text-[#909090] font-montserrat font-bold text-[10px]'>
                                    Jl. HR Rasuna Said Kav X-0 Kuningan, Setiabudi, South
                                    Jakarta 12950 - Property ID: C3D3AEC8A
                                </p>
                                <span>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='23'
                                        height='28'
                                        viewBox='0 0 23 28'
                                        fill='none'>
                                        <g clipPath='url(#clip0_49_62)'>
                                            <path
                                                fillRule='evenodd'
                                                clipRule='evenodd'
                                                d='M7.84 24.8L14.94 27.16V15.46C14.72 15.79 14.61 16.11 14.4 16.32V26.41L8.38 24.49V13.53C8.16 13.2 8.05 12.9 7.84 12.57V24.8ZM22.78 24.8L15.79 27.16V14.08C15.89 13.75 16.12 13.43 16.22 13.1V26.53L22.34 24.49V7.74L18.15 9.13C18.25 8.92 18.25 8.7 18.36 8.5L22.77 6.99V24.8H22.78ZM12.15 17.5C12.68 16.75 13.86 14.83 14.94 12.67C16.34 10.1 17.62 7.31 17.62 5.9V5.8C17.62 5.15 17.52 4.41 17.19 3.86C16.98 3.11 16.55 2.58 16.01 2.04C15.58 1.61 14.94 1.17 14.3 0.96C13.65 0.63 12.89 0.53 12.15 0.53C11.5 0.53 10.75 0.63 10.1 0.96C9.45 1.17 8.81 1.61 8.38 2.04C7.84 2.57 7.42 3.1 7.2 3.86C6.87 4.41 6.77 5.14 6.77 5.9C6.77 7.3 8.05 10.1 9.45 12.67C10.52 14.83 11.71 16.75 12.15 17.5ZM13.43 6.01C13.11 5.7 12.68 5.48 12.15 5.48C11.71 5.48 11.28 5.7 10.97 6.01C10.64 6.34 10.42 6.76 10.42 7.19C10.42 7.74 10.64 8.17 10.97 8.49C11.29 8.82 11.71 8.92 12.15 8.92C12.68 8.92 13.12 8.82 13.43 8.49C13.76 8.16 13.97 7.74 13.97 7.19C13.97 6.76 13.76 6.33 13.43 6.01ZM12.15 5.05C12.78 5.05 13.33 5.27 13.76 5.7C14.19 6.13 14.4 6.66 14.4 7.19C14.4 7.84 14.19 8.37 13.76 8.82C13.33 9.13 12.78 9.45 12.15 9.45C11.6 9.45 10.97 9.12 10.64 8.82C10.2 8.37 9.99 7.84 9.99 7.19C9.99 6.66 10.2 6.13 10.64 5.7C10.97 5.27 11.6 5.05 12.15 5.05ZM18.16 5.91C18.16 9.03 12.47 18.04 12.47 18.16H12.36L12.15 18.49L12.04 18.16H11.93C11.83 17.94 6.23 9.03 6.23 5.91C6.23 5.05 6.34 4.3 6.66 3.67C6.98 2.92 7.42 2.27 7.95 1.73C8.49 1.18 9.23 0.75 9.89 0.45C10.64 0.23 11.39 0 12.15 0C13.01 0 13.76 0.22 14.51 0.45C15.15 0.76 15.9 1.19 16.44 1.73C16.98 2.26 17.41 2.91 17.73 3.67C17.94 4.3 18.16 4.95 18.16 5.59V5.92V5.91ZM7.09 24.92L0 27.27V9.45L5.69 7.63C5.79 7.73 5.79 7.94 5.9 8.06L0.53 9.88V26.63L6.55 24.59V9.88C6.76 10.31 6.87 10.63 7.08 11.06V24.92H7.09Z'
                                                fill='black'
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_49_62'>
                                                <rect
                                                    width='22.79'
                                                    height='27.27'
                                                    fill='white'
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                            </div>

                            {/* description */}
                            <p className='py-4 max-w-[567px] text-[#909090] font-montserrat font-bold text-[10px] border-t border-b  border-[#e3e3e3]'>
                                This accommodation is rented on a monthly basis and
                                includes: 1. Maintenance fee 2. Electricity & Water 3.
                                Internet 4. Daily Housekeeping 5. Laundry 2 free clothes /
                                day, not accumulative, does not include dry cleaning and
                                ironing services. (View more)
                            </p>

                            {/* property */}
                            <DetailProperty />

                            {/* Unit Facilities */}
                            <div>
                                <p className='text-[10px] font-bold font-montserrat mb-2'>
                                    Unit Facilities
                                </p>
                                <div className='flex flex-wrap '>
                                    {listUnitFacillities.map((facillity, index) => (
                                        <div className='basis-[28%] self-center' key={index}>
                                            <div className='pr-10 flex items-center justify-start'>
                                                <svg
                                                    className='mr-[10px]'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    width='14'
                                                    height='13'
                                                    viewBox='0 0 14 13'
                                                    fill='none'>
                                                    <path
                                                        d='M2 6L6 10L12 2'
                                                        stroke='#00FF47'
                                                        strokeWidth='3'
                                                        strokeLinecap='round'
                                                    />
                                                </svg>
                                                <p className='text-[10px] font-medium font-montserrat leading-4'>
                                                    {facillity}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className='h-[60px] font-bold pl-3 border-t border-b border-[#e3e3e3] mb-6 flex items-center mt-[30px]'>
                                Additional Information
                            </p>

                            {/* Q&A - Discussion Of This Property */}
                            <div className='max-w-[500px]'>
                                <p className='pl-3 font-bold mb-4'>Q&A - Discussion Of This Property</p>
                                <input
                                    type='text'
                                    placeholder='Name'
                                    className='h-[30px] pl-6 py-2 max-w-[480px] w-[480px] rounded-[5px] border border-[#dcdcdc] mb-4'
                                />
                                <div className='max-w-[480px]'>
                                    <textarea
                                        placeholder='Content'
                                        className='h-[50px] pl-6 py-2 w-full rounded-[5px] border border-[#dcdcdc]'
                                    />
                                </div>
                                <button className='h-12 w-[150px] rounded-[30px] py-4 px-8 text-[13px] font-medium text-center bg-gradient-right mt-4'>
                                    Send
                                </button>
                            </div>

                            {/* Group about Hotel */}
                            <div className='pl-3 pt-8'>
                                <AboutHotel
                                    description='Hotel Gran Melia Jakarta menawarkan penginapan mewah dan nyaman, cocok bagi mereka yang mencari pengalaman canggih di Jakarta. Baik Anda berada di sini untuk keperluan bisnis maupun liburan, Anda akan menemukan properti ini sebagai oase yang nyaman di tengah suasana kota yang semarak.'
                                    listAbout={listAbout}
                                />
                            </div>

                            
                        </div>

                        {/* col right */}
                        <div className='max-w-[35%] basis-[35%] w-[35%] h-20 bg-blue-200'></div>
                    </div>


                    {/* Other Accommodation Recommendations */}
                    <h2 className='text-2xl font-bold text-center'>Other Accommodation Recommendations</h2>
                    <OtherAccommodation />
                </div>
            </div>
        </MainLayout>
    )
}

export default DetailHotel
