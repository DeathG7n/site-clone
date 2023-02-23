import React from 'react'
import { Reasons } from './reasonStyles'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Reason() {
  const [item, setItem] = useState([])
  const [currency, setCurrency] = useState('usd')
  const currencies = ['USD', 'EUR', 'GBP', 'AUD', 'JPY']
  useEffect(()=>{
    axios({
    method: 'get',
    url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=1&sparkline=false`,
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(function (response) {
      console.log(response?.data)
      setItem(response?.data)
    });
  }, [currency]
)
  
  function handleCurrency(curr){
    setCurrency(curr)
  }
  return (
    <Reasons>
            <div>
              <h1>Why fundtrex?</h1>
              <ul>
                <li>Constant Development
                </li>
                <li>Reliability
                  {/* <div>All our investor’s funds are safe and backed up, this makes us a risk-free investment company.</div> */}
                </li>
                <li>Legitimacy
                  {/* <div>We are officially/Fully registered in USA and has official certificate Regulated by Finra. .</div> */}
                </li>
                <li>Protection
                  {/* <div>We provide security of deposits and personal information of user’s account, including DDOS-attacks protection.</div> */}
                </li>
              </ul>
              <div>The goal of the fund is to develop and become the leader in the investment market. The author’s strategies are used to manage assets and risks.</div>
            </div>
            <div>
              <ul>
                {currencies?.map(curr =>{
                  return(
                    <li style={{borderBottom: currency === curr?.toLowerCase()? "none" : ''}} onClick={()=>handleCurrency(curr?.toLowerCase())}>{curr}</li>
                  )
                })}
              </ul>
              <div>
                {item?.map(coin=>{
                  return(
                    <div>
                      <img src={coin?.image} alt="crypto-coin" />
                      <p>{coin?.name}({coin?.symbol?.toUpperCase()})</p>
                      <p>${coin?.current_price}</p>
                      <span style={{
                      color: coin?.market_cap_change_percentage_24h?.toString()?.charAt(0) === '-' ? "red" : "green"
                    }}>{coin?.market_cap_change_percentage_24h?.toString()?.substr(0,4)}%</span>
                    </div>
                  )
                })}
                  </div>
            </div>
          </Reasons>
  )
}
