import React from 'react'
import logo from '../assets/logo.jpg'
import { NavLink } from 'react-router-dom'
export default function BuyerNavbar() {
  return (
    <div className='flex items-center justify-between p-5 shadow-md'>
       <img src={logo} alt="ecommerce logo" height={100} width={70} />
       <nav className='flex gap-10 text-lg font-bold'>
         <NavLink to='/buyer' style={({isActive})=>{
            return {color:isActive?"red":"black"}
         }} end>Home</NavLink>
         <NavLink to='/buyer/shop' style={({isActive})=>{
            return {color:isActive?"red":"black"}
         }}>Shop</NavLink>
         <NavLink to='/buyer/blog' style={({isActive})=>{
            return {color:isActive?"red":"black"}
         }}>Blog</NavLink>
         <NavLink to='/buyer/about' style={({isActive})=>{
            return {color:isActive?"red":"black"}
         }}>About</NavLink>
       </nav>
       <button className='border-[1px] bg-purple-400 rounded-xl py-2 px-5 text-lg hover:bg-purple-500'>Cart</button>
    </div>
  )
}
