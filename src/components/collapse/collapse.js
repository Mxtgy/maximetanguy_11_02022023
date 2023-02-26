import styles from './Collapse.module.css';
import chevron from '../../assets/arrow.svg';

function Collapse(props) {

    const summary = props.name;
    const texts = props.text;
    const page = props.page;

    return (
        <details className={ page === "logement" ? `${styles.details} ${styles.logement}` : `${styles.details}` }>
            <summary>
                <span>{summary}</span>
                <img src={chevron} alt='chevron'></img>
            </summary>
            { typeof texts == "object" && texts.length > 1 ? <p>{Object.values(texts).map( (text, index) => <span key={index}>{text}</span>)}</p> : <p>{texts}</p> }
        </details>
    );
}

export default Collapse;