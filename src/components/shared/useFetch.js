import { useState, useEffect } from 'react';
import { BASE_URL } from '../../config/apiConfig';

export const useFetch = (endpoint) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(BASE_URL + endpoint);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setData(["Error fetching data"]);
                console.error('Error fetching data:');
            } 
        };

        fetchData();
    }, [endpoint]);

    return data;
};
