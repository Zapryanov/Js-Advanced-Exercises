import React from 'react';
import SubmitButton from '../../components/button/submit-button';
import Title from '../../components/title';
import style from './index.module.css';

const RegisterPage = () => {
    return (
        <div className={style.container}>
            <Title title="Register" />

            <SubmitButton title="Register" />
        </div>
    )
}

export default RegisterPage;