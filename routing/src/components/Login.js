import React, {useRef, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';


function Login() {

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = {
    email: "ankit@mail.com",
    loggedIn: false,
    password: "ankit"
  };

  useEffect(() => {
    emailInputRef.current.value = localStorage.getItem("email");
    passwordInputRef.current.value = localStorage.getItem("password");
  });

  const validateLogin = () => {
    if(emailInputRef.current.value === user.email && passwordInputRef.current.value === user.password){
      user.loggedIn = true;
      localStorage.setItem("email", emailInputRef.current.value);
      localStorage.getItem("password", passwordInputRef.current.value);
      dispatch({type: "validate", value: user.loggedIn});
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
      </div>
    </Form>
  </div>
)
}

export default Login