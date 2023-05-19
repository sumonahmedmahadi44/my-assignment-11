import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loader} = useContext(AuthContext);
    if(loader){
        return <div className='text-center'><div><progress className="progress progress-primary w-56" value="0" max="100"></progress></div>
        <div><progress className="progress progress-secondary w-56" value="10" max="100"></progress></div>
        <div><progress className="progress progress-success w-56" value="40" max="100"></progress></div>
        <div><progress className="progress progress-accent w-56" value="70" max="100"></progress></div>
        <div><progress className="progress progress-secondary w-56" value="100" max="100"></progress></div></div>
    }
    if(user){
        return children;
    }
    return <Navigate to ='/login' state={{from:location}} replace ></Navigate>
};

export default PrivateRoute;