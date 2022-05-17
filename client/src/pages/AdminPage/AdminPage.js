import React, { useCallback, useEffect, useState } from 'react';
import axios from "axios"
import TodoCard from '../../components/TodoCard';
import CardReviewAdmin from '../../components/ReviewCardAdmin';
import './AdminPage.css'

const AdminPage = () => {
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
  useEffect(()=>{
    getTodo()
},[getTodo])
        
        const [reviews, setReviews] = useState([])
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
 useEffect(()=>{
   getReview()
},[getReview])

    return (
        <div className='mainAdmin'>
            <div>
            <h5 className='headTodo'>Заявки на автоподбор</h5>
            </div>
            <div className='todocard'>
                {todos.map((obj)=>(
                <TodoCard 
                    text={obj.text} 
                    text2={obj.text2}
                    about={obj.about}
                    contact={obj.contact} />
                ))}
            </div>
            {/* ___________________________________________________________________________________________
            <h5 className='headTodo'>Неопубликованные отзывы</h5>
            <div>
                {reviews.map((obj)=>(
                    <CardReviewAdmin 
                    name={obj.name} 
                    text={obj.text}
                    imageUrl={obj.imageUrl} />
                    ))}
                </div> */}
        </div>
    )
}
export default AdminPage