import React from 'react'
import { Switch, Route, Router, Redirect } from 'react-router-dom'
import ComponentMenu from './ComponentMenu';


const Main = () => (
    <Switch>
      <Route exact path="/" render={() =><ComponentMenu/> }/>
    </Switch>
)

export default Main