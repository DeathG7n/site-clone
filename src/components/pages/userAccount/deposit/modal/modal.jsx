import React , {useRef, useState}from 'react'
import {Container, Box} from './modalStyles'
import { DataContext } from '../../../../api/context'
import { useNavigate } from 'react-router-dom'

export default function Modal({handleModal}) {
    const {state: {coin}, dispatch} = DataContext()
    const history = useNavigate()
    const ref = useRef()
    const [value, setValue] = useState(0)

    function handleNext(e){
        e.preventDefault()
        setValue(ref.current?.value)
        dispatch({type: "DEPOSIT", payload: ref.current?.value})
        if(isNaN(value) || value < 1){
            dispatch({type: "ERROR", payload: true})
            dispatch({type: "OPENSNACKBAR", payload: true})
            dispatch({type: "SNACKBARMSG", payload: "Invalid amount"})
        } else{
            history("/user/deposit/preview") 
            handleModal()
        }
    }
  return (
    <Container>
        <Box>
            <div className='head'>
                <p>Payment By {coin}</p>
                <p onClick={handleModal}>x</p>
            </div>
            <label htmlFor="amount">Enter Amount</label>
            <form onSubmit={handleNext}>
                <div className='input'>
                    <input 
                        type="number"
                        placeholder='0.00'
                        ref={ref} 
                        name="amount"
                        required={true}
                    />
                    <span>USD</span>
                </div>
                <div className='buttons'>
                    <button onClick={handleModal}>Close</button>
                    <button onClick={handleNext}>Next</button>
                </div>
            </form>
            
        </Box>
    </Container>
  )
}
