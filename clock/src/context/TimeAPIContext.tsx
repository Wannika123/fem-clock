import React, { createContext } from "react";
import { useFetch } from "../hooks/useFetch";

const WORLD_TIME_URL = "http://worldtimeapi.org/api/ip";

const TimeAPIContext = createContext({
    data: null,
    loading: true,
});

const TimeAPIProvider = ({ children }: {
    children: React.ReactNode;
}) => {
    const { data, loading } = useFetch(WORLD_TIME_URL);

    return (
        <TimeAPIContext.Provider value={{ data, loading}}>
            { children }
        </TimeAPIContext.Provider>
    )
}

export { TimeAPIContext, TimeAPIProvider };