import { Link } from "react-router-dom";
import styles from './Card.module.css';

function Card(props) {

    const data = props.data;
    const id = data.id;
    const title = data.title;
    const cover = data.cover;

    return(
        <Link className={styles.card} to={`/logement/${id}`}> 
            <img src={cover} alt={`${title}`}></img>
            <h2>{title}</h2>
        </Link>
    );
}

export default Card;