import MainLayout from '@/layouts/MainLayout'
import HeadBooking from '@/components/HeadBooking'
import Image from 'next/image'
export default function Home() {
    return (
        <MainLayout>
            <div className='w-full h-[321px] bg-headblock bg-no-repeat bg-cover bg-center'>
                <div className='container mx-auto h-full bg-opacity-35 relative'>
                    <div className='flex gap-3 h-full px-[115px]'>
                      {/* title & content */}
                        <div className='flex-[50%] h-full '>
                            <div className='flex flex-col py-6'>
                                <h2 className='h2 drop-shadow-title'>Utility and quality</h2>
                                <p className='font-medium max-w-[456px] leading-5'>
                                    Create a good living or working environment, with the
                                    right amenities and quality for you
                                </p>
                            </div>
                        </div>

                        {/* image headblock*/}
                        <div className='flex-[50%] h-full '>
                            <div className='h-full flex justify-center items-start'>
                                <Image
                                    src={'/images/home/img-content-headblock.png'}
                                    width={266}
                                    height={227}
                                    className='mt-2'
                                    alt='img-content-headblock.png'
                                />
                            </div>
                        </div>
                    </div>

                    {/* block booking */}
                    <HeadBooking />
                </div>
            </div>
        </MainLayout>
    )
}
