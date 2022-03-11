import { useRouter } from "next/router";
import { useRef, useState, useContext } from "react";
import UserContext from "../../store/user-context";
import { logout, signup, login, useAuth } from "../../firebase/initFirebase";
import styles from "./index.module.css";


function SignInPage() {
    const userContext = useContext(UserContext);
    const { logIn, logOut} = userContext;

    const [loading, setLoading] = useState(false);

    const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();

    const router = useRouter();

    async function handleSignup(e) {
        e.preventDefault();

        setLoading(true);
        try {
            await signup(emailRef.current.value, passwordRef.current.value);
            router.push("/");
        } catch (error) {
            alert(`Error from Sign Up: Please fill in the input fields correctly ...!`);
        }
        setLoading(false);

        emailRef.current.value = "";
        passwordRef.current.value = "";
    }

    async function handleSignin(e) {
        e.preventDefault();

        setLoading(true);
        try {
            const user = await login(emailRef.current.value, passwordRef.current.value)
            const {accessToken, email, uid} = user.user

            logIn({accessToken, email, uid})
            router.push("/");
        } catch (error) {
            alert("Error from Sign In: Please fill in the input fields correctly ...!")
        }
        setLoading(false);

        emailRef.current.value = "";
        passwordRef.current.value = "";
    }

    async function handleLogOut(e) {
        e.preventDefault();

        setLoading(true);
        try {
            await logout();
            logOut();
            router.push("/");
        } catch (error) {
            alert("Error from Log Out")
        }
        setLoading(false);
    }

    return (
        <>
            <div className={styles.background}>
                <div className={styles.shape}></div>
                <div className={styles.shape}></div>
            </div>
            <form className={styles.form}>
                <h3>Login Here</h3>
                <div>
                    <div>
                        <label className={styles.label} htmlFor="username">Username</label>
                        <input id="username" className={styles.input} type="email" placeholder="Email" ref={emailRef} />
                    </div>
                    <div>
                        <label className={styles.label} htmlFor="password">Password</label>
                        <input id="password" className={styles.input} type="password" placeholder="Password" ref={passwordRef} />
                    </div>
                </div>
                <div className={styles.wrapButtons}>
                    <button className={styles.button} disabled={ loading || currentUser } onClick={handleSignup}>Sign Up</button>
                    <button className={styles.button} disabled={ loading || currentUser } onClick={handleSignin}>Sign In</button>
                    <button className={styles.button} disabled={ loading || !currentUser } onClick={handleLogOut}>Log Out</button>
                </div>
            </form>
        </>
    )
}

export default SignInPage;