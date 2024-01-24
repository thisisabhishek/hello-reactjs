import React from 'react'
import { useOutletContext, Link } from 'react-router-dom'

const Profile = () => {

    const context = useOutletContext()

    // if (!context.user) {
    //     return <Navigate to="/" replace />;
    // }

    return (
        <div className='home card'>
            <h1>Welcome {context.user.username}</h1>
            <p><Link to="/editprofile">Edit Profile</Link></p>
        </div>
  )
}

export default Profile;