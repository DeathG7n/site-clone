import React from 'react'
import {Container} from './depositStyles'
import Bit from '../../../assets/bit.png'
import Tether from '../../../assets/tether.png'
import Eth from '../../../assets/eth.png'

export default function Deposit() {
  return (
    <Container>
        <button className='button'>Deposit History</button>
        <section>
            <div className='box'>
                <img src={Tether} alt="coin" />
                <div >
                    <p>Tether</p>
                    <p>Charge - 0 USD + 0%</p>
                    <p><button>Deposit</button></p>
                </div>
            </div>
            <div className='box'>
                <img src={Eth} alt="coin" />
                <div >
                    <p>Ethereum</p>
                    <p>Charge - 0 USD + 0%</p>
                    <p><button>Deposit</button></p>
                </div>
            </div>
            <div className='box'>
                <img src={Bit} alt="coin" />
                <div >
                    <p>Bitcoin</p>
                    <p>Charge - 0 USD + 0%</p>
                    <p><button>Deposit</button></p>
                </div>
            </div>
        </section>
    </Container>
  )
}
