import { useEffect, useState } from "react";
const useFetch = (url) => {
    console.log('url in custom hook  ', url);
    const [apiData, setApiData] = useState(null);
    const fetchData = async () => {
        const data = await fetch(url);
        const jsonData = await data.json();
        setApiData(jsonData);
    }
    useEffect(() => {
        fetchData()
    }, []);
    return [apiData]
}
export default useFetch;