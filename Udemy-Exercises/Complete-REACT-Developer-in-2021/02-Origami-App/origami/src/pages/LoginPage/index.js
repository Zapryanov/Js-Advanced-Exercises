import React, { useContext, useState } from 'react';
import SubmitButton from '../../components/button/submit-button';
import Input from '../../components/input';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import UserContext from '../../Context';
import authenticate from '../../utils/authenticate';
import style from './index.module.css';

const LoginPage = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const context = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await authenticate('http://localhost:9999/api/user/login', {
            username,
            password
        }, (user) => {
            console.log('Yeeyyy...!!!');
            
            context.logIn(user)
            props.history.push("/");
        }, (e) => {
            console.log('Error...!!!', e)
        })
    }

    return (
        <PageLayout>
            <form className={style.container} onSubmit={handleSubmit}>
                <Title title="Login" />
                <Input value={username} onChange={(ev) => setUsername(ev.target.value)} label="Username" id="username" />
                <Input type="password" value={password} onChange={(ev) => setPassword(ev.target.value)} label="Password" id="password" />
                <SubmitButton title="Login" />
            </form>
        </PageLayout>
    )
}

export default LoginPage;