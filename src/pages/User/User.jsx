import React from 'react'
import "./user.css";

import photo from '../../assets/its-me.jpg'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish, SaveAlt, Add } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export const User = () => {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className='userTitle'>Edit User</h1>
            <Link to='/newuser' className="link">
            <button className="userAddButton">
            <Add className='icon' style={{ marginRight : '8px'}} />
                Create User
            </button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src={photo} alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Furkan Enes</span>
                        <span className="userShowUserTitle">Software Developer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'/> 
                        <span className="userShowInfoTitle">furkan22</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className='userShowIcon'/> 
                        <span className="userShowInfoTitle">11.07.1995</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon'/> 
                        <span className="userShowInfoTitle">+1 123 456</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className='userShowIcon'/> 
                        <span className="userShowInfoTitle">test@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className='userShowIcon'/> 
                        <span className="userShowInfoTitle">Istanbul | Turkey</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder='furkan22' className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder='Furkan Enes' className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder='test@gmail.com' className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder='+1 123 456' className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder='Istanbul | Turkey' className='userUpdateInput'/>
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src={photo} className='userUpdateImg' alt="" />
                            <label htmlFor="file">
                                <Publish className='userUpdateIcon icon' />
                            </label>
                            <input type="file" id='file' style={{ display : 'none' }} />
                        </div>
                        <button className="userUpdateButton">
                            <SaveAlt className='icon' style={{ marginRight : '8px'}} />
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
