import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function FormSubmit(props) {
    return (
        <div className='App'>

            <div className="form">
                <h1>User was Created!</h1><br/>
                <p>Name: { props.name }</p><br/>
                <p>Phone: { props.phone }</p><br/>
                <p>Age: { props.age }</p><br/>
                <p>Email: { props.email }</p><br/>
            </div>

        </div>
    )
}

export default FormSubmit