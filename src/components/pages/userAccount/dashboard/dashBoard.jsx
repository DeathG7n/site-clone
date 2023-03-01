import React from 'react'
import {Container} from './dashBoardStyles.js'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WalletRoundedIcon from '@mui/icons-material/WalletRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import ViewInArRoundedIcon from '@mui/icons-material/ViewInArRounded';
import CloudDownloadRoundedIcon from '@mui/icons-material/CloudDownloadRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import { DataContext } from '../../../api/context.js';
import axios from 'axios'

export default function Dashboard() {
  const {state:{singleUser}} = DataContext()
  console.log(singleUser)
  return (
    <Container>
        <p>Referral Link</p>
        <div className='link'>https://fundtrexcooperations.com/register/{singleUser?.user_name} <span><ContentCopyRoundedIcon/></span></div>
        <section>
            <div className='box'>
                <div className='value'>
                    <p>Deposit Wallet Balance</p>
                    <h2>${singleUser?.dashboard?.depositWalletBalance}</h2>
                </div>
                <div className='sym'>
                    <div>
                        <AttachMoneyIcon sx={{color: '#f64803', fontSize: '40px'}}/>
                    </div>
                </div>
            </div>
            <div className='box'>
                <div className='value'>
                    <p>Interest Wallet Balance</p>
                    <h2>${singleUser?.dashboard?.interestWalletBalance}</h2>
                </div>
                <div className='sym'>
                    <div>
                        <WalletRoundedIcon sx={{color: '#f64803', fontSize: '40px'}}/>
                    </div>
                </div>
            </div>
            <div className='box'>
                <div className='value'>
                    <p>Total Invest</p>
                    <h2>${singleUser?.dashboard?.totalInvest}</h2>
                </div>
                <div className='sym'>
                    <div>
                        <ViewInArRoundedIcon sx={{color: '#f64803', fontSize: '40px'}}/>
                    </div>
                </div>
            </div>
            <div className='box'>
                <div className='value'>
                    <p>Total Deposit</p>
                    <h2>${singleUser?.dashboard?.totalDeposit}</h2>
                </div>
                <div className='sym'>
                    <div>
                        <AccountBalanceWalletRoundedIcon sx={{color: '#f64803', fontSize: '40px'}}/>
                    </div>
                </div>
            </div>
            <div className='box'>
                <div className='value'>
                    <p>Total Withdraw</p>
                    <h2>${singleUser?.dashboard?.totalWithdraw}</h2>
                </div>
                <div className='sym'>
                    <div>
                        <CloudDownloadRoundedIcon sx={{color: '#f64803', fontSize: '40px'}}/>
                    </div>
                </div>
            </div>
            <div className='box'>
                <div className='value'>
                    <p>Referral Earnings</p>
                    <h2>${singleUser?.dashboard?.referralEarnings}</h2>
                </div>
                <div className='sym'>
                    <div>
                        <GroupRoundedIcon sx={{color: '#f64803', fontSize: '40px'}}/>
                    </div>
                </div>
            </div>
            {window.innerWidth > 900 && <table>
                <thead>
                    <tr>
                        <td>Date</td>
                        <td>Transaction ID</td>
                        <td>Amount</td>
                        <td>Wallet</td>
                        <td>Details</td>
                        <td>Post Balance</td>
                    </tr>
                </thead>
                <tbody>
                    {singleUser?.dashboard?.details?.map((item, id)=>{
                        return(
                            <tr key={id}>
                                 <td>{item?.date ? item?.date : singleUser?.createdAt.substring(10,0)}</td>
                                 <td className='id'>{item?.transactionID ? item?.transactionID : singleUser?._id.substring(12).toUpperCase()}</td>
                                 <td>+${item?.amount}</td>
                                 <td><div className='wallet'>{item?.wallet}</div></td>
                                 <td>{item?.desc}</td>
                                 <td>{item?.postBalance}</td>
                            </tr>
                        )
                    })}
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
        </section>
    </Container>
  )
}
