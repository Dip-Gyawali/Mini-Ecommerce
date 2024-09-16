import React from "react";
import { Outlet } from "react-router-dom";
import SellerSideBar from "../Seller/SellerSideBar";
import SellerNavbar from "../Seller/SellerNavbar";

export default function SellerHome() {
  return (
    <>
      <SellerNavbar />
      <div className="flex gap-3 h-[100vh]">
        {/* Sidebar */}
        <SellerSideBar />

        {/* Main content (Outlet) */}
        <div className="flex-grow p-4 overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
}
