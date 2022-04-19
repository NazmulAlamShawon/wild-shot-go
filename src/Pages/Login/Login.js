import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link, useNavigate } from 'react-router-dom';



const Login = () => {
    const emailRef= useRef('');
    const passRef= useRef('');
    const navigate = useNavigate()
    const formSubmit = event =>{
        event.preventDefault();
       const email = emailRef.current.value;
       const pass = passRef.current.value;
       console.log(email,pass)

    }
   const navigateRegister = event => {
       navigate('/register');
   }
    return (
        <div className='conatiner w-50 mx-auto mt-3 border-2'>
            <h1 className='text-primary'>plese login</h1>
            <Form onSubmit={formSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p> New user : <Link  to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>

        </div>
    );
};

export default Login;