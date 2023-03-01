import React,{useState}from 'react'
import {Topbar, Form, Footer, Container, ErrorText} from './loginStyles'
import Logo from '../../assets/logo.png'
import {Link, useNavigate} from "react-router-dom";
import { useFormik } from 'formik';
import { loginValidationSchema } from '../validationSchema';
import axios from 'axios';
import { DataContext } from '../../api/context';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

function Login() {
    const [show, setShow] = useState()
    const history = useNavigate()
    const {dispatch} = DataContext()
    const { values, handleChange, errors, touched, handleSubmit, handleBlur } = useFormik({
        initialValues: {
          user_name: '',
          password: ""
        },
    
        validationSchema: loginValidationSchema,
    
        onSubmit: (values) => {
            const authUser = async ()=>{
                const res = await axios.post("https://nice-hen-hose.cyclic.app/api/auth/login", values).then((res)=>{
                    console.log(res)
                    history('/user/dashboard')
                    dispatch({ type: "SINGLEUSER", payload: res.data})
                    localStorage.setItem("userId", res.data?._id)
                })
            }
            authUser()
        }
      });
  return (
    <Container>
        <Topbar>
        <img src={Logo} alt="logo" />
        <ul>
            <Link style={{ color: "#10221C", textDecoration: "none" }} to="/"><li>Home</li></Link>
            <Link style={{ color: "#10221C", textDecoration: "none" }} to="/plans"><li>Plan</li></Link>
            <Link style={{ color: "#10221C", textDecoration: "none" }} to="/contact"><li>Contact</li></Link>
        </ul>
        {window.innerWidth < 900 && <ul style={{display: show? "block" : "none"}}>
            <Link style={{ color: "#10221C", textDecoration: "none" }} to="/"><li>Home</li></Link>
            <Link style={{ color: "#10221C", textDecoration: "none" }} to="/plans"><li>Plan</li></Link>
            <Link style={{ color: "#10221C", textDecoration: "none" }} to="/contact"><li>Contact</li></Link>
        </ul>}
        <div className='menu'>
            <MenuOpenIcon sx={{color: "#fff", fontSize: "25px"}} onClick={()=>setShow(!show)} />
        </div>
        </Topbar>
        <Form onSubmit={handleSubmit}>
            <div className='header'>
                <div>
                    <h1>Welcome To <span>FUNDTREX</span></h1>
                    <p>We provide you with the most necessary features that will make your experience better.</p>
                </div>
            </div>
            <form>
                <label htmlFor="user-name">User Name</label>
                <input 
                    type="text" 
                    placeholder='Enter user name' 
                    name='user_name'
                    onChange={handleChange}
                    value={values.user_name}
                    onBlur={handleBlur}
                />
                {touched?.user_name && <ErrorText>{errors?.user_name}</ErrorText>}
                <label htmlFor="password">Password</label>
                <input 
                    type="text" 
                    placeholder='Enter password' 
                    name='password'
                    onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                />
                {touched?.password && <ErrorText>{errors?.password}</ErrorText>}
                <div className="code"></div>
                <input 
                    type="text" 
                    placeholder='Enter code' 
                    name='code'/>
                <input 
                    type="submit" 
                    value="Login Now" 
                    className='button' />
                <div className='foot'>
                    <p>Forgot Password? <span>Reset Now</span></p>
                    <p>Haven't an account? <span><Link style={{ color: "#f64803", textDecoration: "none" }} to="/sign-up">Register</Link></span></p>
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
    </Container>
    
  )
}

export default Login