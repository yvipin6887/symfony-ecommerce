import {useEffect, useState} from "react";

const useProduct = (limit) => {
    const [loading, setLoading] = useState(true);
    const [data, setData]   = useState(null);

    const fetchApi = () => {
        fetch(`https://fakestoreapi.com/products?limit=${limit}`)
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

export default useProduct;