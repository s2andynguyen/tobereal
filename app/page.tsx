'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import MainLayout from '@/layouts/MainLayout'
import HeadBooking from '@/components/HeadBooking'

import HotelResidence from './ui/HotelResidence'
import RealEstateSale from './ui/RealEstateSale'
import HotelLioStay from './ui/HotelLioStay'
import MonthlyCheaperPrice from './ui/MonthlyCheaperPrice'
import FindBestUnit from './ui/FindBestUnit'
import PremiumRoom from './ui/PremiumRoom'
import FindApartment from './ui/FindApartment'
import WeeklyHotDeals from './ui/WeeklyHotDeals'
import BestSellingApartment from './ui/BestSellingApartment'
import RecommendedApartments from './ui/RecommendedApartments'
import RecommendedHouse from './ui/RecommendedHouse'
import LookingForPlace from './ui/LookingForPlace'
import OthersBottomCard from './ui/OthersBottomCard'

export default function Home() {
    const [toggleTab, setToggleTab] = useState('buy')
    const handleSetToggleTab = (value: string) => {
        setToggleTab(value)
    }
    return (
        <MainLayout>
            <div
                className={`w-full h-60 lg:mb-32 sm:h-[321px] bg-headblock bg-no-repeat bg-cover bg-left-top md:bg-center ${
                    toggleTab === 'rent' ? 'sm:mb-40 mb-72' : 'sm:mb-20 mb-[180px]'
                }`}>
                <div className='container mx-auto h-full bg-opacity-35 relative'>
                    <div className='flex gap-3 h-full px-5 md:px-10 lg:px-[115px]'>
                        {/* title & content */}
                        <div className='flex-[65%] lg:flex-[50%] h-full '>
                            <div className='flex flex-col md:py-6 pt-10'>
                                <h2 className='h2 drop-shadow-title'>
                                    Utility and quality
                                </h2>
                                <p className='font-medium max-w-[456px] leading-5 text-[sm] md:text-[16px]'>
                                    Create a good living or working environment, with the
                                    right amenities and quality for you
                                </p>
                            </div>
                        </div>

                        {/* image headblock*/}
                        <div className='flex-[35%] lg:flex-[50%] h-full '>
                            <div className='h-full flex justify-center items-start'>
                                <Image
                                    src={'/images/home/img-content-headblock.png'}
                                    width={266}
                                    height={227}
                                    className=' md:mt-2 mt-8 '
                                    alt='img-content-headblock.png'
                                />
                            </div>
                        </div>
                    </div>
                    {/* block booking */}
                    <HeadBooking
                        toggleTab={toggleTab}
                        setToggleTab={handleSetToggleTab}
                    />
                </div>
            </div>

            {/* content */}
            <div className='h-full  pb-16'>
                {/* Hotel Residence */}
                <HotelResidence />

                {/* Real Estate Sales */}
                <RealEstateSale />

                {/* Stay with Thematic and Instagram Ambience at LioStay */}
                <HotelLioStay />

                {/* Stay Monthly For Cheaper Prices */}
                <MonthlyCheaperPrice />

                {/* Find Best Units for Staycation */}
                <FindBestUnit />

                {/* Premium */}
                <PremiumRoom />

                {/* Find Apartment that fits your budget! */}
                <FindApartment />

                {/* Weekly Hot Deals */}
                <WeeklyHotDeals />

                {/* Best Selling Apartment Buildings  */}
                <BestSellingApartment />

                {/* Recommended Apartments */}
                <RecommendedApartments />

                {/* Recommended Houses 🏠 */}
                <RecommendedHouse />


                {/* Looking for a place to stay */}
                <LookingForPlace />

                {/* 3 Benefits to Stay at Apartment */}
                <OthersBottomCard />
            </div>
        </MainLayout>
    )
}
