import React, {useReducer} from 'react'
import { Container, Form } from './accountStyles'
import { DataContext } from '../../../api/context'
import axios from 'axios'


export default function ChangePassword() {
    const userId = localStorage.getItem("userId")
    const {state: {singleUser}} = DataContext()
    console.log(singleUser)
    const formReducer = (state, event) => {
        return {
          ...state,
          [event.name]: event.value,
        };
      };
    const [formData, setFormData] = useReducer(formReducer, {userId : userId })

    const handleChange = (e) => {
        let event = e.target;
        const fileType = event.type === "file";
    
        setFormData({
          name: event.name,
          value: fileType ? event.files[0] : event.value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const changePassword = async ()=>{
            const res = await axios.put((`http://localhost:8800/api/user/${singleUser?._id}`), formData)
            .then((res)=>{
                console.log(res)
                window.location.reload(true)
            })
        }
        changePassword()
    }
    console.log(formData)
  return (
    <Container>
        <Form onSubmit={handleSubmit}>
            <div className="box">
                <label htmlFor="">Enter Old Password</label>
                <input 
                    type="text" 
                    name='old-password'
                    onChange={handleChange}
                    />
            </div>
            <div className="box">
                <label htmlFor="">Enter New Password</label>
                <input 
                    type="text" 
                    name='password'
                    onChange={handleChange}
                    />
            </div>
            <div className="box">
                <label htmlFor="">Retype Password</label>
                <input type="text" />
            </div>
            <button>Update</button>
        </Form>
    </Container>
  )
}
