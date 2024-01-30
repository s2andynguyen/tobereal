'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import ArrowDown from '@/icons/Arrow/ArrowDown'
import { useAppSelector } from '@/redux/store'
import { useDispatch } from 'react-redux'
import { chageLanguage } from '@/redux/features/language'
const ChooseLanguage = () => {
    const [isShow, setIsShow] = useState(false)
    const selectRef = useRef<HTMLDivElement>(null) 
    const listLanguage = useAppSelector((state) => state.language.languages)
    const dispatch = useDispatch();

    const currentLanguage = useMemo(() => listLanguage.find(item => item.selected), [listLanguage])
    const toggleShow = () => {
        setIsShow(!isShow)
    }

    const handleClickOutside = (event:MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
            setIsShow(false);
        }
    }
    const handleSelect = (locale:string) => {
        dispatch(chageLanguage(locale))
    }

    useEffect(() => {
        document.addEventListener('mousedown',handleClickOutside)
        return () => document.removeEventListener('mousedown',handleClickOutside)
    })
    return (
        <div className='flex-shrink-0 flex-grow self-center select-none relative z-[1] pl-4 pr-2' ref={selectRef}>

            {/* button */}
            <div
                className='flex items-center cursor-pointer bg-white'
                onClick={toggleShow}>
                <Image
                    src={`/images/svg/${currentLanguage?.flag}`}
                    alt='iconVietnam.svg'
                    height={27}
                    width={18}
                    className='w-[27px] h-[18px]'
                />
                <span className='inline-block pl-[4px] flex-grow min-w-[27px]'>{currentLanguage?.locale}</span>
                <div className='mt-[2px]'><ArrowDown className={'w-[10px] h-[10px]'}/></div>
            </div>

            {/* list select language */}
            <div
                className={`absolute top-[28px] left-2 bg-[rgb(70,70,70)] bg-opacity-70 py-1 w-[68px] shadow-gray transition-all duration-200 z-0 rounded-md ${
                    isShow
                        ? 'visible translate-y-0 opacity-100'
                        : 'invisible opacity-0 -translate-y-2'
                }`}>
                {listLanguage.map((lang, index) => (
                    // item language
                    <div
                        key={index}
                        className={`flex items-center justify-start pl-2 gap-[6px] cursor-pointer group hover:bg-white ${
                            lang.selected && 'bg-white'
                        }`} onClick={() => handleSelect(lang.locale)}>
                        <Image
                            src={`/images/svg/${lang.flag}`}
                            alt={lang.flag}
                            height={27}
                            width={18}
                            className='w-[27px] h-[18px]'
                        />
                        <span
                            className={`inline-block group-hover:text-black transition duration-200 ${
                                !lang.selected && 'text-white'
                            }`}>
                            {lang.locale}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChooseLanguage
