
import './ReviewCard.css';



function ReviewCard (props){
    return(
        <div className="ReviewCard ">
            <img className='carImage' width={205} height={154} src={props.imageUrl} alt="Car"/>
            <div>
            <h6 className="name">{props.name}</h6>
            </div>
            <div className="Info">
                <div className="information">{props.text}</div>
            </div>
        </div>
        
    )
}
export default ReviewCard;