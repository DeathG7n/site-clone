import React,{useEffect} from 'react'
import {Container} from './adminStyles'
import SearchIcon from '@mui/icons-material/Search';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import HomeIcon from '@mui/icons-material/Home';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import axios from 'axios';
import { DataContext } from '../../api/context';
import {Routes, Route, Link} from 'react-router-dom'

export default function Admin() {
    const {dispatch, state:{users}} = DataContext()
    useEffect(()=>{
        const getUsers = async ()=>{
            const res = await axios.get(`https://nice-hen-hose.cyclic.app/api/users`).then((res)=>{
                dispatch({type: "USERS", payload: res.data})
            })
        }
        getUsers()
    }, [])
    console.log(users)
  return (
    <Container>
        <main>
            <div className='nav'>
                <h3>Admin Dashboard</h3>
                <ul>
                    <Link style={{ color: "#fff", textDecoration: "none" }} to="/admin"><li><HomeIcon/> <span>Home</span></li></Link>
                    <Link style={{ color: "#fff", textDecoration: "none" }} to="/admin/users"><li><Diversity2Icon/> <span>Users</span></li></Link>
                    <li><AutoModeIcon/><span>Pending</span></li>
                    <li><RemoveDoneIcon/><span>Processed</span></li>
                    <li><HistoryEduIcon/><span>History</span></li>
                </ul>
            </div>
            <div className="main">
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/users' element={<Users/>} />
                </Routes>
            </div>
            
        </main>
    </Container>
  )
}

export function Home(){
    const {state:{users}} = DataContext()
    return(
        <>
                <div className="search">
                    <SearchIcon sx={{position: "absolute", left: "5px", top: "7px", zIndex: "100", cursor: "pointer"}}/>
                    <input type="text" name="search"placeholder='Search'/>
                </div>
                <div className="hero">
                    <h1>Overview</h1>
                    <span className="box">
                        <div className="card">
                            <div className='icon'>
                                <AllInboxIcon sx={{color: "#555"}}/>
                            </div>
                            <div className='desc'>
                                <h4>Account Balance</h4>
                                <h3>$3000000</h3>
                            </div>
                        </div>
                        <div className="card">
                            <div className='icon'>
                                <AutorenewIcon sx={{color: "#555"}}/>
                            </div>
                            <div className='desc'>
                                <h4>Users</h4>
                                <h3>{users?.length}</h3>
                            </div>
                        </div>
                        <div className="card">
                            <div className='icon'>
                                <DomainVerificationIcon sx={{color: "#555"}}/>
                            </div>
                            <div className='desc'>
                                <h4>Processed</h4>
                                <h3>$3000000</h3>
                            </div>
                        </div>
                    </span>
                </div>
                <div className="history">
                    <h1>Recent Activity</h1>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Date</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Date</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
    )
}

export function Users(){
    const {state:{users}} = DataContext()
    return(
        <div className='users'>
            {users?.map(user => {
                return(
                    <div className='user'>
                        {user?.user_name?.toUpperCase()}
                    </div>
                )
            })}
        </div>
        
    )
}
