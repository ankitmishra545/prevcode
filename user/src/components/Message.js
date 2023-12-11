import React,{useEffect, useRef, useState} from 'react'
import HeaderComponent from './HeaderComponent';
import { useDispatch, useSelector } from 'react-redux';

function Message() {

    const messageInputRef = useRef();
    const length = useRef();

    const [inputMessage, setInputMessage] = useState([]);
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState([]);  
    
    const dispatch = useDispatch();
    const storedOject = useSelector((store) => {
        console.log(store);
        return store;
    })

    let messageDisplay = () => {
        setInputMessage(messageInputRef.current.value);
        setCount((messageInputRef.current.value).length);
    }

    let submittingMessage = () => {
        setMessage([inputMessage, ...message]); 
    }
  
    useEffect(() => {
        length.current = message.length;
        localStorage.setItem("messages",message);
        dispatch({type: "messages", value: message})
    },[message]);

    useEffect(() => {
        setMessage(storedOject.messages);   
    },[]); 

  return (
    <div>
        <HeaderComponent></HeaderComponent>
        <div className='messagePage'>
            <div className='messageContainer'>
                <div className='inputAndCount'>
                    <input type='text' onChange={() => {messageDisplay()}} ref={messageInputRef}></input>
                    <p>Count: <strong>{count}</strong></p>
                </div>
                <div className='messageDiv'>
                    <p>{inputMessage}</p>
                </div>
                    <button onClick={() => {submittingMessage()}}>Submit</button>
            </div>
            <div className='messagesDiv'>
                {message.map((element,index) => {
                    return <div key={index}><strong><i>Message-{length.current-index}:</i></strong> {element}</div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Message