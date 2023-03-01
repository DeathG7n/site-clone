import React from 'react'
import {Container} from './investmentStyles'
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import { DataContext } from '../../../api/context';


export default function Investment() {
    const {dispatch} = DataContext()
    function handleClick(head){
        dispatch({ type: "HEAD", payload: head});
    }
  return (
    <Container>
        <div>   
            <Link style={{ color: "#10221C", textDecoration: "none" }} to="/my-investments"><button className='button' onClick={()=> handleClick('Deposit Wallet Transactions')}>My Investments</button></Link>
        </div>
        <section>
            <div className='box'>
                <h1>Professional</h1>
                <span>
                    <p>Return 10%</p>
                    <p>Every Day</p>
                    <p>For 21 day</p>
                    <p>Total 210%</p>
                </span>
                <h2>$10000 - $49999</h2>
                <button>Invest Now</button>
            </div>
            <div className='box'>
                <h1>Advanced</h1>
                <span>
                    <p>Return 15%</p>
                    <p>Every Day</p>
                    <p>For 21 day</p>
                    <p>Total 315%</p>
                </span>
                <h2>$1000 - $9999</h2>
                <button>Invest Now</button>
            </div>
            <div className='box'>
                <h1>Intermediate</h1>
                <span>
                    <p>Return 18%</p>
                    <p>Every Day</p>
                    <p>For 21 day</p>
                    <p>Total 378%</p>
                </span>
                <h2>$300 - $999</h2>
                <button>Invest Now</button>
            </div>
            <div className='box'>
                <h1>Basic</h1>
                <span>
                    <p>Return 20%</p>
                    <p>Every Day</p>
                    <p>For 21 day</p>
                    <p>Total 420%</p>
                </span>
                <h2>$100 - $299</h2>
                <button>Invest Now</button>
            </div>
            <div className='box'>
                <h1>Premium</h1>
                <span>
                    <p>Return 10%</p>
                    <p>Every Day</p>
                    <p>For 21 day</p>
                    <p>Total 210%</p>
                </span>
                <h2>$50000 - $2000000</h2>
                <button>Invest Now</button>
            </div>
            <div className='box'>
                <h1>Professional</h1>
                <span>
                    <p>Return 7%</p>
                    <p>Every Day</p>
                    <p>For 7 day</p>
                    <p>Total 490% + <span>Capital</span></p>
                </span>
                <h2>$10000 - $49999</h2>
                <button>Invest Now</button>
            </div>
        </section>
    </Container>
  )
}
