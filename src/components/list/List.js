import { useState } from "react";
import { useEffect } from "react";
import Card from '../card/Card.js';

function List() {

    const [actualData, setActualData] = useState([]);

    const url = "http://localhost:3000/datas/data.json";

    async function fetchData() {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setActualData(json);
        } catch(err) {
            console.log(err);
        }
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {actualData.map(card => <Card data={card} key={card.id} />)}
        </>
    );
}
export default List;
