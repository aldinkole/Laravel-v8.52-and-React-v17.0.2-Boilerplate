import React from 'react';

// Creating routes in react with react-router-dom
import {
    BrowserRouter as Router,
    Switch,
    Route,
    BrowserRouter
  } from 'react-router-dom';

  // Import All Routes
import HomePage from './components/routes/HomePage';
import DocumentationPage from './components/routes/DocumentationPage';
import NotFound from './components/routes/NotFound';

export default function Index() {

    return (

        // Here we are adding routes for our React-App

        <BrowserRouter>
           <Switch>

               <Route exact path='/documentation' component={DocumentationPage} />
               <Route exact path='/' component={HomePage} />
               <Route component={NotFound} />

           </Switch>
        </BrowserRouter>
    )

}



