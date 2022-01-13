import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchData = () => {
	// const [isLoading, setIsLoading] = useState(false);
	const [data, setDate] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);

	useEffect(() => {
		fetchVehicles();
	}, [pageNumber]);

	async function fetchVehicles() {
		const response = await axios.get(
			`https://swapi.py4e.com/api/vehicles/?page=${pageNumber}&format=json`
		);
		if (pageNumber === 1) {
			setDate(response.data.results);
		} else {
			setDate([...data, ...response.data.results]);
		}
		if (response.data.next) {
			setPageNumber(pageNumber + 1);
		} else {
			await clearData();
		}
	}

	async function clearData() {
		const fetchHomeWorldInfoFromUrl = async (url) => {
			const response = await axios.get(url);
			let toReturn = [response.data.name, response.data.population];
			return toReturn;
		};

		const fetchPilotInfoFromUrl = async (pilotsUrl) => {
			let allPilotsData = [];
			for (let pilotUrl of pilotsUrl) {
				const response = await axios.get(pilotUrl);
				let allPilotsFromOneVehicle = {
					pilotName: response.data.name,
					homeWorldInfo: await fetchHomeWorldInfoFromUrl(
						response.data.homeworld
					),
				};
				allPilotsData.push(allPilotsFromOneVehicle);
			}
			return allPilotsData;
		};

		const finalData = await Promise.all(
			data
				.filter((item) => {return item.pilots.length !== 0})
				.map((item) => new Promise(async (resolve) => { 
					const pilots = await fetchPilotInfoFromUrl(item.pilots);
					resolve({ vehicleName: item.name, pilots })
				})) 
		);
		setDate(finalData);
	}
	return { data, setDate };
};

