'use client'
import './styles.css'
import React, { useState } from "react";


const Asset = () => {
    return (
        <div className='Asset'>
            <span className='Type'>Asset type</span>
            <select
                className='select-asset'
                id='Asset-type'
                name='Asset.type'
            >
                <option value=''>Select address type</option>
                <option value=''>Selling townhouses</option>
                <option value=''>Selling private house</option>
                <option value=''>Selling villas and townhouses</option>
                <option value=''>Selling apartments</option>
                <option value="">Selling restaurants and hotels</option>
                <option value="">Selling warehouse and workshop</option>
            </select>
        </div>
    )

}
export default Asset