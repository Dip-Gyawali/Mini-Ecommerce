import React from "react";
import { NavLink } from "react-router-dom";
import Ecommerce from "../assets/ecommerce.png";

export default function BuyerMain() {
  return (
    <div className="flex items-center justify-between p-32 h-[80vh]">
      {/* left section */}
      <div className="flex flex-col gap-2 w-[50%]">
        <h2 className="font-bold text-xl">Welcome To Hyrax Xpress</h2>
        <h1 className="font-bold text-4xl">
          Buy Anything and Everything At Reasonable Price
        </h1>
        <p>"Why Shop With Us? At Hyrax Xpress,</p>
        <p>
          we bring you: 🌟 Exclusive Discounts – Special offers you won’t find
          anywhere else!
        </p>
        <p>
          🌟 Top-Quality Products – From trending gadgets to timeless fashion,
          we've got it all.
        </p>
        <p>🌟 Hassle-Free Returns – We make returns easy and stress-free.</p>
        <p> 🌟 Safe & Secure Payments – Your security is our top priority.</p>
        <p>
          Join Our Community of Happy Shoppers! Sign up for our newsletter and
          get 10% OFF your first order, plus early access to flash sales,
          product launches, and more!
        </p>
        <p> 📦 Fast Delivery </p>
        <p> 🛡️ Secure Checkout</p>
        <p>
          🤝 100% Satisfaction Guarantee Ready to Shop? The best deals are just
          a click away. Explore, shop, and experience seamless shopping at Hyrax
          Xpress! 💳✨"
        </p>
        <NavLink to="/buyer/shop">
          <button className="border-[1px] rounded-xl py-2 px-5 text-lg bg-purple-400 hover:bg-purple-500">
            Start Shopping
          </button>
        </NavLink>
      </div>
      {/* right section */}
      <img src={Ecommerce} alt="photo" height={400} width={600} />
    </div>
  );
}
