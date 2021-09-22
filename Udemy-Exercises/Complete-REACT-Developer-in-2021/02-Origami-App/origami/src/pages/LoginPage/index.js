import React from 'react';
import SubmitButton from '../../components/button/submit-button';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import style from './index.module.css';

const LoginPage = () => {
    return (
        <PageLayout>
            <div className={style.container}>
                <Title title="Login" />

                <SubmitButton title="Login" />
            </div>
        </PageLayout>
    )
}

export default LoginPage;