import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {Route, BrowserRouter, Switch} from "react-router-dom"
import LoginExport from './components/Login'
import {Logout} from './components/Logout'

import  {createStore} from 'redux'

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/login' component={LoginExport}/>
                <Route path='/logout' component={Logout}/>
            </Switch>
        </BrowserRouter>
    )
}

function Project(){
    return(
        <Routes/>
    )
}

const projectReducer = (state, action) =>{
  switch (action.type) {
      default:
          return {
              id: 1,
              name: 'lebron'
          };
  }
};

export const store = createStore(projectReducer);

ReactDOM.render(<Project/>, document.getElementById('root'));
registerServiceWorker();
