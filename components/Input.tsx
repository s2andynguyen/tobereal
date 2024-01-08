import React from 'react'

interface InputProps {
    id: string
    onChange: any
    value: string
    label?: string
    placeholder?: string
    type?: string
}

const Input: React.FC<InputProps> = ({
    id,
    onChange,
    value,
    label,
    placeholder,
    type
}) => {
    return (
        <div className='w-full'>
            {label && (
                <label
                    htmlFor={id}
                    className='font-[14px] text-[#695C5C] font-montserrat block md:pb-2'>
                    {label}
                </label>
            )}
            <input
                id={id}
                value={value}
                type={type}
                onChange={onChange}
                className='input border-black/40 h-12 rounded-[10px] placeholder:text-black/70'
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input
