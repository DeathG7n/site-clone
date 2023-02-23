import React from 'react'
import { Choices } from './choiceStyles'

export default function Choice() {
  return (
    <Choices>
        <h1>Why Investors Choose Us</h1>
        <p>Fundtrex team helps you in effective investment management. We maximize profits while minimizing risks – thus, every investment brings income. Just try right now and see for yourself!</p>
        <span>
        <div style={{gridColumn: "1/span 2"}}>
            <h2>Affliate Program</h2>
            <p>You can get passive income by inviting new investors to our company. We set flexible refback up to 5%.</p>
        </div>
        <div>
            <h2>Technical Support</h2>
            <p>Our technical support is available 24/7. We will answer all your questions and give advice.</p>
        </div>
        <div>
            <h2>Technical Support</h2>
            <p>Our technical support is available 24/7. We will answer all your questions and give advice.</p>
        </div>
        <div>
            <h2>Investment Planning</h2>
            <p>Your investment multiplies with us, withdraw your profits whenever you want or purchase more plans from them.</p>
        </div>
        <div>
            <h2>Instant Account</h2>
            <p>Set up your account within seconds with us, purchase a plan, and start making your profits</p>
        </div>
        <div style={{gridColumn: "3/span 2"}}>
            <h2>Online Training</h2>
            <p>Our Staff Consists Of Experienced Professionals With A “Hands On” Approach To Financial Guidance. You can subscribe and start learning to trade on your own</p>
        </div>
        </span>
    </Choices>
  )
}
