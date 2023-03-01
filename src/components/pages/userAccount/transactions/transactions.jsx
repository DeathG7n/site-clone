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
        <section>   
            <Link style={{ color: "#10221C", textDecoration: "none" }} to="/user/transactions/deposit-wallet"><button className='button' style={{backgroundColor: location.pathname.substring(19) === "deposit-wallet" ? "rgba(213, 76, 21, 0.5)" : "#f64803"}} onClick={()=> handleClick('Deposit Wallet Transactions')}>Deposit Wallet Transactions</button></Link>
            <Link style={{ color: "#10221C", textDecoration: "none" }} to="/user/transactions/interest-wallet" onClick={()=> handleClick('Interest Wallet Transactions')}><button className='button' style={{backgroundColor: location.pathname.substring(19) === "interest-wallet" ? "rgba(213, 76, 21, 0.5)" : "#f64803"}}>Interest Wallet Transactions</button></Link>
        </section>
        <Routes>
            <Route path='deposit-wallet' element={<DepositTransaction/>} />
            <Route path='interest-wallet' element={<InterestTransaction/>} />
        </Routes>
    </Container>
  )
}

export function DepositTransaction(){
    const {state: {singleUser}} = DataContext()
    return(
        <>
            {window.innerWidth > 900 && <table>
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

export function InterestTransaction(){
    const {state: {singleUser}} = DataContext()
    return(
        <>
            {window.innerWidth > 900 && <table>
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
