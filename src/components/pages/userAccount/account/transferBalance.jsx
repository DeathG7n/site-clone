import React from 'react'
import { Container, Form } from './accountStyles'

export default function TransferBalance() {
  return (
    <Container>
        <Form>
            <div className="box-name">
                <label htmlFor="">Wallet</label>
                <select name="" id="">
                    <option value="">Select a wallet</option>
                    <option value="">Deposit Wallet</option>
                    <option value="">Interest Wallet</option>
                </select>
            </div>
            <div className="box-name">
                <label htmlFor="">Username</label>
                <input type="text" />
            </div>
            <div className="box-name">
                <label htmlFor="">Amount <h5>( Charge: 1 USD + 0.5% )</h5></label>
                <input type="text" className='amount'/>
                <span>USD</span>
            </div>
            <div className="box-name">
                <label htmlFor="">Amount Will Cut From Your Account</label>
                <div></div>
                <span>USD</span>
            </div>
            <button>Transfer</button>
        </Form>
    </Container>
  )
}
