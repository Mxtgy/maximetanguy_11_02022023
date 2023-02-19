import { NavLink } from 'react-router-dom';
import styles from './Error.module.css';

function Error() {
    return (
        <section className={styles.error}>
            <h1>404</h1>
            <span>Oups! La page que vous&nbsp;demandez&nbsp;n'existe&nbsp;pas.</span>
            <NavLink to="/">Retourner sur la page d’accueil</NavLink>
        </section>
    );
}

export default Error;