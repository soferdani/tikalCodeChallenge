export default function BarChart({ planets }) {
	let sum = 0;
	planets.forEach((planet) => {
		sum += parseInt(planet.population);
	});
	let updatedPlanets = planets.map((planet) => {
		return {
			name: planet.name,
			population: planet.population,
			percent: ((parseInt(planet.population) / sum) * 100).toFixed(2),
		};
	});

    const returnCssProp = (percent) => {
        let newPercent = parseInt(percent) + 10
		return {
			height: `${newPercent}%`,
		};
	};

	return (
        <div className='bar-chart'>
            {updatedPlanets.map((planet, index) => { 
                return (
                    <div key={index} className="box" style={returnCssProp(planet.percent)} >
                        <div className="population">{planet.population.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                        <div className="name">{planet.name}</div>
                    </div>        
                )
            })}
		</div>
	);
}
