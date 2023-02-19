import Banner from '../../components/banner/banner.js';
import List from '../../components/list/list.js';
import styles from './Home.module.css';

function Home() {
    return (
        <>
            <Banner type='banner-home' />
            <section className={styles.list_section}>
                <List />
            </section>
        </>
    );
}

export default Home;