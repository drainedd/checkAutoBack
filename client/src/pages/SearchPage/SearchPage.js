import React, { useCallback, useEffect, useState } from 'react';
import Card from '../../components/CardSearch';
import './SearchPage.css'
import axios from "axios"

export default function SearchPage() {
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
  useEffect(()=>{
    getSell()
},[getSell])

    return(
    <div className='row body'>
      <div class="container">
        <form className="find col s12">
      <div className="row">
        <div className="input-field col s3">
          <input  id="Mark" type="text" className="validate"/>
          <label for="Mark">Марка</label>
        </div>
        <div className="input-field col s3">
          <input id="Year" type="text" className="validate"/>
          <label for="Year">Год</label>
        </div>
        <div className="input-field col s3 ">
          <input id="Price" type="text" className="validate"/>
          <label for="Price">Цена</label>
        </div>
        <div className="input-field col s3">
          <input id="MileAge" type="text" className="validate"/>
          <label for="MileAge">Пробег</label>
        </div>
        <a className="waves-effect waves-light btn-small findbtn">Найти</a>
        <a className="waves-effect waves-light btn-small findbtn">Очистить</a>
      </div>
      </form>
      </div>
          <div>

            {sells.map((obj)=>(
              <Card 
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