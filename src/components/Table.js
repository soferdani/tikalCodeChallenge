export default function Table({ data, setData }) {
	let planetsArrayForQ2 = [];
	let currantTopVehicle = 0;

	console.log(data);

	data.forEach((vehicle, index) => {
		console.log(vehicle);
		vehicle.pilots.forEach((pilot) => {
			console.log(pilot.homeWorldInfo);
			planetsArrayForQ2.push(pilot.homeWorldInfo);
		});
	});

	return (
		<>
			<table>
				<tr>
					<td>Vehicle name with the largest sum is: {} </td>
				</tr>
				<tr>
					<td>Related home planets and their respective: </td>
				</tr>
				<tr>
					<td>Related pilot names:</td>
				</tr>
			</table>
		</>
	);
}
