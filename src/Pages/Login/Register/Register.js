import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import "./Register.css"


const Register = () => {
    const navigateReg = useNavigate();
    const navigateLogin = event => {
    navigateReg('/login');
   
    }
    const handleRegForm = event => {
        event.preventDefault();
         const name = event.target.name.value;
         const email = event.target.email.value;
         const pass = event.target.pasword.value;
    }
    return (
        <div className='reg-form'>
            <h2>Please register</h2>
             <form onSubmit={handleRegForm}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                  <input type="email" name="email" id="" placeholder='Your email' />
                  <input type="password" name="password" id="" placeholder='Your password'/>
                  <input type="submit" value="Register"/>
             </form>
             <p> New user : <Link  to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Register</Link></p>


  

        </div>
    );
};

export default Register;