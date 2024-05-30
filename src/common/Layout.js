
import { Outlet } from 'react-router-dom';
import Header from '../partials/header/Header';
import Footer from '../partials/footer/Footer';
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>

    )
}

export default Layout