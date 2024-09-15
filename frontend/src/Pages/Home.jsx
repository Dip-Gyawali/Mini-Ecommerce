import React from "react";
import HomeNavbar from "../Components/HomeNavbar";
import ecommerce from "../assets/ecommerce.png";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col  overflow-hidden">
      <HomeNavbar />
      {/* body section */}
      <section className="flex items-center justify-around bg-gray-100 h-[85vh]">

        {/* left section */}
        <div className="flex flex-col gap-5 w-[30%] ">
          <h1 className="text-lg">Welcome to Hyrax Marketplace</h1>
          <h1 className="text-5xl font-bold text-purple-600">
            Discover amazing deals, buy & sell effortlessly.
          </h1>
          <div className="flex gap-5">
            <NavLink to='/seller'>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600">
            Start Selling
          </button>
            </NavLink>

          <NavLink to='/buyer'>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600">
            Start Buying
          </button>
          </NavLink>

          </div>
        </div>

        {/* right section */}
        <img src={ecommerce} alt="ecommerce pic" className="h-[60vh]" />
      </section>
    </div>
  );
}
