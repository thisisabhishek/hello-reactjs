import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <div style={{width:'400px'}}>
            <nav>
                Studytonight
            </nav>
            <div className='flex-apart'>
                <Link to="/">Home</Link>&nbsp;
                <Link to="/products/computer">Computer</Link>&nbsp;
                <Link to="/products/desk">Desk</Link>&nbsp;
                <Link to="/products/gadgets">Gadgets</Link>&nbsp;
                <Link to="/products/tshirts">Tshirts</Link>	
            </div>

            <Outlet />

        </div>
    )
}

export default Root