import React from 'react'
import {Container} from './transactionsStyles'
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import { DataContext } from '../../../api/context';

export default function Transaction() {
    const {dispatch} = DataContext()
    function handleClick(head){
        dispatch({ type: "HEAD", payload: head});
    }
    const location = useLocation()
    console.log(location.pathname.substring(19))
  return (
    <Container>
        <div>   
            <Link style={{ color: "#10221C", textDecoration: "none" }} to="/user/transactions/deposit-wallet"><button className='button' style={{backgroundColor: location.pathname.substring(19) === "deposit-wallet" ? "rgba(213, 76, 21, 0.5)" : "#f64803"}} onClick={()=> handleClick('Deposit Wallet Transactions')}>Deposit Wallet Transactions</button></Link>
            <Link style={{ color: "#10221C", textDecoration: "none" }} to="/user/transactions/interest-wallet" onClick={()=> handleClick('Interest Wallet Transactions')}><button className='button' style={{backgroundColor: location.pathname.substring(19) === "interest-wallet" ? "rgba(213, 76, 21, 0.5)" : "#f64803"}}>Interest Wallet Transactions</button></Link>
        </div>
        <Routes>
            <Route path='deposit-wallet' element={<DepositTransaction/>} />
            <Route path='interest-wallet' element={<InterestTransaction/>} />
        </Routes>
    </Container>
  )
}

export function DepositTransaction(){
    return(
        <table>
                <thead>
                    <td>Date</td>
                    <td>Transaction ID</td>
                    <td>Amount</td>
                    <td>Wallet</td>
                    <td>Details</td>
                    <td>Post Balance</td>
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
            </table>
    )
}

export function InterestTransaction(){
    return(
        <table>
                <thead>
                    <td>Date</td>
                    <td>Transaction ID</td>
                    <td>Amount</td>
                    <td>Wallet</td>
                    <td>Details</td>
                    <td>Post Balance</td>
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
            </table>
    )
}
