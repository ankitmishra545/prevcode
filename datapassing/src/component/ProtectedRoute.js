import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    if(localStorage.getItem("email") === null){
        return <Navigate replace to='/login'/>
    }
    return children
}

export default ProtectedRoute;