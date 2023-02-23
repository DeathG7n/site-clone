import React from 'react'
import {Container} from './referralStyles'

export default function Users() {
  return (
    <Container>
           <table>
                <thead>
                    <td>SL</td>
                    <td>Fullname</td>
                    <td>Joined At</td>
                </thead>
                <tbody>
                    <tr>
                        <td>Date</td>
                        <td>Transaction ID</td>
                        <td>Amount</td>
                    </tr>
                </tbody>
            </table> 
    </Container>
  )
}
