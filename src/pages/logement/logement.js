import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

function Logement() {

    const [actualData, setActualData] = useState([]);

    const { idproperty } = useParams();
    const url = "http://localhost:3000/datas/data.json";

    async function fetchData() {
        
        try {
            const response = await fetch(url);
            const json = await response.json();
            const data = json.filter(x => x.id === idproperty);
            setActualData(data);
        } catch(err) {
            console.log(err);
        }
    }
    console.log(actualData);
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <span></span>
            <p>I am the logement page of {idproperty}</p>
        </>
    );
}

export default Logement;