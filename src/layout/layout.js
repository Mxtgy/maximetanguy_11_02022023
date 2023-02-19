import Header from './header';
import Footer from './footer';
import styles from './Layout.module.css';

function Layout({children}) {
    return (
        <>
            <Header/>
            <main className={styles.main}>{children}</main>
            <Footer/>
        </>
    );
}

export default Layout;