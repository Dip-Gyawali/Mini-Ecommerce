import React from 'react';
import moment from 'moment';

export default function AllBuyerItems({item}) {
  return (
    <div className='flex gap-3 flex-col p-5'>
       <img src={item.image} alt="image" className="rounded-xl h-96" />
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">{item.name}</h1>
        <h1 className="font-bold">Category: <span className="font-normal">{item.category}</span></h1>
      </div>
      <h1 className="font-bold">Price: <span className="font-normal">Rs.{item.price}</span></h1>
      <h1 className="text-purple-600 text-xl">{item.description}</h1>
      <button className='border-[1px] bg-green-500 rounded-xl px-5 py-2 hover:bg-green-600'>Add To Cart</button>
    </div>
  )
}
