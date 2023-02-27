import React from 'react'
import { Footers } from './footerStyles'
import Logo from '../../assets/logo.png'
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <> 
        <Footers>
            <div className='logo'>
                <img src={Logo} alt="logo" />
                <p>We believe in the future of cryptocurrency, because it entered the exchange markets on a strong note.</p>
                <p>Phone: +1 (809) 634‑7828</p>
            </div>
            <div>
                <h4>COMPANY</h4>
                <span></span>
                <ul>
                    <Link style={{ color: "#10221C", textDecoration: "none" }} to="/"><li>Home</li></Link>
                    <Link style={{ color: "#10221C", textDecoration: "none" }} to="/about"><li>About Us</li></Link>
                    <Link style={{ color: "#10221C", textDecoration: "none" }} to="/plans"><li>Plans</li></Link>
                    <Link style={{ color: "#10221C", textDecoration: "none" }} to="/faq's"><li>FAQ's</li></Link>
                </ul>
            </div>
            <div>
                <h4>LEGAL</h4>
                <span></span>
                <ul>
                    <Link style={{ color: "#10221C", textDecoration: "none" }} to="/security"><li>Documents</li></Link>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                    <Link style={{ color: "#10221C", textDecoration: "none" }} to="/contact"><li>Contact Us</li></Link>
                </ul>
            </div>
            <div>
                <h4>QUICK LINKS</h4>
                <span></span>
                <ul>
                    <Link style={{ color: "#10221C", textDecoration: "none" }} to="/login"><li>Login</li></Link>
                    <Link style={{ color: "#10221C", textDecoration: "none" }} to="/sign-up"><li>Register</li></Link>
                    <li>Investment Plans</li>
                    <li>Home</li>
                </ul>
            </div>
        </Footers>
        <section>
            <p>Copyright © 2022 All right reserved by Fundrex Cooperations </p> 
            <p> Education Base by Acme Themes</p>
        </section>
  </>
  )
}
