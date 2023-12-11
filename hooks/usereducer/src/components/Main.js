import React,{useReducer} from 'react'

const initialValue = [{
    id: 1,
    title: "t1",
    complete: false
},
{
    id: 2,
    title: "t2",
    complete: false
},
{
    id: 3,
    title: "t3",
    complete: false
}];

const reducer = (state, action) => {
    // console.log(state, action);
    switch(action.type){
        case "complete": 
            return state.map((todo) => {
                if(todo.id === action.id){
                    console.log(todo);
                    return {...todo, complete: !todo.complete};
                }else{
                    return todo;
                }
            });
            default: return state;
    }
};

function Main() {

    const [todos, dispatch] = useReducer(reducer, initialValue);

    const handleComplete = (todo) => {
        // console.log(todos);
        dispatch({type: "complete", id: todo.id})
    }

    

  return (
    <div>
        {todos.map((todo) => {
            return <div key={todo.id}>
                <div>
                    <input type='checkbox' onChange={() => { handleComplete(todo)}}></input>
                    <label>{todo.title}</label>
                </div>
            </div>
        })}

    </div>
  )
}

export default Main