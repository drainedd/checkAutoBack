
import './ReviewCardAdmin.css';



function ReviewCardAdmin (props){
    return(
        <div className="ReviewCardAdmin ">
            <img className='carImage' width={210} height={134} src='img/no-photo2.jpg' alt="Car"/>
            <div>
            <h6 className="nameRev">Имя пользователя: {props.name}</h6>
            </div>
            <div className="Info">
                <h6 className="informationAdmin">Текст отзыва: {props.text}</h6>
                <button className="btn rev">Опубликовать отзыв</button>
            </div>
            
        </div>
        
    )
}
export default ReviewCardAdmin;