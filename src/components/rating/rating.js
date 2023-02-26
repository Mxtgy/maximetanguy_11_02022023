import stargrey from "../../assets/grey-star.svg";
import star from "../../assets/star.svg";
import styles from "./Rating.module.css";

function Rating(props) {

    const rating = props.rating;
    if (!rating) return;
    const greyStar = 5 - parseInt(rating);


    return (
        <div className={styles.stars}>
            { rating && parseInt(rating) > 0 ? new Array(parseInt(rating)).fill(0).map( (_,index) => <img className={styles.star} key={index} alt="star" src={star}/>) : null }
            { greyStar && greyStar > 0 ? new Array(greyStar).fill(0).map( (_, index) => <img className={styles.star} key={index} alt="star" src={stargrey}/>) : null }
        </div>
        
    );
}

export default Rating;