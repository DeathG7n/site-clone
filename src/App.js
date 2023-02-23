import React from 'react'
import LandingPage from './components/pages/landingPage/landingPage'
import {  BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Page from './components/pages/pages';
import Register from './components/constants/register/register';
import Login from './components/constants/login/login';
import UserAccount from './components/pages/userAccount/userAccount.jsx'
import Provider from "./components/api/context";
function App() {
  return (
    <>
      <Provider>
        <Router>
          <Routes>
            <Route path='/'element={<LandingPage/>}/>
            <Route path='/*'element={<Page/>}/>
            <Route path='/sign-up' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/user*' element={<UserAccount/>} />
          </Routes>
      </Router>
      </Provider>
    </>
  )
}

export default App