import './App.css';
import BarChart from './components/BarChart';
import Table from './components/Table';
import { useFetchData } from './hooks';



function App() {
  const {data, setDate} = useFetchData();


  return (
    <div className="App">
      <Table data={data} setData={setDate} />
      <BarChart data={data}/>
    </div>
  );
}

export default App;
