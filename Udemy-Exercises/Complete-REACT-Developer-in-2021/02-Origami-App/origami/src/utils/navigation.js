const getNavigation = (userId) => {
    
    const links = [
        {
            title: "Publikations",
            link: "/"
        },
        {
            title: "Share",
            link: "/share"
        },
        {
            title: "Profile",
            link: `/profile/${userId}`
        },
        {
            title: "Login",
            link: "/login"
        },
        {
            title: "Register",
            link: "/register"
        }
    ]

    return links

}

export default getNavigation;