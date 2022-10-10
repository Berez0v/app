import React from 'react'
import Sidemenu from '../components/Sidemenu'
import { useState } from 'react'
import { useEffect } from 'react'
import { v4 } from 'uuid'
import axios from 'axios'
import { json } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
export function RedactPage() {
 function redactName(){
       console.log("he;e;;e");
      //  console.log();


 }
  const [categories, setCategoty] = useState([]);

  useEffect(() => {
    async function getCategory() {
      try {
        const data = await axios.get('https://api.nanoit.dev/categories');
        setCategoty(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getCategory();
  }, []);

  console.log(categories);
  return (
    <>


      <Sidemenu></Sidemenu>
      <Navbar />
      {
        categories.map((category) =>
          <div className='category' key={v4()}>
            <p>{category.id}</p>
            <button className='redactButton' onClick={redactName} >Redact</button>
            <p>{category.name}</p>
            <p>{category.photoId}</p>
          </div>
        )
      }

    </>
  )
}