import React from 'react'
import {Container} from './topBarStyles'
import { Link } from 'react-router-dom'

function TopBar() {
  return (
    <Container>
      <a href="info@fundtrexcooperations.com">info@fundtrexcooperations.com</a>
      <button><Link style={{ color: "#fff", textDecoration: "none" }} to="/sign-up">Get Started</Link></button>
    </Container>
  )
}

export default TopBar