import React from 'react'
import {Plans} from './planStyles'

export default function Plan() {
    return (
        <Plans>
            <h1>Our Investment Plans</h1>
            <p>Fundtrexcooperations.com provides the best investment plan to make sure all users are able to invest and get a profit despite how low the capital is or how high the capital is. We ensure all users are making a profit.</p>
            <span>
              <div>
                <h2>Basic Plan</h2>
                <div style={{backgroundColor: "red"}}>Basic</div>
                <h1><span>$</span>100</h1>
                <ul>
                  <li>Spent Amount $ (100 - 999)</li>
                  <li>Profit (%) 20.00%</li>
                  <li>Duration (Every Day)</li>
                  <li>Withdraw Type Instant</li>
                  <li>24/7 Customer Support</li>
                </ul>
                <button>Invest Now</button>
                <p>Terms and Conditions Applied</p>
              </div>
              <div>
                <h2>Advanced Plan</h2>
                <div style={{backgroundColor: "#FFEC40"}}>Advanced</div>
                <h1><span>$</span>1000</h1>
                <ul>
                  <li>Spent Amount $ (1000 - 9999)</li>
                  <li>Profit (%) 15.00%</li>
                  <li>Duration (Every Day)</li>
                  <li>Withdraw Type Instant</li>
                  <li>24/7 Customer Support</li>
                </ul>
                <button>Invest Now</button>
                <p>Terms and Conditions Applied</p>
              </div>
              <div>
                <h2>Pro Plan</h2>
                <div style={{backgroundColor: "#151ED8"}}>Pro</div>
                <h1><span>$</span>10k</h1>
                <ul>
                  <li>Spent Amount $ (10k - 49.9k)</li>
                  <li>Profit (%) 10.00%</li>
                  <li>Duration (Every Day)</li>
                  <li>Withdraw Type Instant</li>
                  <li>24/7 Customer Support</li>
                </ul>
                <button>Invest Now</button>
                <p>Terms and Conditions Applied</p>
              </div>
              <div>
                <h2>Premium Plan</h2>
                <div style={{backgroundColor: "#61ce70"}}>Premium</div>
                <h1><span>$</span>50k</h1>
                <ul>
                  <li>Spent Amount $ (50k - Unlimited)</li>
                  <li>Profit (%) 5.00%</li>
                  <li>Duration (Every Day)</li>
                  <li>Withdraw Type Instant</li>
                  <li>24/7 Customer Support</li>
                </ul>
                <button>Invest Now</button>
                <p>Terms and Conditions Applied</p>
              </div>
            </span>
          </Plans>
    )
}