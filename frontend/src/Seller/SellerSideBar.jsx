import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCartPlus, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function SellerSideBar() {
  return (
    <div className="flex flex-col gap-5 p-5 w-[20%] border-2 border-black h-full">
      
      {/* Items Link */}
      <NavLink 
        to="/seller" 
        end 
        className={({ isActive }) => 
          `p-4 rounded-xl ${isActive ? 'bg-gray-300' : 'bg-transparent'}`}
      >
        <div className="flex gap-3 items-center text-xl">
          <FontAwesomeIcon icon={faHouse} />
          <h1>Items</h1>
        </div>
      </NavLink>

      {/* Add Item Link */}
      <NavLink 
        to="/seller/form" 
        end
        className={({ isActive }) => 
          `p-4 rounded-xl ${isActive ? 'bg-gray-300' : 'bg-transparent'}`}
      >
        <div className="flex gap-3 items-center text-xl">
          <FontAwesomeIcon icon={faCartPlus} />
          <h1>Add Item</h1>
        </div>
      </NavLink>

      {/* Exit Link */}
      <NavLink to="/" className='p-4'>
        <div className="flex gap-3 items-center text-xl">
          <FontAwesomeIcon icon={faCircleXmark} />
          <h1>Exit</h1>
        </div>
      </NavLink>

    </div>
  );
}
