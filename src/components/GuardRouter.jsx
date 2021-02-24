import React from 'react'
import { Route, Redirect } from "react-router-dom";

const GuardRouter = ({ component: Component, auth, ...rest }) => {
    return (
        <Route {...rest} render={(props) => {
            return auth === true
                ? <Component {...props} />
                : <Redirect to='/login' />
        }} />
    )
}

export default GuardRouter
