import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import  Cyber  from '../../assets/cybersecurity-img.jpg'
import { Affiliates } from './affiliateStyles';

export default function Affiliate() {
  return (
    <Affiliates>
            <h1>Affiliate Program</h1>
            <p>We look not only for investors – but we also look for partners! The basis of our company is mutually beneficial cooperation at all levels. We created an affiliate program that is aimed at additional income. Place your link on social networks, blogs, and websites and invite people to us. In our turn, we will pay you a refback for every attracted deposit.</p>
            <span>
              <div>
                <div><CheckIcon sx={{color: "#f64803", fontSize: '30px'}}/>Easy Access</div>
                <div><CheckIcon sx={{color: "#f64803", fontSize: '30px'}}/>Profitable partnership</div>
                <div><CheckIcon sx={{color: "#f64803", fontSize: '30px'}}/>Instant Payout</div>
                <div><CheckIcon sx={{color: "#f64803", fontSize: '30px'}}/>Reliability</div>
                <div><CheckIcon sx={{color: "#f64803", fontSize: '30px'}}/>24/7 Support</div>
                <div><CheckIcon sx={{color: "#f64803", fontSize: '30px'}}/>Availability</div>
                <div><CheckIcon sx={{color: "#f64803", fontSize: '30px'}}/>Daily Earnings</div>
                <div><CheckIcon sx={{color: "#f64803", fontSize: '30px'}}/>Protection from DDOS</div>
                <div><CheckIcon sx={{color: "#f64803", fontSize: '30px'}}/>Long-term goals</div>
                <div><CheckIcon sx={{color: "#f64803", fontSize: '30px'}}/>DETAILED STATISTICS</div>
              </div>
              <div><img src={Cyber} alt="cyber"/></div>
            </span>
          </Affiliates>
  )
}
