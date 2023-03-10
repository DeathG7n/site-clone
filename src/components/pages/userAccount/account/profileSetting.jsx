import React, {useReducer, useRef, } from 'react'
import {Container, ProfileImg, Form} from './accountStyles'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { DataContext } from '../../../api/context';
import Placeholder from '../../../assets/image.jpeg'
import axios from 'axios';

export default function ProfileSetting() {
    const file = useRef()
    const userId = localStorage.getItem('userId')
    const {state: { singleUser}} = DataContext()
    const formReducer = (state, event) => {
        return {
          ...state,
          [event.name]: event.value,
        };
      };
    const [formData, setFormData] = useReducer(formReducer, {userId : userId, profile_picture: file.current?.files[0]?.name})

    const handleChange = (e) => {
        let event = e.target;
        const fileType = event.type === "file";

    
        setFormData({
          name: event.name,
          value: fileType ? `https://nice-hen-hose.cyclic.app/images/${event.files[0].name}` : event.value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const updateUser = async ()=>{
            if(formData.profile_picture){
                const postData = new FormData()
                const fileName = Date.now() + formData.profile_picture
                postData.append('userId', userId)
                postData.append('file', file.current?.files[0])
                postData.append('name', fileName)
                const res = await axios.post((`https://nice-hen-hose.cyclic.app/api/upload`), postData)
            }
            const res = await axios.put((`https://nice-hen-hose.cyclic.app/api/user/${singleUser?._id}`), formData)
            .then((res)=>{
                console.log(res)
                window.location.reload(true)
            })
        }
        updateUser()
    }

    console.log(singleUser?.profile_picture)
  return (
    <Container>
        <Form onSubmit={handleSubmit}>
            <section className='profile-name'>
                <div className='profileImg'>
                    <input
                        type="file"
                        className="photo"
                        name="profile_picture"
                        id="photo"
                        onChange={handleChange}
                        ref={file}
                    />
                    <label htmlFor="photo">
                        <ProfileImg 
                            crossOrigin="anonymous"
                            src={formData.profile_picture ? URL.createObjectURL(file.current?.files[0]): singleUser?.profile_picture || Placeholder} 
                            alt='profileImg'/>
                        <div className='edit'><EditOutlinedIcon sx={{color: "#555"}}/></div>
                    </label>
                </div>
                
                <div className='profile'>
                    <div className='box-name'>
                        <label htmlFor="first_name">First Name</label>
                        <input 
                            name='first_name'
                            type="text" 
                            placeholder={singleUser?.first_name || 'First Name' }
                            onChange={handleChange}/>
                    </div>
                    <div className='box-name'>
                        <label htmlFor="last_name">Last Name</label>
                        <input 
                            name='last_name'
                            type="text" 
                            placeholder= {singleUser?.last_name || 'Last Name' }
                            onChange={handleChange}/>
                    </div>
                    <div className='box-name'>
                        <label htmlFor="user_name">Username</label>
                        <div>{singleUser?.user_name}</div>
                    </div>
                    <div className='box-name'>
                        <label htmlFor="email">Email</label>
                        <div>{singleUser?.email}</div>
                    </div>  
                </div>
            </section>
            <section className='details'>
                <div className='box-name'>
                    <label htmlFor="mobile">Mobile</label>
                    <div>{singleUser?.code}{singleUser?.mobile}</div>
                </div>
                <div className='box-name'>
                    <label htmlFor="country">Country</label>
                    <div>{singleUser?.country}</div>
                </div>  
                <div className='box-name'>
                    <label htmlFor="address">Address</label>
                    <input 
                        name='address'
                        type="text" 
                        placeholder={singleUser?.address || 'Address' }
                        onChange={handleChange}/>
                </div>
                <div className='box-name'>
                    <label htmlFor="state">State</label>
                    <input 
                        name='state'
                        type="text" 
                        placeholder={singleUser?.state || 'State'}
                        onChange={handleChange}
                    />
                </div>
                <div className='box-name'>
                    <label htmlFor="zip">Zip</label>
                    <input 
                        name='zip'
                        type="text" 
                        placeholder= {singleUser?.zip ||'Zip' }
                        onChange={handleChange}
                    />
                </div>
                <div className='box-name'>
                    <label htmlFor="city">City</label>
                    <input 
                        name='city'
                        type="text" 
                        placeholder={singleUser?.city || 'City'}
                        onChange={handleChange}
                    />
                </div>
            </section>
            <button>Update</button>
        </Form>
    </Container>
  )
}
