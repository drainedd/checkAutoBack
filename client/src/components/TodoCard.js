import React, { } from 'react';
import './TodoCard.css'



function TodoCard (props){
    return(
        <div className="TodoCard ">
            <div>
            <div className='krest'>
            <i className="material-icons">close</i>
            </div>
            <h6 className="markModel"> Марка и модель автомобиля: {props.text}</h6>
            <h6 className="todoPrice"> Предлагаемая цена: {props.text2} Руб.</h6>
           
            </div>
            <div className="aboutTodo">
                <p className="aboutTodo"> Дополнительная информация: {props.about}</p>
                <p className="aboutTodo"> Способ связи с клиентом: {props.contact}</p>
            </div>
        </div>
        
    )
}
export default TodoCard;