import React, {useState } from "react";




export default function SellPage() {
    
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
        <select>
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
            <input placeholder="Введите полное название автомобиля" id="year" type="text" class="validate"/>
              <label for="first_name">Марка/Модель</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6" >
            <input placeholder="объем двигателя/л.с/тип двигателя" id="year" type="text" class="validate"/>
              <label for="first_name">Введите характеристики автомобиля</label>
          </div>
        </div>  

        {/* Вставить объем/л.с/тип движка */}
        <div className="input-field ">
        <select>
          <option value="" disabled selected>Выберите тип привода</option>
          <option value="1">Задний</option>
          <option value="2">Передний</option>
          <option value="3">Полный</option>
        </select>
      <label>Тип привода</label>
      </div>    
      <div className="row">
          <div className="input-field col s6">
            <input placeholder="Введите год выпуска" id="year" type="text" class="validate"/>
              <label for="first_name">Год выпуска</label>
          </div>
      </div>     
              <div className="row">
                <div className="input-field col s6">
                  <input placeholder="Введите пробег" id="year" type="text" class="validate"/>
                    <label for="first_name">Пробег</label>
                </div>
              </div>                    
              <div className="row">
                <div className="input-field col s6">
                  <input placeholder="Введите стоимость"  id="year" type="text" class="validate"/>
                    <label for="first_name">Стоимость</label>
                </div>
              </div>                      
              <div className="row">
                <div className="input-field col s6">
                  <input placeholder="+7(xxx)-xxx-xx-xx" id="year" type="text" class="validate"/>
                    <label for="first_name">Введите номер вашего телефона</label>
                </div>
              </div>           
              <div className="row">
                <div className="input-field col s6">
                  <input placeholder="Введите город продажи" id="year" type="text" class="validate"/>
                    <label for="first_name">Город продажи</label>
                </div>
              </div>
      </form>
    </div>
    <button className="btn" type="submit">Разместить объявление</button>
  </div>
  )
  }