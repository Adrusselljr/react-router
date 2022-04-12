import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function Form(props) {
    const [click, setClick] = useState(false)
    const [searchParams] = useSearchParams()
    const nameSearchParam = searchParams.get("name")
    const phoneSearchParam = searchParams.get("phone")
    const ageSearchParam = searchParams.get("age")
    const emailSearchParam = searchParams.get("email")
    
    useEffect(() => {
        props.setName(nameSearchParam)
        props.setPhone(phoneSearchParam)
        props.setAge(ageSearchParam)
        props.setEmail(emailSearchParam)
    }, [nameSearchParam, phoneSearchParam, ageSearchParam, emailSearchParam])

    const handleOnClick = () => {
        setClick(prevState => !prevState)
    }

    return (
        <div className='App'>

            <div className="form">
                <div className="form-group">
                    <label>Name</label>
                    <input value={ props.name } onChange={ e => props.setName(e.target.value) } type="text" className='form-control'/>
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input value={ props.phone } onChange={ e => props.setPhone(e.target.value) } type="tel" className='form-control'/>
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input value={ props.age } onChange={ e => props.setAge(e.target.value) } type="number" className='form-control'/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input value={ props.email } onChange={ e => props.setEmail(e.target.value) } type="email" className='form-control'/>
                </div><br/>

                <div className="links">
                    <Link to="/contact/submitted" className='btn btn-primary'>Submit</Link>
                    <button onClick={ handleOnClick } className='btn btn-primary'>Generate URL</button><br/><br/>
                </div>
            </div>

            {click === true
                ? <p className='url'>{ `http://localhost:3000/contact/form?name=${props.name}&phone=${props.phone}&age=${props.age}$email=${props.email}` }</p>
                : ""
            }
        
        </div>
    )
}

export default Form