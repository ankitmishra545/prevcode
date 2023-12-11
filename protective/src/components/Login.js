import { Navigate } from 'react-router-dom'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';


function Login() {

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateLogin = () => {
    console.log(localStorage.getItem("email"))

    if (emailInputRef.current.value === "ankit" && passwordInputRef.current.value === "123") {
      localStorage.setItem("email", emailInputRef.current.value)
      dispatch({ type: "validate", value: true });
      navigate("/")
    } else {
      alert("Invalid credentials")
    }
  }
  
  return (
    <div className='loginDiv'>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailInputRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passwordInputRef} />
        </Form.Group>
        <div className='buttonInForgot'>
          <Button variant="primary" type="button" onClick={() => { validateLogin() }}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default Login