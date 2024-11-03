import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    useEffect(() => {
        console.log('Fetching data.....');
        setTimeout(() => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        setError(response.statusText)
                        throw Error(response.statusText)
                    }
                    return response.json()
                })
                .then(data => {
                    setError(null)
                    setData(data)
                })
                .catch(error => {
                    setData(null)
                    setError(error.message)
                })
        }, 1000)

    }, [])

    return { data, setData, error }
}
export default useFetch;