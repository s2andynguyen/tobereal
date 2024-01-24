'use client'
import './styles.css'
import React, { useState } from "react";
import Image from "next/image";

const GoogleMap = () => {
    return (
        <div className="google_map">
            <Image
                src='/dashboard/images/posting/img/Map.png'
                alt=''
                className='w-[934px] h-[900px]'
                width={934}
                height={900}
            />

        </div>

    )

}
export default GoogleMap