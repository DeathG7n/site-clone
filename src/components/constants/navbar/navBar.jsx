import React, { useState } from 'react'
import {Container} from './navBarStyles'
import Logo from '../../assets/logo.png'
import {Link} from "react-router-dom";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

function NavBar() {
  const [show, setShow] = useState(false)
  return (
    <Container>
      <Link to='/'><img src={Logo} alt="logo" /></Link>
      <ul>
        <Link style={{ color: "#10221C", textDecoration: "none" }} to="/"><li>Home</li></Link>
        <Link style={{ color: "#10221C", textDecoration: "none" }} to="/about"><li>About Us</li></Link>
        <Link style={{ color: "#10221C", textDecoration: "none" }} to="/plans"><li>Plans</li></Link>
        <Link style={{ color: "#10221C", textDecoration: "none" }} to="/faq's"><li>FAQ's</li></Link>
        <Link style={{ color: "#10221C", textDecoration: "none" }} to="/contact"><li>Contact Us</li></Link>
        <Link style={{ color: "#10221C", textDecoration: "none" }} to="/sign-up"><li>Register</li></Link>
        <Link style={{ color: "#10221C", textDecoration: "none" }} to="/login"><li>Login</li></Link>
      </ul>
      {window.innerWidth < 900 && <ul style={{display: show? "block" : "none"}}>
        <Link style={{ color: "#10221C", textDecoration: "none" }} to="/"><li>Home</li></Link>
        <Link style={{ color: "#10221C", textDecoration: "none" }} to="/about"><li>About Us</li></Link>
        <Link style={{ color: "#10221C", textDecoration: "none" }} to="/plans"><li>Plans</li></Link>
        <Link style={{ color: "#10221C", textDecoration: "none" }} to="/faq's"><li>FAQ's</li></Link>
        <Link style={{ color: "#10221C", textDecoration: "none" }} to="/contact"><li>Contact Us</li></Link>
        <Link style={{ color: "#10221C", textDecoration: "none" }} to="/sign-up"><li>Register</li></Link>
        <Link style={{ color: "#10221C", textDecoration: "none" }} to="/login"><li>Login</li></Link>
      </ul>}
      <div className='menu'>
        <MenuOpenIcon sx={{color: "#fff", fontSize: "25px"}} onClick={()=>setShow(!show)} />
      </div>
    </Container>
  )
}

export default NavBar