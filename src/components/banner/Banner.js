import banner_home from '../../assets/banner_home.jpg';
import banner_about from '../../assets/banner_about.jpg';
import styles from './Banner.module.css';

function Banner(props) {

    const type = props.type;

    return (
        <section className={ type === 'banner-home' ? `${styles.banner}` : `${styles.banner} ${styles.about}` }>
            <img src={ type === 'banner-home' ? `${banner_home}` : `${banner_about}` } alt={type}></img>
            { type === 'banner-home' && <h1><span>Chez vous,</span> partout et ailleurs</h1> }
        </section>
    );
}

export default Banner;
