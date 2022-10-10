import React from 'react'
import {Sidemenu} from '../components/Sidemenu'
import { useEffect } from 'react';
import { useState } from 'react';
import { v4 } from 'uuid';

export function GoodsPage() {
const [goods,setGoods] = useState([]);

useEffect(()=>{
  fetch('https://api.nanoit.dev/goods')
  .then(response=> response.json())
  .then(data => setGoods(data))
},[]);

  return (
    <>
    <Sidemenu></Sidemenu>
{
  goods.map((good)=> <div className='goodField' key={v4()}>
    <img  src={good.photo.url} alt="clown" />
    <p>{good.name}</p>
    <p className='price'>{good.price}$</p>
  </div>)
}
    </>
  )
}

// export default GoodsPage
// let assaa = {
//     "id": 4,
//     "name": "Name",
//     "description": "Description",
//     "price": 1,
//     "discount": 2,
//     "photoId": 3,
//     "categoryId": 4,
//     "photo": {
//         "id": 3,
//          "name": "horse- 5.png", 
//          "size": "1286524",
//           "mimeType": "image/png",
//            "url": "https://api.nanoit.dev/storage/2f677d499dfce5855bec993215fcbe8157b913b84f4fd6b6d3b6a69610dec2c92-1659364423932.png"
//     }
// }