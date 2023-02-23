import React from 'react'
import { Container, Box } from './heroStyles'
import SecurityIcon from '@mui/icons-material/Security';
import HttpsIcon from '@mui/icons-material/Https';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <Container>
        <h1>Safe And Secure Crypto Currency Mining And Investment</h1>
        <p>Cooperating with us, you receive the opportunities for improvement and development of your own mining and investments skills..</p>
        <button><Link style={{ color: "#fff", textDecoration: "none" }} to="/sign-up">Create an account</Link></button>
        <Box>
          <div>
            <h1><SecurityIcon sx={{fontSize: "40px"}}/>Security</h1>
            <p>We provide security of deposits and personal information of user’s account, including DDOS-attacks protection.</p>
            <span style={{top: "55%"}}><SecurityIcon sx={{fontSize: "80px", color: '#4c4c4c'}}/></span>
          </div>
          <div>
              <h1><HttpsIcon sx={{fontSize: "40px"}}/>Privacy</h1>
              <p>All our investor’s funds are safe and backed up, this makes Fundtrex a risk-free investment company.</p>
              <span style={{top: "35%"}}><HttpsIcon sx={{fontSize: "80px", color: '#4c4c4c'}}/></span>
          </div>
          <div>
              <h1><VerifiedIcon sx={{fontSize: "40px"}}/>Industry Certified </h1>
              <p>Fundtrex is officially/fully registered in USA and has an official certificate regulated by Finra.</p>
              <span style={{top: "15%"}}><VerifiedIcon sx={{fontSize: "80px", color: '#4c4c4c'}}/></span>
          </div>
        </Box>
        
    </Container>
  )
}
