import React, { useContext } from "react";
import {Link} from "react-router-dom"
import { AuthContext } from "../../Context/AuthContext";
import logo from './logo.svg'
import "./Navbar.scss"

const Navbar = () => {
  const {logout, isLogin} = useContext(AuthContext)

  return (
    <nav>
      <div className="nav-wrapper navbar grey lighten-2">
        <a href="/" className="brand-logo">
        <img src={logo} alt="" width='200px' height='80px'/>
        </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="menuButton">
            <Link  to="/admin" style={{color:'black', textDecoration:'none'}} >A</Link>
            </li>
            <li className="menuButton">
              <Link  to="/" style={{color:'black', textDecoration:'none'}} >Главная</Link>
            </li>
            <li className="menuButton">
              <Link to="/SearchPage" style={{color:'black', textDecoration:'none'}}>Найти авто</Link>
            </li>
            <li className="menuButton">
              <Link to="/SellPage" style={{color:'black', textDecoration:'none'}}>Продать авто</Link>
            </li>
            <li className="menuButton">
              <Link to="/OrderPage" style={{color:'black', textDecoration:'none'}}>Заказать подбор</Link>
            </li>
            <li className="menuButton">
              <Link to="/MyOrdersPage" style={{color:'black', textDecoration:'none'}}>Мои объявления</Link>
            </li>
            <li className="menuButton">
              <Link to="/ReviewPage" style={{color:'black', textDecoration:'none'}}>Оставить отзыв</Link>
            </li>
         {
          isLogin
         ? <li >
           <a href="/" onClick={logout} style={{color:'black', textDecoration:'none'}}>Выйти</a>
         </li>
        : 
            <li>
              <a href="/login" style={{color:'black', textDecoration:'none'}}>Войти</a>
            </li>
        }

      </ul>

      </div>
    </nav>
  );
};

export default Navbar;
