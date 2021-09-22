import React, { Component } from 'react';
import SubmitButton from '../../components/button/submit-button';
import Input from '../../components/input';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import style from './index.module.css';

class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            rePassword: ""
        }
    }

    onChange = (e, type) => {
        const newState = {};
        newState[type] = e.target.value;
        this.setState(newState);
    }

    render() {
        const { email, password, rePassword } = this.state;

        return (
            <PageLayout>
                <div className={style.container}>
                    <Title title="Register" />
                    <Input value={email} onChange={(e) => this.onChange(e, "email")} label="Email" id="email" />
                    <Input value={password} onChange={(e) => this.onChange(e, "password")} label="Password" id="password" />
                    <Input value={rePassword} onChange={(e) => this.onChange(e, "rePassword")} label="Re-Password" id="re-password" />
                    <SubmitButton title="Register" />
                </div>
            </PageLayout>
        )
    }
}

export default RegisterPage;