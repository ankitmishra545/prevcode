import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const navigate = useNavigate();

    const validateLogin = () => {
        if(emailInputRef.current.value === "ankit" && passwordInputRef.current.value === "123"){
            localStorage.setItem("email","ankit");
            navigate("/");
        }        
    }

    return(
        <form>
            <div>
                <label>Email</label>
                <input type='email' ref={emailInputRef}></input>
            </div>
            <div>
                <label>Password</label>
                <input type='password' ref={passwordInputRef}></input>
            </div>
                <button type='submit' onClick={() => {validateLogin()}}>Submit</button>
        </form>
    )
}

export default Login;