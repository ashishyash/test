import MyCard from "../../partials/mycard/mycard";
import useFetch from "../../utility/useFetch";
import Button from '@mui/material/Button';

const Body = () => {
    const [data] = useFetch('https://marketplace.bnymellon.com/public/mp/prod/externalapi.json');
    console.log(data);
    return (
        data ? <>
            <div className="searchbox">
            <Button color="success" variant="contained">Hello world</Button>
            </div>
            <div className="card_parent">
                {
                    data?.data?.apis.map((cardData) => ( <MyCard key={cardData.id} info={cardData} />))
                }
            </div>
        </> : <div>loading</div>
    ); 
}
export default Body;