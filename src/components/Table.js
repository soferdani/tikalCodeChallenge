export default function Table({ data: vehicles }) {
	let vehicleName = "Snowspeeder";
	let planetsWithPopulation = [
		{ name: "Tatooine", population: "200000" },
		{ name: "Corellia", population: "3000000000" },
	];

	let pilotNames = ["Luke Skywalker", "Wedge Antilles"];

	let temp = [];
	const biggestVehicle = vehicles.reduce((acc, vehicle) => {
		const pilotsPopulation = vehicle.pilots
			.map((pilot) => pilot.homeWorldInfo.population)
			.reduce((acc, population) => {
				debugger;
				return acc + Number(population === "unknown" ? 0 : population);
			}, 0);
		vehicle.pilotsPopulation = pilotsPopulation;
		if (pilotsPopulation > (acc.pilotsPopulation ?? 0)) {
			return vehicle;
		}
		return acc;
	}, {});
	console.log(biggestVehicle);
	//     pilots:
	// 0:
	// homeWorldInfo: {name: 'Tatooine', population: '200000'}
	// pilotName: "Luke Skywalker"

	// data.console.log(data);
	// data.forEach((item) => {
	// 	item.pilots.forEach((pilot) => {
	// 		console.log(pilot.homeWorldInfo.population);
	// 	});
	// });

	return (
		<>
			<table>
				<tbody>
					<tr>
						<td>
							Vehicle name with the largest sum is: {<h4>{vehicleName}</h4>}{" "}
						</td>
					</tr>
					<tr>
						<td>
							Related home planets and their respective:{" "}
							{planetsWithPopulation.map((item) => {
								return (
									<h4>
										{item.name} with population {item.population}
									</h4>
								);
							})}{" "}
						</td>
					</tr>
					<tr>
						<td>
							Related pilot names:
							{pilotNames.map((pilot) => {
								return <h4>{pilot}</h4>;
							})}
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}
