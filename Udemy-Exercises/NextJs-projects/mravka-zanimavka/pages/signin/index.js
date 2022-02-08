import { useRef, useState } from "react";

import { logout, signup, login, useAuth } from "../../firebase/initFirebase";

function SignUp() {
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSignup(e) {
        e.preventDefault();

        setLoading(true);
        try {
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch (error) {
            alert(`Error from Sign Up: ${error.message}`);
        }
        setLoading(false);
    }

    async function handleLogin(e) {
        e.preventDefault();

        setLoading(true);
        try {
            console.log(currentUser)
            await login(emailRef.current.value, passwordRef.current.value)
        } catch (error) {
            alert("Error from Log In")
        }
        setLoading(false);
    }

    async function handleLogOut(e) {
        e.preventDefault();

        setLoading(true);
        try {
            await logout();
        } catch (error) {
            alert("Error from Log Out")
        }
        setLoading(false);
    }

    // 

    return (
        <form>
            <div>Currently logged in as: {currentUser?.email}</div>
            <p>{currentUser?.uid}</p>
            <div>
                <input type="email" placeholder="Email" ref={emailRef} />
                <input type="password" placeholder="Password" ref={passwordRef} />
            </div>
            <button disabled={ loading || currentUser } onClick={handleSignup}>Sign Up</button>
            <button disabled={ loading || currentUser } onClick={handleLogin}>Log In</button>
            <button disabled={ loading || !currentUser } onClick={handleLogOut}>Log Out</button>
        </form>
    )
}

export default SignUp;