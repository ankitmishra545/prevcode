import React, { useEffect, useRef } from 'react';
import {useNavigate, useLocation, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {

    let emailInputRef = useRef();
    let passwordInputRef = useRef();

    let navigate = useNavigate();

    let location = useLocation();

    let user = {details: {
        name: "Ankit",
        email: "ankit@gmail.com",
        mobile: 9540954041,
        city: "Hyderabad",
        profilePic: "",
        loggedIn: false
    }, password: ""}

    useEffect(() => {
      emailInputRef.current.value = localStorage.getItem("email");
      passwordInputRef.current.value = localStorage.getItem("password");  
          if(location.state){
            user.password = location.state;
          }else{
            user.password = "ankit";
          }
        dispatch({type: "loading", value: user.details.email});
    },[]);

    let validateLogin = () => {
        if(emailInputRef.current.value === user.details.email && passwordInputRef.current.value === user.password){
           user.details.loggedIn = true;
           dispatch({type: "login", value: user.details});
           localStorage.setItem("email",emailInputRef.current.value);
           localStorage.setItem("password",user.password);
           navigate("/home");
        }else{
            alert("Invalid credentials");
        }
    }

  return (
    <div className='loginDiv'>        
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailInputRef}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passwordInputRef} />
        </Form.Group>
        <div className='buttonInForgot'>
          <Button variant="primary" type="button" onClick={() => {validateLogin()}}>
            Submit
          </Button>
          <Link to='/forgotPWD'>Forgot Password</Link>
        </div>
      </Form>
    </div>
  )
}

export default Login