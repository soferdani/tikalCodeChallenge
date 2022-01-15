import { useEffect, useState } from "react";
import axios from "axios";


export const useFetchPlanets = () => { 

    const [dataForQ2, setDataForQ2] = useState([]);
    const planetsNamesToCompere = ["Tatooine", "Alderaan", "Naboo", "Bespin", "Endor"];

    useEffect(() => {
		fetchPlanets();
	}, []);

    async function fetchPlanets() { 
        const response = await axios.get("https://swapi.py4e.com/api/planets/");
        setDataForQ2(response.data.results);
        const cleanData = response.data.results
            .filter((item) => {return planetsNamesToCompere.includes(item.name);})
            .map((item) => {
                
                return {
                    name: item.name, population: item.population
                }
            })
        
        setDataForQ2(cleanData);
    }    
    return {dataForQ2};

}
