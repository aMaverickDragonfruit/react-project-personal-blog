import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // cannot async at this point
    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error ("Couldn't fetch the data from the resource.");
                }
                return res.json();
            })
            .then((data) => {
                setIsPending(false);
                setData(data);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            })
    }, [url]);
    
    return {data, isPending, error};
}

export default useFetch;