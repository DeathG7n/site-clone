import React from 'react'
import { Reasons } from './reasonStyles'
import axios from 'axios';
import { useState, useEffect } from 'react';
import {DataContext} from '../../api/context'

export default function Reason() {
  const {state: {answer}} = DataContext()
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

  const reason = [
    {
      head: "Constant Development",
      ans: "The goal of the fund is to develop and become the leader in the investment market. The author’s strategies are used to manage assets and risks."
    },
    {
      head: "Reliability",
      ans: "All our investor’s funds are safe and backed up, this makes us a risk-free investment company."
    },
    {
      head: "Legitimacy",
      ans: "We are officially/Fully registered in USA and has official certificate Regulated by Finra."
    },
    {
      head: "Protection",
      ans: "We provide security of deposits and personal information of user’s account, including DDOS-attacks protection."
    },

  ]
  return (
    <Reasons>
            <div>
              <h1>Why fundtrex?</h1>
              <ul>
                {reason.map((r, id)=>{
                  return(
                    <Card r={r} key={id}/>
                  )
                })}
                <div className='answer'>
                  {answer}
                </div>
              </ul>
              
            </div>
            <div>
              <ul>
                {currencies?.map((curr, id) =>{
                  return(
                    <li key={id} style={{borderBottom: currency === curr?.toLowerCase()? "none" : ''}} onClick={()=>handleCurrency(curr?.toLowerCase())}>{curr}</li>
                  )
                })}
              </ul>
              <div>
                {item?.map(coin=>{
                  return(
                    <div key={coin?.id}>
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

export const Card = ({r}) =>{
  const {dispatch} = DataContext()
  const [show, setShow] = useState(false)
  const [screenWidth, setScreenWith] = useState(false);
  
  function handleAnswer(ans){
    dispatch({type: "ANS", payload: ans})
    setShow(!show)
    if(window.innerWidth < 900){
      setScreenWith(true)
    } else{
      setScreenWith(false)
    }
  }
  return(
    <li onClick={()=>handleAnswer(r.ans)}>
      <p style={{color: show ? "#f64803" : "#000"}}>{r.head}</p>
      {screenWidth && <div className='ans' style={{display: show ? "block" : "none"}}>{r.ans}</div>}
    </li>
  )
}
