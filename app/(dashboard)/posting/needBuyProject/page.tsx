import React from 'react'
import './style.css'
import DashboardLayout from '../../_ui/layout/DashboardLayout'
import BuyTobereal from '../_ui/BuyTobereals/BuyTobereal'
import { NeedTobereal_BUY } from './Buy-ToberealNeed'
const NeedBuyProject = () => {
    return (
        <DashboardLayout title='Customers need to buy - need to rent'>
            <div className='wrap-NeedBuyProjects flex flex-col gap-14'>
                <div className='Gr-CustomersSelects flex flex-col'>
                    <div className='SelectSearch '>
                        <label className='textLabel-Select !font-bold' htmlFor='Province'>
                            Select Province/City:
                        </label>
                        <input type='text' id='Province' className='inputSelect' />
                    </div>
                    <div className='SelectSearch'>
                        <label className='textLabel-Select' htmlFor='District'>
                            Select District:{' '}
                        </label>
                        <input type='text' id='District' className='inputSelect' />
                    </div>

                    <div className='SelectSearch items-center'>
                        <button className='btn-SearchBuy'>search</button>
                    </div>
                </div>
                <div className='Gr-UserTobereals flex flex-col gap-2'>
                    {NeedTobereal_BUY?.map((card) => (
                        <BuyTobereal data={card} key={card?.id} />
                    ))}
                </div>
            </div>
        </DashboardLayout>
    )
}

export default NeedBuyProject
