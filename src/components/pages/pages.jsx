import React from 'react'
import Faq from '../constants/faq/faq'
import NavBar from '../constants/navbar/navBar'
import TopBar from '../constants/topbar/topBar'
import { Pages } from './pagesStyles'
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import Choice from '../constants/choice/choice'
import Plan from '../constants/plans/plans'
import Contact from '../constants/contact/contact'
import Footer from '../constants/footer/footer'
import Security from '../constants/security/security'
import { Body } from './landingPage/landingPageStyles'


export default function Page() {
  return (
    <Pages>
        <TopBar/>
        <NavBar/>
        <div className='label'>

        </div>
        <Body>
            <Routes>
                <Route path="faq's" element={<Faq/>}/>
                <Route path='about' element={<Choice/>} />
                <Route path='plans' element={<Plan/>} />
                <Route path='contact' element={<Contact/>} />
                <Route path='security' element={<Security/>} />
            </Routes>
        </Body>
        
        <Footer/>
    </Pages>
  )
}
