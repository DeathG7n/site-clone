import React, { useEffect, useState } from 'react'
import {Topbar, Form, Footer, ErrorText} from './registerStyles'
import Logo from '../../assets/logo.png'
import {Link, useNavigate} from "react-router-dom";
import { useFormik } from 'formik';
import { signUpValidationSchema } from "../../constants/validationSchema";
import axios from 'axios';
import { countries, codes } from '../../api/countries';

function Register() {
    const history = useNavigate()
    const [countryCode, setCountryCode] = useState({
        phone_code: 93
    })
    
    const { values, handleChange, errors, touched, handleSubmit, handleBlur } = useFormik({
        initialValues: {
          email: "",
          password: "",
          mobile: '',
          first_name: '',
          last_name: '',
          user_name: '',
          country: '',
          code: '',
        },
    
        validationSchema: signUpValidationSchema,
    
        onSubmit: (values) => {
            values.code = countryCode?.phone_code
            console.log(values)
            const createUser = async ()=>{
                const res = await axios.post("http://localhost:8800/api/auth/register", values).then((res)=>{
                    console.log(res)
                    history('/login')
                })
            }
            createUser()
        }
    });
    function handleCountryCode(){
        const code = values?.country && codes.find(item => item?.country_name === values?.country)
        setCountryCode(code)
        console.log(code)
    }
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
                    value={countryCode + values.country}
                    onClick={handleCountryCode}
                    >
                    
                    {countries?.map((country, id)=>{
                        return(
                            <option 
                                value={country}
                                key={id}
                            >
                                {country}
                            </option>
                        )
                    })}
                </select>
                {touched?.country && <ErrorText>{errors?.country}</ErrorText>}
                <label htmlFor="mobile">Mobile</label>
                <div>
                    <span 
                        className='country-code'
                    >+{countryCode.phone_code}</span>
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
