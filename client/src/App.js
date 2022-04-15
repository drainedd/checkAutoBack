import './App.scss'
import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'

import {AuthContext} from './Context/AuthContext'
import {useAuth} from './hooks/auth.hook'
import { useRotes } from './routes';

import Navbar from './components/Navbar/Navbar';
import MainPage from './pages/MainPage/MainPage';
import OrderPage from './pages/OrderPage/OrderPage';
import SellPage from './pages/SellPage/SellPage';
import SearchPage from './pages/SearchPage/SearchPage';
import chatImg from './chatbot.png'


function App() {

  const { login, logout, token, userId, isReady } = useAuth()
  const isLogin = !!token
  const routes = useRotes(isLogin)

  return (
    <AuthContext.Provider value={{login, logout, token, userId, isReady, isLogin }}>
    <div className="app">
    <div className='chatBot'>
                <a href='https://t.me/CheckAuto116_Bot' target="blank">
                    <img src={chatImg} alt="" width='45px' height='45px'/>
                </a>
            </div>
      <BrowserRouter>
       <Navbar/>
       { routes }
       <Switch>
          <Route path="/SearchPage">
            <SearchPage />
          </Route>
          <Route path="/SellPage">
            <SellPage />
          </Route>
          <Route path="/OrderPage">
            <OrderPage />
          </Route>
          <Route path="/">
            <MainPage/>
          </Route>
       </Switch>
      </BrowserRouter>
    </div>
    </AuthContext.Provider>
  );
}

export default App;