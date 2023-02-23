import React from 'react'
import {Container, ProfileImg, Form} from './accountStyles'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export default function ProfileSetting() {
  return (
    <Container>
        <Form>
            <section className='profile-name'>
                <div className='profileImg'>
                    <input
                        type="file"
                        className="photo"
                        name="photo"
                        id="photo"
                    />
                    <label for="photo">
                        <ProfileImg src='' alt='profileImg'/>
                        {/* <img
                            src={showImage && formData.photo? URL.createObjectURL(formData.photo): imageIcon}
                            alt="image icon"
                            onClick={handleShow}
                        /> */}
                        <div className='edit'><EditOutlinedIcon sx={{color: "#555"}}/></div>
                    </label>
                </div>
                
                <div className='profile'>
                    <div className='box-name'>
                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder='First Name' value='Ifeanyichukwu'/>
                    </div>
                    <div className='box-name'>
                        <label htmlFor="">Last Name</label>
                        <input type="text" placeholder='Last Name' value='Emenike'/>
                    </div>
                    <div className='box-name'>
                        <label htmlFor="">Username</label>
                        <div>DeathG7n</div>
                    </div>
                    <div className='box-name'>
                        <label htmlFor="">Email</label>
                        <div>christariccykid55@gmail.com</div>
                    </div>  
                </div>
            </section>
            <section className='details'>
                <div className='box-name'>
                    <label htmlFor="">Mobile</label>
                    <div>2347064356271</div>
                </div>
                <div className='box-name'>
                    <label htmlFor="">Country</label>
                    <div>Nigeria</div>
                </div>  
                <div className='box-name'>
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder='Address'/>
                </div>
                <div className='box-name'>
                    <label htmlFor="">State</label>
                    <input type="text" placeholder='State'/>
                </div>
                <div className='box-name'>
                    <label htmlFor="">Zip</label>
                    <input type="text" placeholder='Zip'/>
                </div>
                <div className='box-name'>
                    <label htmlFor="">City</label>
                    <input type="text" placeholder='City'/>
                </div>
            </section>
            <button>Update</button>
        </Form>
    </Container>
  )
}
