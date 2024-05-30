import { useEffect } from "react";
import Card from "../../partials/card/card";
import { useState } from "react";
import About from "../about/about";
const Body = () => {
    const [cardData, setCardData] = useState([]);
    const [count, setCount] = useState(0);
    const fetchApiData = async () => {
        const data = await fetch('https://marketplace.bnymellon.com/public/mp/prod/externalapi.json');
        const jsonData = await data.json();
        setCardData(jsonData.data.apis)
    }
    useEffect(() => {
        fetchApiData();
    }, []);

    console.log('Parent')
    return (
        <>
                <div className="searchbox">
                    <button type="button">Search</button>
                </div>
                <div className="card_parent">
                    {
                        cardData.map((data) => (
                            <Card key={data.id} info={data} />
                        ))
                    }
                </div>
                <button className="" type="button" onClick={() => { setCount(count + 1) }}>Count ++</button>
                <p>Count: {count}</p>

                <About></About>
        </>
    );
}
export default Body;