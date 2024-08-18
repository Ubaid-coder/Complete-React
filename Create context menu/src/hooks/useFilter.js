import { useState } from "react";

export function useFilter(dataList, calback) {
    const [query, setquery] = useState('');
    const filteredData = dataList.filter((data) => calback(data).toLowerCase().includes(query));

    return [filteredData, setquery];
}