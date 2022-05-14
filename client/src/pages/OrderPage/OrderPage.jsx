import axios from "axios"
import React, { useState, useCallback, useEffect } from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './OrderPage.scss'


const OrderPage = () => {
    const [text, setText] = useState('')
    const [text2, setText2] = useState('')
    const [about, setAbout] = useState('')
    
    const [todos, setTodos] = useState([])

    const notify = () => {
        toast.success("Заявка принята!", {position: toast.POSITION.TOP_CENTER});
    }

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
            await axios.post('/api/todo/add',{text,text2,about}, {
                headers:{'Content-Type': 'application/json'}
            })
            .then((response)=> {
                setTodos([...todos], response.data)
                setText('')
                setText2('')
                setAbout('')
                getTodo()
                
            })
        } catch (error) {
            console.log(error)
        }
        notify()
    },[text, text2,about, todos, getTodo])

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
                                type="number"
                                id="text2"
                                name="input"
                                className="validate raz"
                                value={text2}
                                onChange={e => setText2(e.target.value)}
                            />
                            <label htmlFor="input">Введите стоимость</label>
                            
                        </div>
                        <div className="input-field col s12">
                        <i className="material-icons prefix">mode_edit</i>
                        <textarea id="icon_prefix2" 
                        className="materialize-textarea" 
                        value={about}
                        onChange={e => setAbout(e.target.value)}>  
                        </textarea>
                        <label for="icon_prefix2">Введите дополнительную информацию/пожелания об автомобиле и ваш номер телефона</label>
                        </div>
                    </div>
                    <div className="row">
                    <button
                        className="btn right "
                        onClick={createTodo}
                    >Отправить заявку</button>
                    </div>
                </form>
                
            </div>
            <ToastContainer />
        </div>
    )
}

export default OrderPage