import React, { Component } from 'react';
import SubmitButton from '../../components/button/submit-button';
import Input from '../../components/input';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import authenticate from '../../utils/authenticate';
import style from './index.module.css';

class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (e, type) => {
        const newState = {};
        newState[type] = e.target.value;
        this.setState(newState)
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { username, password } = this.state;

        await authenticate('http://localhost:9999/api/user/login', {
            username,
            password
        }, () => {
            console.log('Yeeyyy...!!!');
            this.props.history.push("/");
        }, (e) => {
            console.log('Error...!!!', e)
        })

        // try {
        //     const promise = await fetch('http://localhost:9999/api/user/login', {
        //         method: 'POST',
        //         body: JSON.stringify({
        //             username,
        //             password
        //         }),
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     })
    
        //     const authToken = promise.headers.get("Authorization");
        //     document.cookie = `x-auth-token=${authToken}`;
            
        //     const response = await promise.json();
    
        //     if (response.username && authToken) {
        //         this.props.history.push("/")
        //     }
        // } catch (error) {
        //     console.log(error);
        // }
    }

    render() {
        const { username, password } = this.state;

        return (
            <PageLayout>
                <form className={style.container} onSubmit={this.handleSubmit}>
                    <Title title="Login" />
                    <Input value={username} onChange={(ev) => this.handleChange(ev, "username")} label="Username" id="username" />
                    <Input type="password" value={password} onChange={(ev) => this.handleChange(ev, "password")} label="Password" id="password" />
                    <SubmitButton title="Login" />
                </form>
            </PageLayout>
        )
    }
}

export default LoginPage;