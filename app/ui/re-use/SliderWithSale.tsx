import React from 'react'
import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'
import { dataHotel } from '../model/hotelRoom'
import SwiperWrap from '@/components/SwiperWrap'
import CardWithSale from '../re-use/CardWithSale'
import NavigationCustom from '../swiper-slider/NavigationCustom'
import CardWidthSaleSlideSkeleton from '../skeletons/CardWidthSaleSlideSkeleton'
interface SliderWithSaleProps {
    pending: boolean
    bgColor?: string
    imageUrl: string
    bgWidth?: number
    bgHeight?: number
}
const SliderWithSale: React.FC<SliderWithSaleProps> = ({
    pending,
    bgColor = 'bg-zinc-200',
    imageUrl,
    bgWidth,
    bgHeight
}) => {
    return (
        <div className={`pt-5 pb-10 ${bgColor}`}>
            <div className='container h-full mx-auto px-2 md:px-4 xl:px-14 flex flex-col lg:flex-row items-center '>
                <div className='flex h-full items-center justify-center shrink-0 flex-grow lg:flex-[33.3333%] lg:max-w-[33.3333%]'>
                    <Image
                        src={imageUrl}
                        width={bgWidth ?? 232}
                        height={bgHeight ?? 218}
                        alt='frame-cheaper'
                        className=' bg-cover object-contain'
                    />
                    {/* w-[120px] lg:w-[232px] lg:h-[218px] */}
                </div>
                <div className='shrink-0 flex-grow w-full lg:flex-[66.6667%] lg:max-w-[66.6667%] h-[214px]'>
                    {pending ? (
                        <CardWidthSaleSlideSkeleton sizeSlide='small' />
                    ) : (
                        <SwiperWrap sizeSlide='small'>
                            {dataHotel.map((room, index) => (
                                <SwiperSlide key={index} className='h-[220px]'>
                                    <CardWithSale
                                        imageUrl={room.imageUrl}
                                        title={room.title}
                                        oldprice={room.oldprice}
                                        place={room.place}
                                        price={room.price}
                                        discount={room.discount}
                                    />
                                </SwiperSlide>
                            ))}
                            <NavigationCustom />
                        </SwiperWrap>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SliderWithSale
