import React from 'react';

const AuthContext = React.createContext({
    loggedIn: false,
    username: ''
});

export default AuthContext;