import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header2 from '../Components/Header/Header2';

const HEADER_OFFSET = 110;

const Layout2 = () => {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) {
            window.scrollTo({ top: 0 });
            return;
        }

        const id = location.hash.replace('#', '');
        const scrollToTarget = () => {
            const el = document.getElementById(id);
            if (!el) return false;
            const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
            window.scrollTo({ top, behavior: 'smooth' });
            return true;
        };

        if (!scrollToTarget()) {
            const timeout = setTimeout(scrollToTarget, 150);
            return () => clearTimeout(timeout);
        }
    }, [location]);

    return (
        <div className='main-page-area2'>
            <Header2></Header2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout2;
