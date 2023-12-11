import React, {useRef} from 'react';
import { Link , useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';

function ForgotPage() {

    let forgotEmailInputRef = useRef();
    let newPasswordInputRef = useRef();
    let confirmPasswordInputRef = useRef();

    let storedOject = useSelector((store) => {
      return store;
    })

    let navigate = useNavigate();

    let updatePassword = () => {

      console.log(storedOject);
        if(forgotEmailInputRef.current.value === storedOject.users){

          
            if(newPasswordInputRef.current.value === confirmPasswordInputRef.current.value){
                console.log("Passwword changed successfuly");
                navigate("/", {state: newPasswordInputRef.current.value});
            }else{
                console.log("password mismatched");
            }
        }else{
            alert("No such user");
        }     

    }

  return (

    <div className='forgotPageDiv'>        
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={forgotEmailInputRef}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>New Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={newPasswordInputRef}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Re-Type Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={confirmPasswordInputRef}/>
      </Form.Group>
      <div className='buttonInForgot'> 
      <Button variant="primary" type="button" onClick={() => {
        updatePassword();
      }}>
        Submit
      </Button>     
      <Link to='/'>Sign in</Link>
      </div>
      </Form>
    </div>
  )
}

export default ForgotPage