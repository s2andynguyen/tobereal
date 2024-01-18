import React from 'react'
import { dataCardVipProperty } from '../../_model/dataPosting'
import '../../_style/posting-page.css'
import '../../_style/posting-card-vip.css'
import Image from 'next/image'
// import PostCardVip from '../card/PostCardVip'
interface PostCardVipSlideProps {
    list: dataCardVipProperty[]
}
const PostCardVipSlide: React.FC<PostCardVipSlideProps> = ({ list }) => {
    return (
        <div className='h-full py-6 flex gap-[22px]'>
            {list.map((item, index) => (
                        <div  key={index} className={`max-w-[210px] h-[330px] w-full 
                        pt-1 pb-5 text-center rounded-2xl ${item.level === 99 ? 'posting-card__vip-bg--special' : 'posting-card__vip-bg'}`}>
                            <p className='uppercase text-white font-bold h-9'>
                                {item.level === 99 ? 'special' : `vip ${item.level}`}
                            </p>
                            <div className='list-postcart-vip'>
                                <div className={`${item.level === 99 ? 'postcart-vip__item--special' : 'postcart-vip__item'}`}>
                                    <p className='text-[11px] leading-4 font-bold'>
                                        {item.price} <br /> (Not include VAT)
                                    </p>
                                </div>
                                <div className={`h-[55px] flex items-center justify-between px-6 ${
                                        item.level === 99 ? 'postcart-vip__item--special' : 'postcart-vip__item'
                                    }`}>
                                    <p className='text-[10px] font-bold leading-4'>
                                        Avatar <br /> Border
                                    </p>
                                    <Image
                                        src={item.borderUrl}
                                        height={31}
                                        width={35}
                                        alt={item.borderUrl}
                                        className='h-[31px] w-auto object-cover'
                                    />
                                </div>
                                {item.benefits.map((benefit, benefitIndex) => (
                                    <div
                                        key={benefitIndex}
                                        className={`${item.level === 99 ? 'postcart-vip__item--special' : 'postcart-vip__item'}`}>
                                        <p className='font-bold text-[7px] leading-[10px]'>
                                            {benefit.title} <br />
                                            {benefit.date && (
                                                <span className='font-normal'>
                                                    {' '}
                                                    1 news/day
                                                </span>
                                            )}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <button className='postcart-vip__btn mt-6'>Buy NOW</button>
                        </div>
            ))}
        </div>
    )
}

export default PostCardVipSlide
