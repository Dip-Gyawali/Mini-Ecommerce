import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Allsaleitems() {
    const [items,setItems]= useState([]);

    async function getItems(){
      const res = await axios.get('http://localhost:5000/api/items');
      if(res.data.success){
        setItems(res.data.data)
      }
    }

    useEffect(()=>{
        getItems()
    },[])

  return (
    <div className='grid grid-cols-3 gap-5'>
      {items.map((ele)=>(
        <div key={ele._id}>
           <img src={ele.image} alt="image" className='h-20'/>
           
        </div>
      ))}
    </div>
  )
}
