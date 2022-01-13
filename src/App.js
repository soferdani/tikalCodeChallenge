import './App.css';
import BarChart from './components/BarChart';
import Table from './components/Table';
import { useFetchData } from './hooks';



function App() {
  const {data, dataForQ1} = useFetchData();


  return (
    <div className="App">
      <Table data={dataForQ1} />
      <BarChart data={data}/>
    </div>
  );
}

export default App;
