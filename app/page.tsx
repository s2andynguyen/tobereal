import MainLayout from '@/layouts/MainLayout'
import HeadBooking from '@/components/HeadBooking'
import Image from 'next/image'
export default function Home() {
    return (
        <MainLayout>
            <div className='w-full h-60 sm:h-[321px] bg-headblock bg-no-repeat bg-cover bg-left-top md:bg-center'>
                <div className='container mx-auto h-full bg-opacity-35 relative'>
                    <div className='flex gap-3 h-full px-5 md:px-10 lg:px-[115px]'>
                      {/* title & content */}
                        <div className='flex-[65%] lg:flex-[50%] h-full '>
                            <div className='flex flex-col md:py-6 pt-10'>
                                <h2 className='h2 drop-shadow-title'>Utility and quality</h2>
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
                        {/* <p className='sm:hidden font-medium max-w-[456px] leading-5'>
                            Create a good living or working environment, with the
                            right amenities and quality for you
                        </p> */}

                    {/* block booking */}
                    <HeadBooking />
                </div>
            </div>
            {/* content */}
            <div className='h-full bg-zinc-900 bg-opacity-45 pt-28'>
                        s12
            </div>
        </MainLayout>
    )
}
