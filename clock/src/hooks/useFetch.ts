import { useEffect, useState } from "react";

export function useFetch(url: string, dependency: any = undefined) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);
        setError('');
        setData(null);

        fetch(url)
            .then(res => {
                if (!res.ok) {
                   throw Error('An error has occurred.') 
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
                setError('');
            })
            .catch(err => {
                setLoading(false);
                setError(err.message);
            })
    }, [url, dependency])

    return { data, loading, error }
}