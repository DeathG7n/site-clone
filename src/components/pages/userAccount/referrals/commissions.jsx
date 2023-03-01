import React from 'react'
import {Container} from './referralStyles'
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import { DataContext } from '../../../api/context';

export default function Commissions() {
    const {dispatch, state: {singleUser}} = DataContext()
    function handleClick(head){
        dispatch({ type: "HEAD", payload: head});
    }
    const location = useLocation()
    console.log(location.pathname.substring(27))
  return (
    <Container>
        <section>   
            <Link style={{ color: "#10221C", textDecoration: "none" }} to="/user/referral/commissions/deposit"><button className='button' style={{backgroundColor: location.pathname.substring(27) === "deposit" ? "rgba(213, 76, 21, 0.5)" : "#f64803"}} onClick={()=> handleClick('Deposit Referral Commissions')}>Deposit Commission</button></Link>
            <Link style={{ color: "#10221C", textDecoration: "none" }} to="/user/referral/commissions/interest"><button className='button' style={{backgroundColor: location.pathname.substring(27) === "interest" ? "rgba(213, 76, 21, 0.5)" : "#f64803"}} onClick={()=> handleClick('Interest Referral Commissions')}>Interest Commission</button></Link>
            <Link style={{ color: "#10221C", textDecoration: "none" }} to="/user/referral/commissions/invest"><button className='button' style={{backgroundColor: location.pathname.substring(27) === "invest" ? "rgba(213, 76, 21, 0.5)" : "#f64803"}} onClick={()=> handleClick('Invest Referral Commissions')}>Invest Commission</button></Link>
        </section>
        <Routes>
            <Route path='deposit' element={<DepositCommissions/>} />
            <Route path='interest' element={<InterestCommissions/>} />
            <Route path='invest' element={<InvestCommissions/>} />
        </Routes>
    </Container>
  )
}

export function DepositCommissions(){
    const {state: {singleUser}} = DataContext()
    return(
        <>
        {window.innerWidth > 900 &&<table>
                <thead>
                    <td>Date</td>
                    <td>From</td>
                    <td>Level</td>
                    <td>Percent</td>
                    <td>Amount</td>
                    <td>Type</td>
                </thead>
                <tbody>
                    <tr>
                        <td>Date</td>
                        <td>Transaction ID</td>
                        <td>Amount</td>
                        <td>Wallet</td>
                        <td>Details</td>
                        <td>Post Balance</td>
                    </tr>
                </tbody>
        </table>}
        {window.innerWidth < 900 && <main>
            {singleUser?.dashboard?.details?.map((item, id)=>{
                return(
                    <div key={id}>
                         <p><span>Date</span><span>{item?.date ? item?.date : singleUser?.createdAt.substring(10,0)}</span></p>
                         <p><span>Transaction ID</span><span className='id'>{item?.transactionID ? item?.transactionID : singleUser?._id.substring(12).toUpperCase()}</span></p>
                         <p><span>Amount</span><span>+${item?.amount}</span></p>
                         <p><span>Wallet</span><span><div className='wallet'>{item?.wallet}</div></span></p>
                         <p><span>Details</span><span>{item?.desc}</span></p>
                         <p><span>Post Balance</span><span>{item?.postBalance}</span></p>
                    </div>
                    )
                })}
        </main>}
        </>
        
    )
}

export function InterestCommissions(){
    const {state: {singleUser}} = DataContext()
    return(
        <>
        {window.innerWidth > 900 && <table>
                <thead>
                    <td>Date</td>
                    <td>From</td>
                    <td>Level</td>
                    <td>Percent</td>
                    <td>Amount</td>
                    <td>Type</td>
                </thead>
                <tbody>
                    <tr>
                        <td>Date</td>
                        <td>Transaction ID</td>
                        <td>Amount</td>
                        <td>Wallet</td>
                        <td>Details</td>
                        <td>Post Balance</td>
                    </tr>
                </tbody>
        </table>}
        {window.innerWidth < 900 && <main>
            {singleUser?.dashboard?.details?.map((item, id)=>{
                return(
                    <div key={id}>
                         <p><span>Date</span><span>{item?.date ? item?.date : singleUser?.createdAt.substring(10,0)}</span></p>
                         <p><span>Transaction ID</span><span className='id'>{item?.transactionID ? item?.transactionID : singleUser?._id.substring(12).toUpperCase()}</span></p>
                         <p><span>Amount</span><span>+${item?.amount}</span></p>
                         <p><span>Wallet</span><span><div className='wallet'>{item?.wallet}</div></span></p>
                         <p><span>Details</span><span>{item?.desc}</span></p>
                         <p><span>Post Balance</span><span>{item?.postBalance}</span></p>
                    </div>
                    )
                })}
        </main>}
        </>)
}

export function InvestCommissions(){
    const {state: {singleUser}} = DataContext()
    return(
        <>
        {window.innerWidth > 900 &&<table>
                <thead>
                    <td>Date</td>
                    <td>From</td>
                    <td>Level</td>
                    <td>Percent</td>
                    <td>Amount</td>
                    <td>Type</td>
                </thead>
                <tbody>
                    <tr>
                        <td>Date</td>
                        <td>Transaction ID</td>
                        <td>Amount</td>
                        <td>Wallet</td>
                        <td>Details</td>
                        <td>Post Balance</td>
                    </tr>
                </tbody>
        </table>}
        {window.innerWidth < 900 && <main>
            {singleUser?.dashboard?.details?.map((item, id)=>{
                return(
                    <div key={id}>
                         <p><span>Date</span><span>{item?.date ? item?.date : singleUser?.createdAt.substring(10,0)}</span></p>
                         <p><span>Transaction ID</span><span className='id'>{item?.transactionID ? item?.transactionID : singleUser?._id.substring(12).toUpperCase()}</span></p>
                         <p><span>Amount</span><span>+${item?.amount}</span></p>
                         <p><span>Wallet</span><span><div className='wallet'>{item?.wallet}</div></span></p>
                         <p><span>Details</span><span>{item?.desc}</span></p>
                         <p><span>Post Balance</span><span>{item?.postBalance}</span></p>
                    </div>
                    )
                })}
        </main>}
        </>
        )
}
