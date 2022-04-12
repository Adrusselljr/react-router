import React from 'react'
import { Link, Outlet } from "react-router-dom";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Contact() {
    return (
        <div className='App'>

            <div className="home">
                <h1>Contact Page</h1><br/>
                <Link to="form" className='btn btn-primary'>Create User</Link>
                {/* <Link to={`form?name=${nameSearchParam}&phone=${phoneSearchParam}&age=${ageSearchParam}$email=${emailSearchParam}`} className='btn btn-primary'>Share</Link> */}
                <Outlet/>
            </div>

        </div>
    )
}

export default Contact