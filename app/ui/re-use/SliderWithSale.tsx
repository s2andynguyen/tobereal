import React from 'react'
import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'
import { hotelRoom } from '../model/hotelRoom'
import SwiperWrap from '@/components/SwiperWrap'
import CardWithSale from '../re-use/CardWithSale'
import NavigationCustom from '../swiper-slider/NavigationCustom'
import ButtonPrevSwiper from '../swiper-slider/ButtonPrevSwiper'
import ButtonNextSwiper from '../swiper-slider/ButtonNextSwiper'
import CardWidthSaleSlideSkeleton from '../skeletons/CardWidthSaleSlideSkeleton'
interface SliderWithSaleProps {
    pending: boolean
    bgColor?: string
    imageUrl: string
    bgWidth?: number
    bgHeight?: number
    imageStyle?: object
    hotDeal?:boolean
    listRoom: hotelRoom[]
}
const SliderWithSale: React.FC<SliderWithSaleProps> = ({
    pending,
    bgColor = 'bg-zinc-200',
    imageUrl,
    bgWidth,
    bgHeight,
    imageStyle,
    hotDeal,
    listRoom
}) => {
    return (
        <div className={`pt-[14px] pb-2 ${bgColor}`}>
            <div className='container mx-auto px-2 md:px-4 xl:px-14 flex flex-col lg:flex-row items-center '>
                <div className='flex items-center justify-start shrink-0 flex-grow lg:flex-[33.3333%] lg:max-w-[33.3333%]'
                >
                    <Image
                        src={imageUrl}
                        width={bgWidth ?? 232}
                        height={bgHeight ?? 218}
                        alt='frame-cheaper'
                        className={`object-contain mb-3 lg:mb-0 w-auto h-[100px] lg:w-auto lg:h-[218px] ${
                            hotDeal ? 'lg:w-auto lg:h-[198px] ml-[38px]': ''
                        }`}
                        style={imageStyle ?? {}}
                    />
                    {/* w-[120px] lg:w-[232px] lg:h-[218px] */}
                </div>
                <div className='shrink-0 flex-grow w-full lg:flex-[66.6667%] lg:max-w-[66.6667%]'>
                    {pending ? (
                        <CardWidthSaleSlideSkeleton sizeSlide='small' />
                    ) : (
                        <SwiperWrap sizeSlide='small'>
                            {listRoom.map((room, index) => (
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
                            <ButtonPrevSwiper />
                            <ButtonNextSwiper />
                        </SwiperWrap>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SliderWithSale
