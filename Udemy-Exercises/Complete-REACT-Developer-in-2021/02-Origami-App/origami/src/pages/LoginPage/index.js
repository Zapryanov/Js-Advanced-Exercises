import React from 'react';
import SubmitButton from '../../components/button/submit-button';
import Title from '../../components/title';
import style from './index.module.css';

const LoginPage = () => {
    return (
        <div className={style.container}>
            <Title title="Login" />

            <SubmitButton title="Login" />
        </div>
    )
}

export default LoginPage;