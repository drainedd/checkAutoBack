import axios from "axios"
import React, { useState, useContext, useCallback, useEffect } from "react"

import './OrderPage.scss'

const OrderPage = () => {
    const [text, setText] = useState('')
    const [text2, setText2] = useState('')
    
    const [todos, setTodos] = useState([])

    const getTodo = useCallback(async () => {
        try {
           await axios.get('/api/todo',{
               headers:{
                    'Content-Type': 'application/json'
               },
               
           }) 
           .then((responce) => setTodos(responce.data))
        } catch (error) {
            console.log(error)
        }
    },[])

    const createTodo = useCallback(async () => {
        if (!text) return null
        try {
            await axios.post('/api/todo/add',{text,text2}, {
                headers:{'Content-Type': 'application/json'}
            })
            .then((response)=> {
                setTodos([...todos], response.data)
                setText('')
                setText2('')
                getTodo()
            })
        } catch (error) {
            console.log(error)
        }
    },[text, text2, todos, getTodo])

    useEffect(()=>{
        getTodo()
    },[getTodo])

    return(
        <div className="container">
            <div className="main-page">
                <h4>Заказать автоподбор</h4>
                <form className="form form-login" onSubmit={e => e.preventDefault()}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                type="text"
                                id="text"
                                name="input"
                                className="validate"
                                value={text}
                                onChange={e => setText(e.target.value)}
                            />
                            <label htmlFor="input">Введите марку и модель автомобиля</label>
                        </div>
                        <div className="input-field col s12">
                        <input
                                type="text"
                                id="text2"
                                name="input"
                                className="validate"
                                value={text2}
                                onChange={e => setText2(e.target.value)}
                            />
                            <label htmlFor="input">Введите стоимость</label>
                        </div>
                    </div>
                    <div className="row">
                    <button
                        className="waves-effect waves-light btn blue"
                        onClick={createTodo}
                    >Отправить заявку</button>
                    </div>
                </form>
                <h3>Активные задачи</h3>
                <div className="todos">
                    {
                       todos.map((todo,index) =>{
                            return(
                                <div className="row flex todos-item" key={index}>
                                    <div className="col todos-num">{index + 1}</div>
                                        <div className="col todos-text">{todo.text}</div>
                                            <div className="col todos-buttons">
                                                <i className="material-icons blue-text">check</i>
                                                <i className="material-icons orange-text">warning</i>
                                                <i className="material-icons red-text">delete</i>
                                            </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default OrderPage