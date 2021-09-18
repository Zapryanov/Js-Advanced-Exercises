const getNavigation = (userId) => {
    
    const links = [
        {
            title: "Publikations",
            links: "/"
        },
        {
            title: "Share",
            links: "/share"
        },
        {
            title: "Profile",
            links: `/profile/${userId}`
        },
        {
            title: "Login",
            links: "/login"
        },
        {
            title: "Register",
            links: "/register"
        }
    ]

    return links

}

export default getNavigation;