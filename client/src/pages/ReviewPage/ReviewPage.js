import axios from "axios"
import React, { useState, useCallback, useEffect } from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './ReviewPage.css'

const ReviewPage = () => {
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    
    const [reviews, setReviews] = useState([])

    const notify = () => {
        toast.success("Отзыв отправлен!", {position: toast.POSITION.TOP_CENTER});
    }

    const getReview = useCallback(async () => {
        try {
           await axios.get('/api/review',{
               headers:{
                    'Content-Type': 'application/json'
               },
               
           }) 
           .then((responce) => setReviews(responce.data))
        } catch (error) {
            console.log(error)
        }
    },[])

    const createReview = useCallback(async () => {
        
        if (!text) return null
        try {
            await axios.post('/api/review/add',{name,text}, {
                headers:{'Content-Type': 'application/json'}
            })
            .then((response)=> {
                setReviews([...reviews], response.data)
                setName('')
                setText('')
                getReview()
               
            })
        } catch (error) {
            console.log(error)
        }
        notify()
    },[name, text, reviews, getReview])

    useEffect(()=>{
        getReview()
    },[getReview])

    return(
        <div className="container">
            <div className="main-page">
                <h4>Оставить отзыв</h4>
                <form className="form form-login" onSubmit={e => e.preventDefault()}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                type="text"
                                id="name"
                                name="input"
                                className="validate"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <label htmlFor="input">Представьтесь, пожалуйста</label>
                        </div>
                        <div className="input-field col s12">
                        <i className="material-icons prefix">mode_edit</i>
                        <textarea id="icon_prefix2" 
                        className="materialize-textarea" 
                        value={text}
                        onChange={e => setText(e.target.value)}>  
                        </textarea>
                        <label for="icon_prefix2">Ваше мнение о нашей работе</label>
                        </div>
                    </div>
                    <div className="row">
                    <button
                        className="btn right "
                        onClick={createReview}
                    >Отправить отзыв
                    </button>
                   
                    </div>
                </form>
                
            </div>
            <ToastContainer />
        </div>
    )
}

export default ReviewPage