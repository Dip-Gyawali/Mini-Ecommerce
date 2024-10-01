import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AllBuyerItems from './AllBuyerItems';

export default function BuyerShop() {
  const [items,setItems] = useState([]);

  async function getData() {
    const res = await axios.get('http://localhost:5000/api/items');
    if(res.status!==200){
      console.log("Error Occured")
    }
    const data = res.data.data;
    console.log(data);
    setItems(data);
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <div className='grid grid-cols-3 gap-5 p-5'> 
       {items.map((ele)=>(
        <AllBuyerItems key={ele._id} item={ele}/>
       ))}
    </div>
  )
}
