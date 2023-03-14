import React, { useEffect, useState } from 'react'

const useFetch = ( url : string ) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(url).then((response : Response) => {
            setData(() => setData(response.json));
            setLoading(false);
        }).catch((error) => {
            console.error(error);
        })
    }, []);

    return [loading, data];

}

export default useFetch