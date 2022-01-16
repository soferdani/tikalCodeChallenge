export default function Table({ vehicles }) {
	const biggestVehicle = vehicles.reduce((acc, vehicle) => {
		const pilotsPopulation = vehicle.pilots
			.map((pilot) => pilot.homeWorldInfo.population)
			.reduce((acc, population) => {
				return acc + Number(population === "unknown" ? 0 : population);
			}, 0);
		vehicle.pilotsPopulation = pilotsPopulation;
		if (pilotsPopulation > (acc.pilotsPopulation ?? 0)) {
			return vehicle;
		}
		return acc;
	}, {});

	return (
		<div className='table-wrap'>
			<table>
				<tbody>
					<tr>
						<td>
							Vehicle name with the largest sum is:{" "}
							{<h4>{biggestVehicle.vehicleName}</h4>}{" "}
						</td>
					</tr>
					<tr>
						<td>
							Related home planets and their respective:
							{biggestVehicle?.pilots?.map((pilot, index) => {
								let population = pilot.homeWorldInfo?.population;
								let worldName = pilot.homeWorldInfo?.name;
								return (
									<h4 key={index}>
										{worldName} {population}
									</h4>
								);
							})}
						</td>
					</tr>
					<tr>
						<td>
							Related pilot names:
							{biggestVehicle?.pilots?.map((pilot, index) => {
								return <h4 key={index}>{pilot.pilotName}</h4>;
							})}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
