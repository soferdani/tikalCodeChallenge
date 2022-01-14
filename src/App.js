import './App.css';
import BarChart from './components/BarChart';
import Table from './components/Table';
import { useFetchData, useFetchPlanets } from './hooks';



function App() {
  const { dataForQ1} = useFetchData();
  const { dataForQ2 } = useFetchPlanets();
  
  return (
    <div className="App">
      <Table vehicles={dataForQ1} />
      <BarChart planets={dataForQ2}/>
    </div>
  );
}

export default App;
