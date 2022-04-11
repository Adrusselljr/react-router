import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Form from './Pages/Form';
import FormSubmit from './Pages/FormSubmit';
import Error from './Pages/Error';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [age, setAge] = useState(0)
    const [email, setEmail] = useState("")

    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <NavBar /> }>
                        <Route index element={ <Home /> } />
                        <Route path="about" element={ <About /> } />
                        <Route path="contact" element={ <Contact /> } >
                            <Route path="form" element={ <Form name={name} setName={setName} phone={phone} setPhone={setPhone} age={age} setAge={setAge} email={email} setEmail={setEmail} /> } />
                            <Route path="submitted" element={ <FormSubmit name={name} phone={phone} age={age} email={email} /> } />
                        </Route>
                    <Route path="*" element={ <Error /> } />
                </Route>
            </Routes>
    </BrowserRouter>
    )
}

export default App