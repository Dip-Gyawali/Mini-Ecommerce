import React from 'react'
import { Outlet } from 'react-router-dom'

export default function SellerHome() {
  return (
    <div>
        <Outlet/>
      <h1>Seller home page</h1>
    </div>
  )
}
