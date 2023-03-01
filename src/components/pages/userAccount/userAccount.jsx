import React, { useEffect, useState } from 'react'
import {TopBar, Container, Hero, Body, Footer} from './userAccountStyles.js'
import Logo from '../../assets/logo.png'
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import HouseIcon from '@mui/icons-material/House';
import Dashboard from './dashboard/dashBoard'
import Deposit from './deposit/deposit.jsx';
import Withdraw from './withdraw/withdraw.jsx';
import Transaction from './transactions/transactions.jsx';
import Users from './referrals/users.jsx';
import Commissions from './referrals/commissions.jsx';
import { DataContext } from '../../api/context.js';
import ProfileSetting from './account/profileSetting.jsx';
import TransferBalance from './account/transferBalance.jsx';
import ChangePassword from './account/changePassword.jsx';
import axios from 'axios';
import DepositModal from './deposit/modal/modal';
import WithdrawModal from './withdraw/modal/modal'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export default function UserAccount() {
    const [show, setShow] = useState(false)
    const userId = localStorage.getItem('userId')
    const [depositModal, setDepositModal] = useState(false)
    const [withdrawModal, setWithdrawModal] = useState(false)
  const {dispatch, state:{heading}} = DataContext()
  function handleClick(head){
    dispatch({ type: "HEAD", payload: head});
  }
  useEffect(()=>{
    const getUser = async ()=>{
        const res = await axios.get(`https://nice-hen-hose.cyclic.app/api/user/${userId}`).then((res)=>{
            dispatch({type: "SINGLEUSER", payload: res.data})
        })
    }
    getUser()
  }, [])
  const handleDepositModal = ()=>{
    setDepositModal(!depositModal)
  }
  const handleWithdrawModal = ()=>{
    setWithdrawModal(!withdrawModal)
  }
    
  return (
    <Container>
        {depositModal && <DepositModal handleModal={handleDepositModal}/>}
        {withdrawModal && <WithdrawModal handleModal={handleWithdrawModal}/>}
        <TopBar>
            <Link to='/'><img src={Logo} alt="logo" /></Link>
            <ul>
                <Link style={{ color: "#10221C", textDecoration: "none" }} to="/user/dashboard"><li onClick={()=> handleClick('Dashboard')}>Dashboard</li></Link>
                <Link style={{ color: "#10221C", textDecoration: "none" }} to="/user/investment"><li onClick={()=> handleClick('Investment Plan')}>Investment</li></Link>
                <Link style={{ color: "#10221C", textDecoration: "none" }} to="/user/deposit"><li onClick={()=> handleClick('Deposit Methods')}>Deposit</li></Link>
                <Link style={{ color: "#10221C", textDecoration: "none" }} to="/user/withdraw"><li onClick={()=> handleClick('Withdraw Money')}>Withdraw</li></Link>
                <Link style={{ color: "#10221C", textDecoration: "none" }} to="/user/transactions/deposit-wallet"><li onClick={()=> handleClick('Deposit Wallet Transactions')}>Transactions</li></Link>
                <li> 
                    Referrals
                    <div className='dropDown'>
                        <ol>
                            <Link style={{ color: "#10221C", textDecoration: "none",}} to="/user/referral/users"><li onClick={()=> handleClick('My Referred Users')}>Referred Users</li></Link>
                            <Link style={{ color: "#10221C", textDecoration: "none", borderTop: "1px dashed #fff" }} to="/user/referral/commissions/deposit"><li onClick={()=> handleClick('Deposit Referral Commissions')}>Referral Commissions</li></Link>
                        </ol>
                    </div>
                </li>
                <li>
                    Account
                    <div className='dropDown'>
                        <ol>
                            <Link style={{ color: "#10221C", textDecoration: "none",}} to="/user/profile-setting"><li onClick={()=> handleClick('Profile Setting')}>Profile Setting</li></Link>
                            <Link style={{ color: "#10221C", textDecoration: "none", borderTop: "1px dashed #fff" }} to="/user/transfer-balance"><li onClick={()=> handleClick('Transfer Balance')}>Transfer Balance</li></Link>
                            <Link style={{ color: "#10221C", textDecoration: "none", borderTop: "1px dashed #fff" }} to="/user/change-password"><li onClick={()=> handleClick('Change Password')}>Change Password</li></Link>
                            <Link style={{ color: "#10221C", textDecoration: "none", borderTop: "1px dashed #fff" }} to="/user/support-ticket"><li onClick={()=> handleClick('Support Ticket')}>Support Ticket</li></Link>
                            <Link style={{ color: "#10221C", textDecoration: "none", borderTop: "1px dashed #fff" }} to="/user/promotional-tool"><li onClick={()=> handleClick('Promotional Tool')}>Promotional Tool</li></Link>
                            <Link style={{ color: "#10221C", textDecoration: "none", borderTop: "1px dashed #fff" }} to="/user/2fa-security"><li onClick={()=> handleClick('2FA Security')}>2FA Security</li></Link>
                            <li>Logout</li>
                        </ol>
                    </div>
                </li>
            </ul>
            {window.innerWidth < 900 && <ul style={{display: show? "block" : "none"}}>
                <Link style={{ color: "#10221C", textDecoration: "none" }} to="/user/dashboard"><li onClick={()=> handleClick('Dashboard')}>Dashboard</li></Link>
                <Link style={{ color: "#10221C", textDecoration: "none" }} to="/user/investment"><li onClick={()=> handleClick('Investment Plan')}>Investment</li></Link>
                <Link style={{ color: "#10221C", textDecoration: "none" }} to="/user/deposit"><li onClick={()=> handleClick('Deposit Methods')}>Deposit</li></Link>
                <Link style={{ color: "#10221C", textDecoration: "none" }} to="/user/withdraw"><li onClick={()=> handleClick('Withdraw Money')}>Withdraw</li></Link>
                <Link style={{ color: "#10221C", textDecoration: "none" }} to="/user/transactions/deposit-wallet"><li onClick={()=> handleClick('Deposit Wallet Transactions')}>Transactions</li></Link>
                <li> 
                    Referrals
                    <div className='dropDown'>
                        <ol>
                            <Link style={{ color: "#10221C", textDecoration: "none",}} to="/user/referral/users"><li onClick={()=> handleClick('My Referred Users')}>Referred Users</li></Link>
                            <Link style={{ color: "#10221C", textDecoration: "none", borderTop: "1px dashed #fff" }} to="/user/referral/commissions/deposit"><li onClick={()=> handleClick('Deposit Referral Commissions')}>Referral Commissions</li></Link>
                        </ol>
                    </div>
                </li>
                <li>
                    Account
                    <div className='dropDown'>
                        <ol>
                            <Link style={{ color: "#10221C", textDecoration: "none",}} to="/user/profile-setting"><li onClick={()=> handleClick('Profile Setting')}>Profile Setting</li></Link>
                            <Link style={{ color: "#10221C", textDecoration: "none", borderTop: "1px dashed #fff" }} to="/user/transfer-balance"><li onClick={()=> handleClick('Transfer Balance')}>Transfer Balance</li></Link>
                            <Link style={{ color: "#10221C", textDecoration: "none", borderTop: "1px dashed #fff" }} to="/user/change-password"><li onClick={()=> handleClick('Change Password')}>Change Password</li></Link>
                            <Link style={{ color: "#10221C", textDecoration: "none", borderTop: "1px dashed #fff" }} to="/user/support-ticket"><li onClick={()=> handleClick('Support Ticket')}>Support Ticket</li></Link>
                            <Link style={{ color: "#10221C", textDecoration: "none", borderTop: "1px dashed #fff" }} to="/user/promotional-tool"><li onClick={()=> handleClick('Promotional Tool')}>Promotional Tool</li></Link>
                            <Link style={{ color: "#10221C", textDecoration: "none", borderTop: "1px dashed #fff" }} to="/user/2fa-security"><li onClick={()=> handleClick('2FA Security')}>2FA Security</li></Link>
                            <li>Logout</li>
                        </ol>
                    </div>
                </li>
            </ul>}
      <div className='menu'>
        <MenuOpenIcon sx={{color: "#000", fontSize: "25px"}} onClick={()=>setShow(!show)} />
      </div>
        </TopBar>
        <Hero>
            <h1>{heading || 'Dashboard'}</h1>
            <p><HouseIcon sx={{fontSize: "24px", color: '#f64803', marginBottom: "-5px"}}/>Home - {heading || 'Dashboard'}</p>
        </Hero>
        <Body>
            <Routes>
                <Route path='dashboard' element={<Dashboard/>} />
                <Route path='deposit' element={<Deposit handleModal={handleDepositModal}/>} />
                <Route path='withdraw' element={<Withdraw handleModal={handleWithdrawModal}/>} />
                <Route path='transactions/*' element={<Transaction/>} />
                <Route path='referral/users' element={<Users/>} />
                <Route path='referral/commissions/*' element={<Commissions/>} />
                <Route path='profile-setting' element={<ProfileSetting/>} />
                <Route path='transfer-balance' element={<TransferBalance />} />
                <Route path='change-password' element={<ChangePassword/>} />
            </Routes>
        </Body>
        <Footer>
            <div>
                <img src={Logo} alt="logo" />
                <ul>
                    <li>Privacy & Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            <p>© 2023 <span>Fundtrex</span>. All rights reserved</p>
        </Footer>
    </Container>
  )
}
