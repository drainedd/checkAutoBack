import React, {useState, useContext, useCallback, useEffect } from "react";
import axios from "axios"



const SellPage = () => {
    
  const [color, setColor] = useState('')
  const [nameMark, setNameMark] = useState('')
  const [infoAbout, setInfoAbout] = useState('')
  const [gear, setGear] = useState('')
  const [year, setYear] = useState('')
  const [mileage, setMileage] = useState('')
  const [price, setPrice] = useState('')
  const [telephone, setTelephone] = useState('')
  const [city, setCity] = useState('')
  
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

  const createSell = useCallback(async () => {
      if (!nameMark) return null
      try {
          await axios.post('/api/sell/add',{color,nameMark,infoAbout,gear,year,mileage,price,telephone,city}, {
              headers:{'Content-Type': 'application/json'}
          })
          .then((response)=> {
              setSells([...sells], response.data)
              setColor('')
              setNameMark('')
              setInfoAbout('')
              setGear('')
              setYear('')
              setMileage('')
              setPrice('')
              setTelephone('')
              setCity('')
              getSell()
          })
      } catch (error) {
          console.log(error)
      }
  },[color,nameMark,infoAbout,gear,year,mileage,price,telephone,city, sells, getSell])

  useEffect(()=>{
      getSell()
  },[getSell])



    const [file, setFile] = useState(null)
    const fileHandler = (e) => {
    setFile(e.target.files[0])

  }

    return (
    <div className="container">
      <div className="file-field input-field">
        <div className="btn">
          <input type="file" multiple/>
            <div>Загрузить фото</div>
        </div>
          <div className="file-path-wrapper">
            <img src={file? URL.createObjectURL(file) : null} alt={file? file.name : null} style={{width:'250px',height:'150px'}}/>
              <input class="file-path validate" type="text" placeholder="Выберите фотографии" onChange={fileHandler}/>
          </div>
        </div>
      <div className="input-field col s6">
        <select id="color" value={color} onChange={e => setColor(e.target.value)}>
          <option value="" disabled selected>Выберите цвет</option>
          <option value="1">Белый</option>
          <option value="2">Серый</option>
          <option value="3">Черный</option>
          <option value="4">Бежевый</option>
          <option value="5">Красный</option>
          <option value="6">Желтый</option>
          <option value="7">Зеленый</option>
          <option value="8">Голубой</option>
          <option value="9">Синий</option>
          <option value="10">Фиолетовый</option>
          <option value="11">Розовый</option>
        </select>
        <label>Цвет автомобиля</label>
    </div>
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="Введите полное название автомобиля" 
            id="nameMark" 
            type="text" 
            class="validate"
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
             class="validate"
             value={infoAbout} 
             onChange={e => setInfoAbout(e.target.value)}/>
            <label for="first_name">Введите характеристики автомобиля</label>
          </div>
        </div>  
        <div className="input-field ">
        <select 
          id="gear"           
          value={gear} 
          onChange={e => setGear(e.target.value)}>
          <option value="" disabled selected>Выберите тип привода</option>
          <option value="1">Задний</option>
          <option value="2">Передний</option>
          <option value="3">Полный</option>
        </select>
      <label>Тип привода</label>
      </div>    
      <div className="row">
          <div className="input-field col s6">
            <input placeholder="Введите год выпуска"
             id="year" 
             type="text" 
             class="validate"
             value={year} 
             onChange={e => setYear(e.target.value)}
            />
              <label for="first_name">Год выпуска</label>
          </div>
      </div>     
              <div className="row">
                <div className="input-field col s6">
                  <input placeholder="Введите пробег" 
                  id="mileage" 
                  type="text" 
                  class="validate"
                  value={mileage} 
                  onChange={e => setMileage(e.target.value)}
                  />
                    <label for="first_name">Пробег</label>
                </div>
              </div>                    
              <div className="row">
                <div className="input-field col s6">
                  <input placeholder="Введите стоимость"  
                    id="price" 
                    type="text" 
                    class="validate"
                    value={price} 
                    onChange={e => setPrice(e.target.value)}
                    />
                    <label for="first_name">Стоимость</label>
                </div>
              </div>                      
              <div className="row">
                <div className="input-field col s6">
                  <input placeholder="+7(xxx)-xxx-xx-xx" 
                  id="telephone" 
                  type="text" 
                  class="validate"
                  value={telephone} 
                  onChange={e => setTelephone(e.target.value)}
                  />
                    <label for="first_name">Введите номер вашего телефона</label>
                </div>
              </div>           
              <div className="row">
                <div className="input-field col s6">
                  <input placeholder="Введите город продажи" 
                  id="city" 
                  type="text" 
                  class="validate"
                  value={city} 
                  onChange={e => setCity(e.target.value)}
                  />
                    <label for="first_name">Город продажи</label>
                </div>
              </div>
      </form>
    </div>
    <button className="btn"  onClick={createSell}>Разместить объявление</button>
  </div>
  )
  }
  export default SellPage