import banner_home from '../../assets/banner_home.jpg';
import banner_about from '../../assets/banner_about.jpg';
import styles from './Banner.module.css';

function Banner(props) {

    const letype = props.type;

    return (
        <section className={letype === 'banner-home' ? `${styles.banner}` : `${styles.banner} ${styles.about}`}>
            <img src={letype === 'banner-home' ? `${banner_home}` : `${banner_about}`} alt={letype}></img>
            {letype === 'banner-home' && <h1><span>Chez vous,</span> partout et ailleurs</h1>}
        </section>
    );
}

export default Banner;