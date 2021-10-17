import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import ErrorPage from './pages/error-page';
import HomePage from './pages/home-page';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/profile';
import RegisterPage from './pages/register-page';
import ShareThoughtsPage from './pages/share-thoughts';
import UserContext from './Context';

const Navigation = () => {
    const context = useContext(UserContext)
    const loggedIn = context.user.loggedIn;

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/share">
                    {loggedIn ? (<ShareThoughtsPage />) : (<Redirect to="/login" />)}
                </Route>
                <Route path="/register">
                    {loggedIn ? (<Redirect to="/" />) : (<RegisterPage />)}    
                </Route>
                <Route path="/login">
                    {loggedIn ? (<Redirect to="/" />) : (<LoginPage />)}    
                </Route>
                <Route path="/profile/:userId">
                    {loggedIn ? (<ProfilePage />) : (<Redirect to="/login" />)}
                </Route>
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;