import { useEffect, useState } from "react";

export function useLocalStorage(key, initialData) {
    const [data, setdata] = useState(initialData);


    useEffect(() => {
        const existingData = JSON.parse(localStorage.getItem(key))
        if (existingData) {
            setdata(existingData)
        } else {
            localStorage.setItem(key, JSON.stringify(initialData));
        }
    }, [])


    const updateLocalStorage = (newData) => {
        if (typeof newData === 'function') {
            localStorage.setItem(key, JSON.stringify(newData(data)));
        } else {

            localStorage.setItem(key, JSON.stringify(newData));
        }
        setdata(newData);
    }
    return [data, updateLocalStorage];
}