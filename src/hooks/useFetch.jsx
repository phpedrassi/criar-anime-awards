import { useState, useEffect } from "react";

export const useFetch = (url) => {

    const [itemsApi, setItemsApi] = useState(null)

    useEffect(() => {



        const fetchData = async () => {
            const res = await fetch(url)
            const json = await res.json()

            setItemsApi(json)
        }

        fetchData()
    }, [url])

    return { itemsApi }

}