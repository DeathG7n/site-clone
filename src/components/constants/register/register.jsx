import React, { useEffect, useState } from 'react'
import {Topbar, Form, Footer, ErrorText} from './registerStyles'
import Logo from '../../assets/logo.png'
import {Link} from "react-router-dom";
import { useFormik } from 'formik';
import { signUpValidationSchema } from "../../constants/validationSchema";
import axios from 'axios';

function Register() {
    const [countryCode, setCountryCode] = useState('93')
    const [countries, setCountries] = useState([])
    useEffect(()=>{
       axios({
        method: 'get',
        url: `https://restcountries.com/v2/all`,
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then(function (response) {
          console.log(response?.data)
          setCountries(response?.data)
        }); 
    }, [])
    
    const { values, handleChange, errors, touched, handleSubmit, handleBlur } = useFormik({
        initialValues: {
          email: "",
          password: "",
          mobile: '',
          first_name: '',
          last_name: '',
          user_name: '',
          country: '',
          agree: ""
        },
    
        validationSchema: signUpValidationSchema,
    
        onSubmit: (values) => {
            console.log(values)
        }
      });

    console.log(touched)
    // function handleCountryCode(){
    //     const country = localStorage.getItem("country")
    //     console.log(country)
    //     setCountryCode(JSON.parse(localStorage.getItem("country"))?.code)
    // }
  return (
    <>
        <Topbar>
        <img src={Logo} alt="logo" />
        <ul>
            <Link style={{ color: "#10221C", textDecoration: "none" }} to="/"><li>Home</li></Link>
            <Link style={{ color: "#10221C", textDecoration: "none" }} to="/plans"><li>Plan</li></Link>
            <Link style={{ color: "#10221C", textDecoration: "none" }} to="/contact"><li>Contact</li></Link>
        </ul>
        </Topbar>
        <Form onSubmit={handleSubmit}>
            <div className='header'>
                <div>
                    <h1>Welcome To <span>FUNDTREX</span></h1>
                    <p>We provide you with the most necessary features that will make your experience better.</p>
                </div>
            </div>
            <form>
                <label htmlFor="first-name">First Name</label>
                <input 
                    type="text" 
                    placeholder='First Name' 
                    name='first_name'
                    onChange={handleChange}
                    value={values.first_name}
                    onBlur={handleBlur}
                />
                {touched?.first_name && <ErrorText>{errors?.first_name}</ErrorText>}
                <label htmlFor="last-name">Last Name</label>
                <input 
                    type="text" 
                    placeholder='Last Name' 
                    name='last_name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.last_name}
                />
                {touched?.last_name && <ErrorText>{errors?.last_name}</ErrorText>}
                <label htmlFor="country">Country</label>
                <select 
                    name="country" 
                    id="countries"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.country}
                    >
                    
                    {countries?.map((country, id)=>{
                        return(
                            <option 
                                value={country?.name}
                                key={id}
                            >
                                {country?.name}
                            </option>
                        )
                    })}
                </select>
                {touched?.country && <ErrorText>{errors?.country}</ErrorText>}
                <label htmlFor="mobile">Mobile</label>
                <div>
                    <span 
                        className='country-code'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    >+{countryCode}</span>
                    <input 
                        name='mobile'
                        type="number" 
                        placeholder='Your Phone Number' 
                        className='mobile'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.mobile}
                    />
                </div>
                {touched?.mobile && <ErrorText>{errors?.mobile}</ErrorText>}

                <label htmlFor="email">Email Address</label>
                <input 
                    type="text" 
                    placeholder='Enter email address' 
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                {touched?.email && <ErrorText>{errors?.email}</ErrorText>}
                <label htmlFor="user-name">User Name</label>
                <input 
                    type="text" 
                    placeholder='Enter user name' 
                    name='user_name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.user_name}
                />
                {touched?.user_name && <ErrorText>{errors?.user_name}</ErrorText>}
                <label htmlFor="password">Password</label>
                <input 
                    type="text" 
                    placeholder='Enter password' 
                    name='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                />
                {touched?.password && <ErrorText>{errors?.password}</ErrorText>}
                <label htmlFor="confirm-password">Confirm Password</label>
                <input 
                    type="text" 
                    placeholder='Confirm password' 
                    name='confirm_password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched?.confirm_password && <ErrorText>{errors?.confirm_password}</ErrorText>}
                <div className="code"></div>
                <input 
                    type="text" 
                    placeholder='Enter code' 
                    name='code'
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <div className='foot'>
                    <input 
                        type="checkbox" 
                        name="agree" 
                        className='agree'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.agree}
                    />
                    <p>I agree with<span> Privacy & Policy , Terms & Condition</span></p>
                </div>
                {touched?.agree && <ErrorText>{errors?.agree}</ErrorText>}
                <input className="button" type='submit'/>
                <div className='foot'>
                    <p>Have an Account? <span><Link style={{ color: "#f64803", textDecoration: "none" }} to="/login">Login</Link></span></p>
                </div>
            </form>
        </Form>
        <Footer>
            <div>
                <img src={Logo} alt="logo" />
                <ul>
                    <li>Privacy & Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            <p>© 2023 <span>Fundtrex</span>. All rights reserved</p>
        </Footer>
    </>
    
  )
}

export default Register
