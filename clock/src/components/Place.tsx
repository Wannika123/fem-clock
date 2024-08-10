import React from "react";
import { useFetch } from "../hooks/useFetch";

const GEO_URL = `https://api.ipbase.com/v2/info?apikey=${import.meta.env.VITE_GEO_API_KEY}`

function Place() {
    const { data, loading }: any = useFetch(GEO_URL);
    
    return (
        <div className='place'>
            in{' '}
            {loading && <span className="loading">Loading</span>}
            {data !== null && `${data.data.location.city.name}, ${data.data.location.country.alpha2}`}
        </div>
    )
}

export default React.memo(Place)