import { createContext } from "react";

const UserContext = createContext({
    loggedIn: "false"
});

export function UserContextProvider(props) {
    return <UserContext.Provider>{props.children}</UserContext.Provider>
}

export default UserContext;