import React, { useState } from 'react';
import Card from '../../components/CardSearch';
import './SearchPage.scss'


export default function SearchPage() {
  const [items, setItems] = React.useState([])
  React.useEffect(()=>{
    fetch('https://61fd5863f62e220017ce449d.mockapi.io/items')
    .then((res)=>{
      return res.json();
    })
    .then((json)=>{
      setItems(json);
    })
  },[]);
    return(
    <div className='row'>
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

            {items.map((obj)=>(
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