import React, {useEffect} from 'react'
import Hero from '../../constants/hero/hero'
import NavBar from '../../constants/navbar/navBar'
import TopBar from '../../constants/topbar/topBar'
import {Body, 
  Button, 
  Table, 
  Box,
} from './landingPageStyles'

import Groups2SharpIcon from '@mui/icons-material/Groups2Sharp';
import PublicSharpIcon from '@mui/icons-material/PublicSharp';
import AttachMoneySharpIcon from '@mui/icons-material/AttachMoneySharp';
import LocalAtmSharpIcon from '@mui/icons-material/LocalAtmSharp';

import Plan from '../../constants/plans/plans'
import Choice from '../../constants/choice/choice'
import Security from '../../constants/security/security'
import Reason from '../../constants/reason/reason'
import Development from '../../constants/development/development'
import Affiliate from '../../constants/affiliate/affiliate'
import Review from '../../constants/review/review'
import Faq from '../../constants/faq/faq'
import Contact from '../../constants/contact/contact'
import Footer from '../../constants/footer/footer'
import axios from 'axios'
import { useState } from 'react'

export default function LandingPage() {
  const [coins, setCoins] = useState([])
  const [crypto, setCrypto] = useState([])
  useEffect(()=> {

    axios({
      method: 'get',
      url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false',
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(function (response) {
        setCoins(response?.data)
      });
      axios({
        method: 'get',
        url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then(function (response) {
          setCrypto(response?.data)
        });  
  }, [])

  
  
  return (
    <>
        <TopBar/>
        <NavBar/>
        <Hero/>
        <Body>
          <Button>
            <div>Previous</div>
            <div>Next</div>
          </Button>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Changes 24h</th>
                <th>Market CAP</th>
                <th>Volume</th>
                <th>Supply</th>
              </tr>
              
            </thead>
            <tbody>
              {coins?.map(coin=>{
                return(
                  <tr key={coin?.id}>
                    <td>{coin?.market_cap_rank}</td>
                    <td>
                      <div>
                        <span><img src={coin?.image} alt={coin?.symbol} />({coin?.symbol?.toUpperCase()})</span>
                        <p>{coin?.name}</p>
                      </div>
                    </td>
                    <td>${coin?.current_price}</td>
                    <td style={{
                      color: coin?.market_cap_change_percentage_24h?.toString()?.charAt(0) === '-' ? "red" : "green"
                    }}>{coin?.market_cap_change_percentage_24h?.toString()?.substr(0,4)}%</td>
                    <td>${coin?.market_cap}</td>
                    <td>${coin?.total_volume}</td>
                    <td>{coin?.total_supply || 0}{" "}{coin?.symbol?.toUpperCase()}</td>
                  </tr>
                  )
              })}
            </tbody>
          </Table>
          <Button>
            <div>Previous</div>
            <div>Next</div>
          </Button>
          <Box>
            <div>
              <h2><PublicSharpIcon sx={{fontSize: '45px'}}/>395+</h2>
              <p>Days Online</p>
            </div>
            <div>
              <h2><Groups2SharpIcon sx={{fontSize: '45px'}}/>500+</h2>
              <p>Total Accounts</p>
            </div>
            <div>
              <h2><AttachMoneySharpIcon sx={{fontSize: '45px'}}/>50k+</h2>
              <p>Total Deposited</p>
            </div>
            <div>
              <h2><LocalAtmSharpIcon sx={{fontSize: '45px'}}/>12m+</h2>
              <p>Total Withdraw</p>
            </div>
          </Box>
          <Plan/>
          <Choice/>
          <Security/>
          <Reason/>
          <Development/>
          <Affiliate/>
          <Review/> 
          <Faq/>
          <Contact/>
        </Body>
        <Footer/>
    </>
  )
}
