import React from "react";
import CardReview from '../../components/ReviewCard';

import './MainPage.css'

const MainPage = () => {
    const [review, setReview] = React.useState([])
    React.useEffect(()=>{
      fetch('https://61fd5863f62e220017ce449d.mockapi.io/review')
      .then((res)=>{
        return res.json();
      })
      .then((json)=>{
        setReview(json);
      })
    },[]);
    
    return (
        
        <div>
            <div className="section">
                <h1>CheckAuto</h1>
                <h4>Мы подберем для вас оптимальное предложение на рынке <br></br>с гарантией технической и юридической чистоты</h4>
            </div>  
            <div className="">
                <h1 className="">Отзывы CheckAuto</h1>
                <div className="cards">
                {review.map((obj)=>(
                    <CardReview 
                    name={obj.name} 
                    text={obj.text}
                    imageUrl={obj.imageUrl} />
                    ))}
                </div>
                
            </div> 
        </div>
        
    )
}
export default MainPage