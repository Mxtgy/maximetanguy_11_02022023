import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Slider from "../../components/slider/Slider.js";
import Tags from "../../components/tags/Tags.js";
import User from "../../components/user/User.js";
import Rating from "../../components/rating/Rating.js";
import Collapse from '../../components/collapse/Collapse.js';
import styles from './Logement.module.css';

function Logement() {
    
    const [actualData, setActualData] = useState([]);
    const [logErr, setLogErr] = useState(false);
    const { idproperty } = useParams();

    useEffect(() => {

        async function fetchData() {
            
        const url = "http://localhost:3000/datas/data.json";
            
            try {
                const response = await fetch(url);
                const json = await response.json();
                const data = json.filter(x => x.id === idproperty);
                if (data.length > 0) {
                    setActualData(data[0]);
                } else {
                    setLogErr(true);
                }
            } catch(err) {
                console.log(err);
            }
        }
        fetchData();
    }, [idproperty]);

    return (
        <>
            {  logErr ? <Navigate to="/*" /> : 
                <>
                    { actualData.pictures ? <Slider pictures={actualData.pictures}/> : null }
                    <section className={styles.informations}>

                        <div className={styles.first_block}>
                            <h1 className={styles.title}>{actualData.title}</h1>
                            <address className={styles.location}>{actualData.location}</address>
                            <Tags tags={actualData.tags} />
                        </div>

                        <div className={styles.second_block}>
                            <User {...actualData.host} />
                            <Rating rating={actualData.rating} />
                        </div>
                    </section>

                    <section className={styles.collapses_container}>
                        { actualData.description ? <Collapse page="logement" name="Description" text={actualData.description}/> : null }
                        { actualData.equipments ? <Collapse page="logement" name="Equipements" text={actualData.equipments}/> : null }
                    </section>

                </>
            }
        </>
    );
}

export default Logement;