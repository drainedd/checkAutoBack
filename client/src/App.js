import './App.scss'
import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import {AuthContext} from './Context/AuthContext'
import {useAuth} from './hooks/auth.hook'

import Navbar from './components/Navbar/Navbar';
import MainPage from './pages/MainPage/MainPage';
import Login from './pages/AuthPage/AuthPage'
import OrderPage from './pages/OrderPage/OrderPage';
import SellPage from './pages/SellPage/SellPage';
import SearchPage from './pages/SearchPage/SearchPage';


function App() {
  const { login, logout, token, userId, isReady } = useAuth()
  const isLogin = !!token
  return (
    <AuthContext.Provider value={{login, logout, token, userId, isReady, isLogin }}>
    <div className="app">
      <BrowserRouter>
       <Navbar/>
       <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/SearchPage">
            <SearchPage />
          </Route>
          <Route path="/SellPage">
            <SellPage />
          </Route>
          <Route path="/OrderPage">
            <OrderPage />
          </Route>
          <Route path="/MainPage">
            <MainPage/>
          </Route>
       </Switch>
      </BrowserRouter>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
function Home() {
  return <div> 
  </div>;
  
}