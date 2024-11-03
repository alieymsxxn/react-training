import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        fetch(url, { signal: abortController.signal })
            .then(response => {
                if (!response.ok) {
                    setError(response.statusText);
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setError(null);
                setData(data);
            })
            .catch(error => {
                if (error.name === 'AbortError') {
                    return;
                }
                setData(null);
                setError(error.message);
            });

        return () => {
            abortController.abort();
        };
    }, [url]);

    return { data, setData, error };
};

export default useFetch;