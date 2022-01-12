import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchData = () => {

	const [isLoading, setIsLoading] = useState(false);
	const [data, setDate] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);

	useEffect(() => {
		fetchUsers();
	}, [pageNumber]);

	async function fetchUsers() {
		setIsLoading(true);
		const response = await axios.get(`https://swapi.py4e.com/api/vehicles/?page=${pageNumber}&format=json`);
		if (response.data.next) { 
			if (pageNumber === 1) { 
				setDate(response.data.results);
			} else {
				setDate([...data, ...response.data.results])
			}
			setPageNumber(pageNumber + 1);
		}
		setIsLoading(false);
	}


	return {fetchUsers,isLoading,data, setDate};
};
