import styles from "./User.module.css";

function User(props) {

    const username = props.name;
    const userpicture = props.picture;

    return (
        <div className={styles.user_container}>
            <div className={styles.user}>
                { username ? username.split(' ').map( (name, index) => <span key={index}>{name}</span>) : null }
            </div>
            <img src={userpicture} className={styles.user_picture} alt={username}/>
        </div>
    );
}

export default User;