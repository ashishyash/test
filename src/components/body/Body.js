import Card from "../../partials/card/card";
import useFetch from "../../utility/useFetch";
const Body = () => {
    const [data] = useFetch('https://marketplace.bnymellon.com/public/mp/prod/externalapi.json');
    console.log(data);
    return (
        data ? <>
            <div className="searchbox">
                <button type="button">Search</button>
            </div>
            <div className="card_parent">
                {
                    data?.data?.apis.map((cardData) => ( <Card key={cardData.id} info={cardData} />))
                }
            </div>
        </> : <div>loading</div>
    ); 
}
export default Body;