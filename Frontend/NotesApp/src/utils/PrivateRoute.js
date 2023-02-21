import React from 'react'
import {Link,Redirect,Route} from 'react-router-dom'
 
const PrivateRoute = ({children,...rest}) => {
    const auth = false;
  return (
    <Route {...rest}>{!auth ? <Redirect to="/login"/> : children }</Route>
  )
}

export default PrivateRoute