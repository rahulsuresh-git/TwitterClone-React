import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Search from './search/search'
import {BrowserRouter,
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

ReactDOM.render(

    <BrowserRouter>
    <div>
        <Route exact path="/" component={App} />
        <Route path="/search" component={Search} />
    </div>
  </BrowserRouter>
    
    
    
    
    
    
    
    
    
    
    , document.getElementById('root'));
registerServiceWorker();
