import React from 'react'
import { Contacts } from './contactStyles'

export default function Contact() {
  return (
    <Contacts>
            <h3>Contact Us</h3>
            <h1>Drop Us A Message For Any Query</h1>
            <form>
              <section className='fullname'>
                <div className='first'>
                  <label htmlFor="fullname">Name <span>*</span></label>
                  <input type="text" name='firstname' required/>
                  <h5>First</h5>
                </div>
                <div className='last'>
                  <input type="text" name='lastname' required/>
                  <h5>Last</h5>
                </div>
              </section>
              <section className='email'>
                <label htmlFor="email">Email <span>*</span></label>
                <input type="text" name='email' />
              </section>
              <section className='comment'>
                <label htmlFor="comment">Comment or Message</label>
                <textarea name="comment" id="" cols="30" rows="15"></textarea>
              </section>
              <button>
                Submit
              </button>
            </form>
          </Contacts>
  )
}
