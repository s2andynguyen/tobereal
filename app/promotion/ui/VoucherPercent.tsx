'use client'
import React from 'react'
interface VoucherPercentProps {
    color?: string, 
    className?: string
}
const VoucherPercent:React.FC<VoucherPercentProps> = ({color, className}) => {
  return (
    <div className={`h-[130px] w-[33px] sm:h-[178px] sm:w-[66px] object-contain bg-contain ${className ?? ''}`}>
        {color === 'blue' ?
        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="178" viewBox="0 0 66 178" fill="none">
        <path d="M46.42 177.67H10.64L10.2899 177.04C8.22995 173.34 4.41995 170.94 0.199951 170.69V7.40001C4.93995 7.27001 9.26995 4.69001 11.64 0.590012L11.9799 0.0100098H46.4299C56.9799 0.0100098 65.5299 8.56002 65.5299 19.11V158.56C65.5299 169.11 56.9799 177.66 46.4299 177.66L46.42 177.67Z" fill="#8DB6FF"/>
        </svg>
        :
        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="178" viewBox="0 0 66 178" fill="none">
        <path d="M46.42 177.66H10.64L10.2899 177.03C8.22995 173.33 4.41995 170.93 0.199951 170.68V7.39C4.93995 7.26 9.26995 4.68 11.64 0.58L11.9799 0H46.4299C56.9799 0 65.5299 8.55 65.5299 19.1V158.55C65.5299 169.1 56.9799 177.65 46.4299 177.65L46.42 177.66Z" fill="#F9BF6B"/>
        </svg>
        }
    </div>
  )
}

export default VoucherPercent