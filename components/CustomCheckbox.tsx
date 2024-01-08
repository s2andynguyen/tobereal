import React from 'react'
// import './style.css'
import { FaCheck } from "react-icons/fa";
interface CustomCheckboxProps {
    label?: string
    checkedColor?: string
    isChecked?: boolean
    onChange?: any
}
const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
    label,
    checkedColor,
    isChecked,
    onChange
}) => {
    return (
          <label className='form-control flex items-center relative'>
              <input type='checkbox' 
              checked={isChecked}
              name='checkbox' className='w-[18px] h-[18px] appearance-none peer border border-[#cdcdcd] rounded-[3px]' 
              onChange={onChange}
              />
              <span className='select-none cursor-pointer ml-2'>{label}</span>
              <div className='absolute top-[6px] left-[3px] peer-checked:scale-100 peer-checked:opacity-100 opacity-0 scale-0 transition duration-200'>
                <FaCheck size={13} color={checkedColor} />
              </div>
          </label>
    )
}

export default CustomCheckbox
