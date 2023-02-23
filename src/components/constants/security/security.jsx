import React from 'react'
import Cert from '../../assets/cert-1.png'
import { Securit } from './securityStyles'
import LocalAtmRoundedIcon from '@mui/icons-material/LocalAtmRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';


export default function Security() {
  return (
    <Securit>
    <div>
      <img src={Cert} alt="certificate" />
    </div>
    <div>
      <h1>Our Approach To Security</h1>
      <p>The main directions of the company’s development will be always focused on social and financial security of customers.</p>
      <div>
        <div>
          <div className='circle'>
            <LocalAtmRoundedIcon sx={{fontSize: "30px", color: "#f64803", position: "absolute", top: "19%", left: "19%"}}/>
          </div>
        </div>
        <div>
          <h2>Instant Withdrawal</h2>
          <p>Withdrawals from fundtrexcooperations.com wallet are sent to your external wallet instantly from the time of your withdrawal.</p>
        </div>
      </div>
      <div>
        <div>
          <div className='circle'>
            <MenuRoundedIcon sx={{fontSize: "30px", color: "#f64803", position: "absolute", top: "19%", left: "19%"}}/>
          </div>
        </div>
        <div>
          <h2>Skilled Management</h2>
          <p>Cooperating with us, you receives the opportunities for improvement and development of the own mining and investments skills.</p>
        </div>
      </div>
      <div>
        <div>
          <div className='circle'>
            <AccessTimeRoundedIcon sx={{fontSize: "30px", color: "#f64803", position: "absolute", top: "19%", left: "19%"}}/>
          </div>
        </div>
        <div>
          <h2>Continuous Monitoring</h2>
          <p>Get detailed statistics of your plans purchased with fundtrexcooperations.com and the daily returns you are getting from them.</p>
        </div>
      </div>
    </div>
  </Securit>
  )
}
