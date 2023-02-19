import styles from './Collapse.module.css';
import chevron from '../../assets/arrow.svg';

function Collapse(props) {

    const summary = props.name;
    const text = props.text;

    return (
        <details className={styles.details}>
            <summary>
                <span>{summary}</span>
                <img src={chevron} alt='chevron'></img>
            </summary>
            <p>{text}</p>
        </details>
    );
}

export default Collapse;