import Header from './Header.js';
import Footer from './Footer.js';
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
