import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import App from './App'
import Search from './search'

export default class Routing extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path="/" component={App} />
                    <Route path="/search" component={Search} />
                </Router>
            </div>
        );
    }
}