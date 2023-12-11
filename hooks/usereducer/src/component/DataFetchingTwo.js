import axios from 'axios'
import React, { useEffect, useReducer} from 'react'

    const initialState = {
        loading: true,
        error: "",
        post: {}
    }

    const reducer = (state, action) => {
        switch(action.type){
            case "FETCH_SUCCESS":
                return {
                    loading: false,
                    error: '',
                    post: action.payload
                }

            case "FETCH_ERROR":
                return {
                    loading: false,
                    error: "Something went wrong",
                    post: {}
                }

            default:
                return state;
        }
    }
function DataFetchingTwo() {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get("https://dummyjson.com/carts")
        .then(response => {
            dispatch({type: 'FETCH_SUCCESS', payload: response.data.carts[0].products[0].title})
        })
        .catch(error => {
            dispatch({type: "FETCH_ERROR"});
        })
    }, [])
  return (
    <div>
        {state.loading ? "Loading" : state.post}
        {state.error ? state.error : null}
    </div>
  )
}

export default DataFetchingTwo