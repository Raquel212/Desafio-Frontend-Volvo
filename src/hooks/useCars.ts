import axios from "axios";
import { useEffect, useState } from "react";



export function useCars() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:3000/api/cars").then((response) => {
            setCars(response.data);
        })
    }, []);

    return { cars };

};