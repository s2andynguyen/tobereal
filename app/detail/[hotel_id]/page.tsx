import React from 'react'
import { Metadata } from 'next'
type Props = {
  params: {
    hotel_id: string
  }
}
// can use async to get data to generate
export const generateMetadata = async ({params}: Props):Promise<Metadata> => {
  const head = await new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(`Hotel VN - ${params.hotel_id}`)
    },1000)
  })
  return {
    title: `${head}`
  }
} 
function DetailHotel() {
  return (
    <div>DetailHotel</div>
  )
}

export default DetailHotel