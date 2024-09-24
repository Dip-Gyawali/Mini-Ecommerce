import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ItemsContainer from './ItemsContainer';

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
    <div className='grid grid-cols-3 gap-5 mb-32'>
      {items.map((ele)=>(
        <ItemsContainer key={ele._id} item={ele}/>
      ))}
    </div>
  )
}
