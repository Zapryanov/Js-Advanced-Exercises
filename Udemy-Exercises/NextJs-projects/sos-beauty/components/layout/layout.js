import Footer from "./footer";
import MainHeader from "./main-header";

function Layout(props) {
    return (
        <>
            <MainHeader />
            <main>{props.children}</main>
            <Footer />
        </>
    )
}

export default Layout;