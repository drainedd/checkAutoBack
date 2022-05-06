import React, { useCallback, useEffect, useState } from 'react';
import MyCard from '../../components/MyCard';
import axios from "axios"
import './MyOrdersPage.css'

export default function MyOrdersPage() {
    
  const [sells, setSells] = useState([])

  const getSell = useCallback(async () => {
      try {
         await axios.get('/api/sell',{
             headers:{
                  'Content-Type': 'application/json'
             },
             
         }) 
         .then((responce) => setSells(responce.data))
      } catch (error) {
          console.log(error)
      }
  },[])

  const removeSell = useCallback(async (id) => {
    try {
      await axios.delete(`/api/sell/delete/${id}`, {id}, {
        headers: {'Content-Type': 'application/json'}
      })
      .then(() => getSell())
    } catch (error) {
      console.log(error)
    }
  })
  
  useEffect(()=>{
    getSell()
},[getSell])

    return(
        <div className='row body'>
            <div>
                <h4 className='center head'>Мои объявления</h4>
            </div>
            <div>
                {sells.map((obj)=>(
                <MyCard 
                    nameMark={obj.nameMark} 
                    infoAbout={obj.infoAbout}
                    infoAbout2={obj.infoAbout2}
                    price={obj.price} 
                    imageUrl={obj.imageUrl} 
                    mileage={obj.mileage}
                    year={obj.year}
                    telephone={obj.telephone}
                    city={obj.city} />
                ))}
            </div>
        </div>
)
}