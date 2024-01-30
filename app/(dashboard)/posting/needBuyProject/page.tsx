import React from 'react'
import './style.css'
import DashboardLayout from '../../_ui/layout/DashboardLayout'
import BuyTobereal from '../_ui/BuyTobereals/BuyTobereal'
import { NeedTobereal_BUY } from './Buy-ToberealNeed'
const NeedBuyProject = () => {
    return (
        <DashboardLayout title='Customers need to buy - need to rent'>
            <div className='wrap-NeedBuyProjects flex flex-col gap-14 mt-20'>
                <div className='flex flex-col justify-center items-center gap-6 p-5'>
                    <div className='Need-SelectSearch w-full max-w-[619px]'>
                        <label className='Need-textLabel-Select font-bold' htmlFor='Province'>
                            Select Province/City:
                        </label>
                        <input type='text' id='Province' className='Need-inputSelect' />
                    </div>
                    <div className='Need-SelectSearch w-full max-w-[619px]'>
                        <label className='Need-textLabel-Select font-bold' htmlFor='District'>
                            Select District:{' '}
                        </label>
                        <input type='text' id='District' className='Need-inputSelect' />
                    </div>

                    <div className='Need-SelectSearch w-[318px] md:w-[619px] items-center'>
                        <button className='btn-SearchBuyNeed'>search</button>
                    </div>
                </div>
                <div className='flex flex-col gap-3 justify-center items-center p-5'>
                    {NeedTobereal_BUY?.map((card) => (
                        <BuyTobereal data={card} key={card?.id} />
                    ))}
                </div>
            </div>
        </DashboardLayout>
    )
}

export default NeedBuyProject
