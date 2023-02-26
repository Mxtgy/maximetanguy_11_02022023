import { useState } from "react";
import arrow from "../../assets/arrow-slider.svg";
import styles from './Slider.module.css';

function Slider(props) {

    const [slideIndex, setSlideIndex] = useState(1);
    const pictures = props.pictures;

    const nextSlide = () => {
        if(slideIndex !== pictures.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === pictures.length){
            setSlideIndex(1)
        }
    }
    
    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(pictures.length)
        }
    }

    return (
        <section className={styles.slider}>

            {pictures.map((picture, index) => {
                return (
                    <div key={index} className={slideIndex === index + 1 ? `${styles.slide} ${styles.active}` : `${styles.slide}`}>
                        <img key={index} src={picture} alt={`Logement ${index}`}/>
                    </div>
                )
            })}

            { pictures.length > 1 ?
                <>
                    <span className={styles.counter}>{slideIndex}/{pictures.length}</span>
                    <button onClick={prevSlide} className={styles.btn_slide_left}><img src={arrow} alt="previous"/></button>
                    <button onClick={nextSlide} className={styles.btn_slide_right}><img src={arrow} alt="next"/></button>
                </>
                : null
            }

        </section>
    );
}

export default Slider;