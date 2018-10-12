import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {Route, BrowserRouter, Switch} from "react-router-dom"
import LoginExport from './components/Login'

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/login' component={LoginExport}/>
            </Switch>
        </BrowserRouter>
    )
}

function Project(){
    return(
        <Routes/>
    )
}


ReactDOM.render(<Project/>, document.getElementById('root'));
registerServiceWorker();
