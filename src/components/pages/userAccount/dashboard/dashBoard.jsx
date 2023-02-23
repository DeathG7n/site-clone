import React from 'react'
import {Container} from './dashBoardStyles.js'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WalletRoundedIcon from '@mui/icons-material/WalletRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import ViewInArRoundedIcon from '@mui/icons-material/ViewInArRounded';
import CloudDownloadRoundedIcon from '@mui/icons-material/CloudDownloadRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';

export default function Dashboard() {
  return (
    <Container>
        <p>Referral Link</p>
        <div className='link'>https://fundtrexcooperations.com/register/DeathG7n <span><ContentCopyRoundedIcon/></span></div>
        <section>
            <div className='box'>
                <div className='value'>
                    <p>Deposit Wallet Balance</p>
                    <h2>$5</h2>
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
                    <h2>$5</h2>
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
                    <h2>$5</h2>
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
                    <h2>$5</h2>
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
                    <h2>$5</h2>
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
                    <h2>$5</h2>
                </div>
                <div className='sym'>
                    <div>
                        <GroupRoundedIcon sx={{color: '#f64803', fontSize: '40px'}}/>
                    </div>
                </div>
            </div>
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
        </section>
    </Container>
  )
}
