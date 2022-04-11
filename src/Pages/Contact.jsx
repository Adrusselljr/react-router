import React from 'react'
import { Link, Outlet } from "react-router-dom";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Contact() {
    return (
        <div className='App'>

<            div className="home">
                <h1>Contact Page</h1><br/>
                <Link to="form" className='btn btn-primary'>Create User</Link>
                <Outlet/>
            </div>

        </div>
    )
}

export default Contact