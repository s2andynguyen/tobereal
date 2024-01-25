import React, { useEffect, useRef, useState } from 'react'
import { IoChevronDown } from 'react-icons/io5'
import CustomCheckbox from './CustomCheckbox'

interface FormSelectProps {
    title: string
    options: any[]
    selectedOption: any[],
    optionType: string,
    listIsShow: string[],
    onChange: any,
    setOpen: (type:string)=>void,
    setClose: (type:string)=>void,
}
const FormSelect: React.FC<FormSelectProps> = ({
    title,
    options,
    selectedOption,
    optionType,
    listIsShow,
    onChange,
    setOpen,
    setClose
}) => {
    
    const selectCusRef = useRef<HTMLDivElement>(null)
    // const toggleShow = () => {
    //     console.log('onClick optionType:>> ', optionType);
    //     onClick(optionType)
    // }

    const handleClickOutside = (event:MouseEvent) => {
        if (selectCusRef.current && !selectCusRef.current.contains(event.target as Node)) {
            setClose(optionType)
        }
    };
    
    useEffect(() => {
        document.addEventListener('mousedown',handleClickOutside)
        return () => document.removeEventListener('mousedown',handleClickOutside)
    },[])
    return (
            <div className='min-w-[139px] h-10 relative z-[1] w-full' ref={selectCusRef} >
                {/* btn select */}
                <div 
                    className='font-montserrat absolute top-0 z-[1] left-0 right-0 text-[15px] px-2 sm:px-3 h-9 rounded-[20px] bg-white font-medium flex items-center border border-[#cdcdcd]  cursor-pointer select-none'
                    onClick={() => setOpen(optionType)}  onBlur={() => setClose(optionType)}
                    >
                    <span className='basis-[100%] sm:text-[15px] text-sm'>{title}</span>
                    <IoChevronDown size={25} className={`min-w-[20px] w-[20px] ml-auto transition-all duration-200 ${
                        listIsShow.includes(optionType) ? '-rotate-180' : 'rotate-0'
                    }`} />
                </div>
                <div className={`absolute top-0 left-0 right-0 flex flex-col min-w-[139px] bg-white rounded-[20px] shadow-md border pt-10 pb-2 px-2 
                 transition-all duration-300 opacity-0 ${
                    listIsShow.includes(optionType) ? 'flex translate-y-0 opacity-100' : 'hidden -translate-y-3'
                }`}>
                    {options.map((option, index) => (
                        <div className='font-montserrat font-medium text-[14px] hover:bg-[#f3f3f3] cursor-pointer px-2 y-1' 
                        key={index}>
                            <CustomCheckbox
                                label={option.label}
                                isChecked={selectedOption.includes(option.value)}
                                onChange={(value:string) => onChange(optionType,option.value)}
                                smail   
                            />
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default FormSelect
