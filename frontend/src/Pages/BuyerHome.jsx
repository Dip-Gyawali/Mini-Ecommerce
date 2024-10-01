import React from 'react'
import BuyerNavbar from '../Buyer/BuyerNavbar'
import { Outlet } from 'react-router-dom'

export default function BuyerHome() {
  return (
    <div className='flex flex-col gap-5'>
      <BuyerNavbar/>
      <div className="flex-grow p-4 overflow-y-auto">
          <Outlet />
        </div>
    </div>
  )
}
