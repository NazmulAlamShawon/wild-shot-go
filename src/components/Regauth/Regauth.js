import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import app from '../../Firebase.init'
import { getAuth } from 'firebase/auth';
import { Navigate, useLocation } from 'react-router-dom';


const Regauth = ({children}) => {
    const auth = getAuth(app)
    
    const [user] = useAuthState(auth)
    const location =useLocation();
    if(!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default Regauth;