import React, { useContext } from 'react'
import { UserContext } from '../Provider/UserProvider'
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const PrivateRoute = ({ children }) => {
    const { user, userLoading } = useContext(UserContext);
    if(userLoading){
        return <progress className="progress w-56"></progress>
    }
    if (user) {
        return children;
    } else {

        return (
            <Navigate to="/login" replace={true}></Navigate>
        )
    }
}

export default PrivateRoute
