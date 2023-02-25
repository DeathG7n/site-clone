import React from 'react'
import {Container, Box} from './modalStyles'
import { DataContext } from '../../../../api/context'

export default function Modal({handleModal}) {
    const {state: {coin}} = DataContext()
  return (
    <Container>
        <Box>
            <div className='head'>
                <p>WIthdraw Via {coin}</p>
                <p onClick={handleModal}>x</p>
            </div>
            <label htmlFor="">Enter Amount</label>
            <div className='input'>
                <input 
                    type="text"
                    placeholder='0.00' 
                />
                <span>USD</span>
            </div>
            <div className='buttons'>
                <button onClick={handleModal}>Close</button>
                <button>Confirm</button>
            </div>
        </Box>
    </Container>
  )
}
