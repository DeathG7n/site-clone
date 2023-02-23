import React from 'react'
import Hack from '../../assets/complete-img-768x647.jpg'
import { Developmen } from './developmentStyles'

export default function Development() {
  return (
    <Developmen>
            <div><img src={Hack} alt="hacker" /></div>
            <div>
              <h1>Our Development</h1>
              <p>Our key success factor is our desire to constantly move forward. We learn on the regular basis, analyzing our achievements and then doing the next step in our development.</p>
              <span>
                <div>Easy Access</div>
                <div>Instant Payout</div>
                <div>Departure Of The Our Experts</div>
                <div>24/7 Support And Remote Admit</div>
              </span>
            </div>
          </Developmen>
  )
}
