import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../context/AuthContextProvider';

export const PrivateRouter = (props) => {
    const { currentUser } = useAuth();

    return (
    currentUser ? (<Route path={props.path} component={props.component}/> ) : ( <Redirect to="/login"/> )
    )
};