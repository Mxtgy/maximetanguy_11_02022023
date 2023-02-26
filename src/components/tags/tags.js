import styles from './Tags.module.css';

function Tags(props) {

    const tags = props.tags;

    return (
        <>
            {typeof tags === "object" && tags.length > 0 ? <div className={styles.tags_container}>{Object.values(tags).map( (tag, index) => <span className={styles.tag} key={index}>{tag}</span>)}</div> : null }
        </>
    );
}

export default Tags;