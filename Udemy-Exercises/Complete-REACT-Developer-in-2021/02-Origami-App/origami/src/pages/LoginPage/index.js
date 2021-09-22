import React, { Component } from 'react';
import SubmitButton from '../../components/button/submit-button';
import Input from '../../components/input';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import style from './index.module.css';

class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    onChange = (e, type) => {
        const newState = {};
        newState[type] = e.target.value;
        this.setState(newState)
    }

    render() {
        const {email, password } = this.state;

        return (
            <PageLayout>
                <div className={style.container}>
                    <Title title="Login" />
                    <Input value={email} onChange={(ev) => this.onChange(ev, "email")} label="Email" id="email" />
                    <Input value={password} onChange={(ev) => this.onChange(ev, "password")} label="Password" id="password" />
                    <SubmitButton title="Login" />
                </div>
            </PageLayout>
        )
    }
}

export default LoginPage;