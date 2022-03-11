import React, { useContext } from "react";
import {Link} from "react-router-dom"
import { AuthContext } from "../../Context/AuthContext";
import logo from './logo.svg'
import "./Navbar.scss"

import MainPage from '../../pages/MainPage/MainPage';
import OrderPage from '../../pages/OrderPage/OrderPage';

const Navbar = () => {
  const {logout, isLogin} = useContext(AuthContext)

  return (
    <nav>
      <div className="nav-wrapper navbar blue">
        <a href="/MainPage" className="brand-logo">
        <img src={logo} alt="" width='200px' height='80px'/>
        </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="menuButton">
              <Link  to="/MainPage" style={{color:'black', textDecoration:'none'}} >Главная</Link>
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
         {
          isLogin
         ? <li>
           <a href="/" onClick={logout}>Выйти</a>
         </li>
        : 
            <li>
              <a href="/login">Войти</a>
            </li>
        }

      </ul>

      </div>
    </nav>
  );
};

export default Navbar;
