import React from "react";
import mern from "../assets/mern.png";

export default function HomeNavbar() {
  return (
    <div className="flex items-center justify-between p-5 border-b-2 border-black">
      <h1 className="font-bold flex flex-col sm:flex-col md:flex-row text-xl sm:text-xl md:text-3xl md:gap-2">
        <span className="text-purple-600">Hyrax </span> Xchange
      </h1>
      <img src={mern} alt="mern logo" className="h-16 sm:h-16 md:h-24" />
    </div>
  );
}
