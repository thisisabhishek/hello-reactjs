import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Root = () => {

    const [user, setUser] = useState(null)

    const loginUser = () => {
        setUser({id:1, username:"abhishek", role:["user"]})
    }

    const logoutUser = () => {
        setUser(null)
    }

    return (
        <div style={{width:'400px'}}>
            <nav className='flex-apart'>
                <span>LOGO</span>
                {user && <span><Link to="/profile">{user.username}</Link></span>}
            </nav>
            <div className='flex-apart'>
                <Link to="/">Home</Link>&nbsp;
                <Link to="/products/computer">Computer</Link>&nbsp;
                <Link to="/products/desk">Desk</Link>&nbsp;
                <Link to="/products/gadget">Gadgets</Link>&nbsp;
                <Link to="/products/tshirt">Tshirts</Link>	
            </div>

            <Outlet context={{user, setUser, loginUser, logoutUser}}/>
            
            {user &&
                <div className='flex-center mt-10'>
                    <button onClick={logoutUser} className="btn purple">Logout</button>
                    <Link to="/admin">Admin</Link>
                </div>
            }

        </div>
    )
}

export default Root