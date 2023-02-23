import React from 'react'
import {Container} from './navBarStyles'
import Logo from '../../assets/logo.png'
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <Container>
      <img src={Logo} alt="logo" />
      <ul>
        <Link style={{ color: "#10221C", textDecoration: "none" }} to="/"><li>Home</li></Link>
        <Link style={{ color: "#10221C", textDecoration: "none" }} to="/about"><li>About Us</li></Link>
        <Link style={{ color: "#10221C", textDecoration: "none" }} to="/plans"><li>Plans</li></Link>
        <Link style={{ color: "#10221C", textDecoration: "none" }} to="/faq's"><li>FAQ's</li></Link>
        <Link style={{ color: "#10221C", textDecoration: "none" }} to="/contact"><li>Contact Us</li></Link>
        <Link style={{ color: "#10221C", textDecoration: "none" }} to="/sign-up"><li>Register</li></Link>
        <Link style={{ color: "#10221C", textDecoration: "none" }} to="/login"><li>Login</li></Link>
      </ul>
    </Container>
  )
}

export default NavBar