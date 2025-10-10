import axios from "axios";
import { useEffect, useState } from "react";


const useApps = () => {
    const [allAppsData, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        axios.get('../allAppsData.json')
        .then(res => {
            setProducts(res.data);
        })

        .catch(err => setError(err)) 

        .finally(() => setLoading(false))
    },[]);

    return {allAppsData, loading, error};
}

export default useApps;