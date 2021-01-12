import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import App from './App';
import Monthly from "./screen/Monthly";
import Sub from "./screen/Sub";
import Special from "./screen/Special";
import ScrollToTop from "./components/scrollToTop";

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop/>
        <Switch>
            <Route path="/" exact render={props => <App {...props}/> } />
            <Route path="/monthly/:id" render={props => <Monthly {...props}/> } />
            <Route path="/sub/:id" render={props => <Sub {...props}/> } />
            <Route path="/special/:id" render={props => <Special {...props}/> } />

            <Redirect to="/"/>
        </Switch>

    </BrowserRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
