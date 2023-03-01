import React from 'react'
import {Container} from './referralStyles'
import { DataContext } from '../../../api/context'

export default function Users() {
  const {state: {singleUser}} = DataContext()
  return (
    <Container>
           {window.innerWidth > 900 && <table>
                <thead>
                    <td>SL</td>
                    <td>Fullname</td>
                    <td>Joined At</td>
                </thead>
                <tbody>
                  {singleUser?.dashboard?.details?.map((item, id)=>{
                          return(
                              <tr key={id}>
                                  <td>{item?.date ? item?.date : singleUser?.createdAt.substring(10,0)}</td>
                                  <td className='id'>{item?.transactionID ? item?.transactionID : singleUser?._id.substring(12).toUpperCase()}</td>
                                  <td>+${item?.amount}</td>
                              </tr>
                          )
                      })}
                </tbody>
            </table> }
            {window.innerWidth < 900 && <main>
                {singleUser?.dashboard?.details?.map((item, id)=>{
                    return(
                        <div key={id}>
                             <p><span>Amount</span><span>+${item?.amount}</span></p>
                             <p><span>Wallet</span><span><div className='wallet'>{item?.wallet}</div></span></p>
                             <p><span>Details</span><span>{item?.desc}</span></p>
                             <p><span>Post Balance</span><span>{item?.postBalance}</span></p>
                        </div>
                        )
                    })}
            </main>}
    </Container>
  )
}
