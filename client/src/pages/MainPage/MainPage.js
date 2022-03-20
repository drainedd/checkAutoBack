import React from "react";
import chatImg from './chatbot.png'

import './MainPage.css'

const MainPage = () => {
    
    return (
        <div className="section">
            <div className='chatBot'>
                <a href='https://t.me/CheckAuto116_Bot' target="blank">
                    <img src={chatImg} alt="" width='45px' height='45px'/>
                </a>
            </div>
                <h1>CheckAuto</h1>
                <h4>Мы подберем для вас оптимальное предложение на рынке <br></br>с гарантией технической и юридической чистоты</h4>
                
        </div>
    )
}
export default MainPage