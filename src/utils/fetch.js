import { useEffect, useState } from "react";

/* eslint-disable no-unused-vars */
const API = import.meta.env.VITE_API;
const Fetch = (route,option) => {
    const [response,setResponse] = useState(null)
    const [loading,setLoading] = useState(true);

    const fetchData = async () => {
        const response = await fetch(`${API}/${route}`,option)
        const data = response.json();
        setResponse(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    },[route])

    return {response,loading}
}
export default Fetch;
