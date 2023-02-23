import React from 'react'
import { Container, Form } from './accountStyles'

export default function ChangePassword() {
  return (
    <Container>
        <Form>
            <div className="box">
                <label htmlFor="">Enter Old Password</label>
                <input type="text" />
            </div>
            <div className="box">
                <label htmlFor="">Enter New Password</label>
                <input type="text" />
            </div>
            <div className="box">
                <label htmlFor="">Retype Password</label>
            </div>
            <button>Update</button>
        </Form>
    </Container>
  )
}
