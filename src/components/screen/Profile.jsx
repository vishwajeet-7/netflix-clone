import React from 'react'
import './Profile.css'
import Navbar from '../Navbar'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'

const Profile = () => {
    const user = useSelector(selectUser)
  return (
    <div className='profile'>
      <Navbar/>
      <div className="profile_body">
        <h1>Edit Profile</h1>
        <div className="profile_info">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
            <div className="profile_details">
                <h2>{user.email}</h2>
                <div className="profile_plans">
                    <button onClick={()=>auth.signOut()} className='profile_signout'>Sign out</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
