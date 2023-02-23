import React from 'react'
import {Container} from './withdrawStyles'
import Bit from '../../../assets/bit.png'
import Tether from '../../../assets/tether.png'
import Eth from '../../../assets/eth.png'
import Bank from '../../../assets/banktransfer.png'
import Cube from '../../../assets/cube.png'

export default function Withdraw() {
  return (
    <Container>
        <button className='button'>Withdraw History</button>
        <section>
            
            
            <div className='box'>
                <img src={Bit} alt="coin" />
                <div >
                    <p>Bitcoin</p>
                    <p>Limit : 3000 - 50000000 USD</p>
                    <p>Charge - 0 USD + 0%</p>
                    <p><button>Withdraw Now</button></p>
                </div>
            </div>
            <div className='box'>
                <img src={Bank} alt="coin" />
                <div >
                    <p>Bank Transfers</p>
                    <p>Limit : 3000 - 50000000 USD</p>
                    <p>Charge - 0 USD + 0%</p>
                    <p><button>Withdraw Now</button></p>
                </div>
            </div>
            <div className='box'>
                <img src={Tether} alt="coin" />
                <div >
                    <p>Tether</p>
                    <p>Charge - 0 USD + 0%</p>
                    <p><button>Withdraw Now</button></p>
                </div>
            </div>
            <div className='box'>
                <img src={Eth} alt="coin" />
                <div >
                    <p>Ethereum</p>
                    <p>Charge - 0 USD + 0%</p>
                    <p><button>Withdraw Now</button></p>
                </div>
            </div>
            <div className='box'>
                <img src={Cube} alt="coin" />
                <div >
                    <p>BNB</p>
                    <p>Limit : 3000 - 50000000 USD</p>
                    <p>Charge - 0 USD + 0%</p>
                    <p><button>Withdraw Now</button></p>
                </div>
            </div>
        </section>
    </Container>
  )
}
