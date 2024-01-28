import {useEffect, useState} from "react";

const useCart = (limit = 5) => {
    const [loading, setLoading] = useState(true);
    const [data, setData]   = useState(null);

    const fetchApi = () => {
        fetch(`https://fakestoreapi.com/carts?limit=5`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            setLoading(false);
            setData(json);
        })
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return {loading, data};
}

export default useCart;