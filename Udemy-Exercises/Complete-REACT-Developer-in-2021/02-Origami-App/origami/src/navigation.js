import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ErrorPage from './pages/error-page';
import HomePage from './pages/home-page';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/profile';
import RegisterPage from './pages/register-page';
import ShareThoughtsPage from './pages/share-thoughts';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/share" component={ShareThoughtsPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/profile/:userId" component={ProfilePage} />
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;