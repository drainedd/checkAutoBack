import React, {useState, useCallback} from "react";
import axios from "axios"

import './SellPage.css'



const SellPage = () => {
 
  const [imageUrl, setImageUrl] = useState('')
  const [nameMark, setNameMark] = useState('')
  const [infoAbout, setInfoAbout] = useState('')
  const [gear, setGear] = useState('')
  const [year, setYear] = useState('')
  const [mileage, setMileage] = useState('')
  const [price, setPrice] = useState('')
  const [telephone, setTelephone] = useState('')
  const [city, setCity] = useState('')


  

  const createSell = useCallback(async () => {
      if (!nameMark) return null
      try {
          await axios.post('/api/sell/add',{imageUrl,nameMark,infoAbout,gear,year,mileage,price,telephone,city}, {
              headers:{'Content-Type': 'application/json'}
          })
          .then(()=> {
            
              setImageUrl('')
              setNameMark('')
              setInfoAbout('')
              setGear('')
              setYear('')
              setMileage('')
              setPrice('')
              setTelephone('')
              setCity('')
              
          })
      } catch (error) {
          console.log(error)
      }
  },[imageUrl,nameMark,infoAbout,gear,year,mileage,price,telephone,city])

  


    return (
    <div className="container">
      <div className="file-field input-field">
        <div className="btn">
          <input type="file"
           multiple
           value={imageUrl} 
           onChange={e => setImageUrl(e.target.value)}
           />
            <div>Загрузить фото</div>
        </div>
          <div className="file-path-wrapper inputPhoto">
              <input className="file-path validate"
               type="text"
               placeholder="Выберите фотографии"
               
               />
          </div>
        </div>

    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input
            id="nameMark" 
            type="text" 
            className="validate"
            value={nameMark} 
             onChange={e => setNameMark(e.target.value)}
            />
              <label for="first_name">Марка/Модель</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6" >
            <input placeholder="объем двигателя/л.с/тип двигателя"
             id="infoAbout" 
             type="text" 
             className="validate"
             value={infoAbout} 
             onChange={e => setInfoAbout(e.target.value)}/>
            <label for="first_name">Введите характеристики автомобиля</label>
          </div>
        </div>  
        <div className=" ">
        
      
      </div>    
      <div className="row">
          <div className="input-field col s6">
            <input 
             id="year" 
             type="number" 
             className="validate raz"
             value={year} 
             onChange={e => setYear(e.target.value)}
            />
              <label for="first_name">Год выпуска</label>
          </div>
      </div>     
              <div className="row">
                <div className="input-field col s6">
                  <input 
                  id="mileage" 
                  type="number" 
                  className="validate raz"
                  value={mileage} 
                  onChange={e => setMileage(e.target.value)}
                  />
                  
                    <label for="first_name">Пробег</label>
                </div>
              </div>                    
              <div className="row">
                <div className="input-field col s6">
                  <input   
                    id="price" 
                    type="number" 
                    className="validate raz"
                    value={price} 
                    onChange={e => setPrice(e.target.value)}
                    /> 
                    <label for="first_name">Стоимость</label>
                </div>
              </div>                      
              <div className="row">
                <div className="input-field col s6">
                  <input  
                  id="telephone" 
                  type="number" 
                  className="validate raz"
                  value={telephone} 
                  onChange={e => setTelephone(e.target.value)}
                  />
                    <label for="first_name">Введите номер вашего телефона</label>
                </div>
              </div>           
              <div className="row">
                <div className="input-field col s6">
                  <input 
                  id="city" 
                  type="text" 
                  className="validate"
                  value={city} 
                  onChange={e => setCity(e.target.value)}
                  />
                    <label for="first_name">Город продажи</label>
                </div>
              </div>
      </form>
    </div>
    <button className="btn sell"  onClick={createSell}>Разместить объявление</button>
  </div>
  )
  }
  export default SellPage