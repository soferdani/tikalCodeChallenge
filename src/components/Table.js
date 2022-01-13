export default function Table({ data }) {
    let vehicleName = "Snowspeeder";
    let planetsWithPopulation = [
        { name: 'Tatooine', population: '200000' },
        {name: 'Corellia', population: '3000000000'}
    ]
    
    let pilotNames = ["Luke Skywalker", "Wedge Antilles"]

	return (
		<>
            <table>
                <tbody>
                    <tr>
                        <td>Vehicle name with the largest sum is: {<h4>{vehicleName}</h4>} </td>
                    </tr>
                    <tr>
                        <td>Related home planets and their respective: {planetsWithPopulation.map(item => {
                            return <h4>{item.name} with population {item.population}</h4>
                        })} </td>
                    </tr>
                    <tr>
                        <td>Related pilot names:{pilotNames.map(pilot => {
                            return <h4>{pilot}</h4>
                        })}</td>
                    </tr>
                </tbody>
			</table>
		</>
	);
}
