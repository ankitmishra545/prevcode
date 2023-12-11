import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingOne() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get('https://dummyjson.com/carts')
        .then(response => {
            console.log(response.data.carts[0].products[0].title);
            setLoading(false);
            setPost(response.data.carts[0].products[0].title);
            setError('');
        })
        .catch(error => {
            setLoading(false);
            setPost({});
            setError("Something went wrong");
        })
    }, [])
    
  return (
    <div>
        {
            loading ? "Loading" : post
        }
        {
            error ? error : null
        }
    </div>
  )
}

export default DataFetchingOne