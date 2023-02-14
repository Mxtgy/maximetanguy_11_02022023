import footer_logo from '../assets/footer_logo.svg';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <img src={footer_logo} alt='Logo Kasa Footer'></img>
            <span>© 2020 Kasa. All rights reserved</span>
        </footer>
    );
}

export default Footer;