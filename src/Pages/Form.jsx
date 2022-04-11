import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function Form(props) {

    return (
        <div className='App'>

            <div className="form">
                <div className="form-group">
                    <label>Name</label>
                    <input onChange={ e => props.setName(e.target.value) } type="text" className='form-control'/>
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input onChange={ e => props.setPhone(e.target.value) } type="tel" className='form-control'/>
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input onChange={ e => props.setAge(e.target.value) } type="number" className='form-control'/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input onChange={ e => props.setEmail(e.target.value) } type="email" className='form-control'/>
                </div><br/>

                <Link to="/contact/submitted" className='btn btn-primary'>Submit</Link>
            </div>
        
        </div>
    )
}

export default Form