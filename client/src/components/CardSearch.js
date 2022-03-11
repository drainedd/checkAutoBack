import { useState } from 'react';
import './CardFind.css';
import Modal from './modal/modal';



function Card (props){
    const [modalActive, setModalActive] = useState(false)
    return(
        <div className="card">
            <img className='carImage' width={205} height={154} src={props.imageUrl} alt="Car"/>
            <div>
            <h6 className="title">{props.nameMark}</h6>
            <div className="information">{props.infoAbout}</div>
            <div className="information2">{props.infoAbout2}</div>
            </div>
            <div className="cardInfo">
                <div className="price">{props.price}</div>
                <div className="year">{props.year}</div>
                <div className="mileage">{props.mileage}</div>
            </div>
        <button className="contact" onClick={() => setModalActive(true)}>Показать телефон</button>
        <Modal active={modalActive} setActive={setModalActive}>
        <div className='modalCard'>
        <img className='carImage' width={185} height={134} src={props.imageUrl} alt="Car"/>
        <div className="titleModal">
            <h4>{props.nameMark}<span> • </span>{props.price}</h4>
            <div className='infoModal'>
            <div className="informationModal">{props.infoAbout}</div>
            <div className="information2Modal">{props.infoAbout2}</div>
            </div>
        </div>
        <div className='telCity'>
        <div className='telephone'>{props.telephone}</div>
        <div className='city'>{props.city}</div>
        </div>
        </div> 
        </Modal>
        </div>
        
    )
}
export default Card;