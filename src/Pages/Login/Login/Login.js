import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../Social/Social';
import './Login.css'
const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('')

    const handelSubmit = event =>{
         event.preventDefault() 
         const email = emailRef.current.value;
         const password = passwordRef.current.value;
         signInWithEmailAndPassword(email, password)
    }
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        
      ] = useSignInWithEmailAndPassword(auth);
      

    const navigate = useNavigate();
    if(user){
        navigate(from, { replace: true });
    }

    const navigateRegister = () =>{
        navigate("/register")
    }

    return (
        <div  className='container w-50 mx-auto' >
            <h1 className='text-primary text-center mt-3'>Please  Login</h1>
            <Form onSubmit={handelSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  ref={emailRef} type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New to Genius Car? <Link to='/register' className='text-primary pe-auto text-decoration-none'  onClick={navigateRegister}>Please Register</Link></p>
            <Social></Social>
        </div>
    );
};

export default Login;