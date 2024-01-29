'use client'
import './style.css'
import RegisterNow from '@/components/RegisterNow/RegisterNow'
import Image from 'next/image'

// fetch data
import { JENIS_apartemen } from './Jenis'
import ShowJenisGr from './ui/ShowJenisGr/ShowJenisGr'
import { Difference } from './Differences'
import TableDifference from './ui/TableDifference/TableDifference'
import MainLayout from '@/layouts/MainLayout'
import { useRouter } from 'next/navigation'
//
function Property() {
    const router = useRouter()

    return (
        <MainLayout>
            <div className='wrapper bg-white'>
                <div className='home-wrap h-[650px] md:h-[450px]'>
                    <div className='Home-Solution container px-5 flex-col md:flex-row gap-16'>
                        <div className='title-Home text-center md:text-left'>
                            Chect out All ongoing promo
                        </div>
                        <RegisterNow />
                    </div>
                </div>
                <div className='Jenis-wrap container p-6 md:p-12 flex flex-col gap-10'>
                    <h3 className='title-reuse text-center md:text-left'>
                        Apa Jenis Unit Anda?
                    </h3>
                    <div className='Apartemen-Jenis-Gr flex flex-col justify-center gap-7 lg:flex-row'>
                        {JENIS_apartemen?.map((card) => (
                            <ShowJenisGr data={card} key={card?.id} />
                        ))}
                    </div>
                </div>
                <div className='Wrap-Service-Options container p-6 md:p-12 flex flex-col gap-10'>
                    <h3 className='title-reuse text-center md:text-left'>
                        Our Service Options
                    </h3>
                    <div className='PropertyManagement-wrap flex items-center flex-col-reverse gap-10 w-full justify-between lg:flex-row'>
                        <Image
                            width={306}
                            height={304}
                            className='w-[412px] h-[auto]'
                            src={'/images/property/SerOptions.png'}
                            alt=''
                        />
                        <div className='informations-PM flex flex-col justify-between max-w-[493px] gap-10 md:gap-20 items-center lg:items-start '>
                            <div className='content-PM flex flex-col gap-5 '>
                                <h4 className='title-reuse text-center lg:text-left'>
                                    Property Management
                                </h4>
                                <p className='text-PM text-center lg:text-left'>
                                    Professional management for your unit. Without any
                                    hassle, fully furnished and standardized. Can be
                                    rented daily, monthly and annually.
                                </p>
                            </div>
                            <button
                                className='seeMore-btn wrap-btn'
                                onClick={() => router.push('/apartment')}>
                                See More ➔
                            </button>
                        </div>
                    </div>
                    <div className='PropertyManagement-wrap flex items-center flex-col gap-10 w-full justify-between lg:flex-row'>
                        <div className='informations-PM flex flex-col justify-between max-w-[493px] gap-10 md:gap-20 items-center lg:items-start '>
                            <div className='content-PM flex flex-col gap-5 '>
                                <h4 className='title-reuse text-center lg:text-left'>
                                    S HOME Realty
                                </h4>
                                <p className='text-PM text-center lg:text-left'>
                                    Professional management for your unit. Without any
                                    hassle, fully furnished and standardized. Can be
                                    rented daily, monthly and annually.
                                </p>
                            </div>
                            <button
                                className='seeMore-btn wrap-btn'
                                onClick={() => router.push('/promotion')}>
                                See More ➔
                            </button>
                        </div>
                        <Image
                            width={412}
                            height={277}
                            className='w-[412px] h-[auto]'
                            src={'/images/property/RealtyOptions.png'}
                            alt='RealtyOptions img'
                        />
                    </div>
                </div>
                <div className='p-6 md:p-12 '>
                    <div className=' wrap-Differences container '>
                        <div className='TableDifference-wrap'>
                            <button className='Difference-btn text-center md:text-left'>
                                Difference between Apartment Management by S HOME
                                <br />
                                and Home Marketing by S HOME
                            </button>

                            <div className='wrap-Difference-table flex flex-col items-center pt-4 '>
                                {Difference?.map((card) => (
                                    <TableDifference data={card} key={card?.id} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='wrap-houses container p-6 md:p-12'>
                    <div className='House-wrap flex items-center flex-col gap-10 w-full justify-between pb-36 lg:flex-row'>
                        <div className='informations-House flex flex-col justify-between max-w-[493px] gap-10 md:gap-20 items-center lg:items-start '>
                            <div className='content-House flex flex-col gap-5 '>
                                <h4 className='title-reuse text-center lg:text-left'>
                                    Is your apartment and house empty?
                                </h4>
                                <p className='text-PM text-center lg:text-left'>
                                    Dont win it, its better to make money. Come on! Just
                                    hand it over to ....................!
                                </p>
                            </div>
                            <button className='registerNow-btn wrap-btn'>
                                REGISTER NOW ➔
                            </button>
                        </div>
                        <Image
                            width={306}
                            height={304}
                            className='w-[306px] h-[auto]'
                            src={'/images/property/money.png'}
                            alt='money'
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Property
