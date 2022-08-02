import React from 'react';
import "./index.css"
import './font/Sverdlovsk.ttf'

import Home from "./pages/home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import masters from "./pages/masters";
const App = () => {
  return (
      <>
          <BrowserRouter>
              <Switch>
                <Route path='/' component={Home}/>
                  <Route path='/masters' component={masters}/>
              </Switch>
          </BrowserRouter>
      </>
  )
}
export default App;