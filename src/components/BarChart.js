export default function BarChart({ planets }) {
    
    let sum = 0
    planets.forEach(planet => { 
        sum += parseInt(planet.population)
    })
    console.log(sum);
    let updatedPlanets = planets.map(planet => { 
        console.log();
        return {
            name: planet.name,
            population : planet.population,
            percent: ((parseInt(planet.population) / sum) * 100).toFixed(2)
        }
    })


    const returnCssProp = (percent) => { 
        return {
            margin: '0 1em',
            display: 'block',
            background: 'rgba(#d1ecfa, .75)',
            height: `${percent}%`,
            backgroundColor: '#d1ecfa',
        }
    }


	return (
        <ul className="chart-wrap">
            {updatedPlanets.map((planet, index) => {
                return (
                    <li key={index}>
                        <span key={index} style={returnCssProp(planet.percent)}>{planet.population}</span>
                        <br/>
                        <span>{planet.name}</span>
                    </li>
                )
            })}
        </ul>
	);
}
