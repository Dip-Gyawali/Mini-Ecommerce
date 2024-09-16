import React from "react";
import profile from "../assets/profilePic.jpg";
import sales from "../assets/sales.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

export default function SellerNavbar() {
  return (
    <div className="flex items-center justify-between p-5 border-2 border-b-black">
      <h1 className="font-bold flex flex-col sm:flex-col md:flex-row text-xl sm:text-xl md:text-3xl md:gap-2">
        <span className="text-purple-600">Hyrax </span> Xchange
      </h1>

      <div className="flex gap-2 items-baseline">
        <img src={sales} alt="sales icon" className="h-10" />
        <h1 className="font-bold uppercase text-3xl ">Seller Panel</h1>
      </div>

      <div className="flex gap-2 items-center">
        <img src={profile} alt="logo" className="h-10 rounded-full" />
        <FontAwesomeIcon icon={faBell} className="h-8" />
      </div>

    </div>
  );
}
