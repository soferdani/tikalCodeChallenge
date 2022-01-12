import './App.css';
import Table from './components/Table';
import { useFetchData } from './hooks';



function App() {
  const {data, setDate} = useFetchData();


  return (
    <div className="App">
      this is a test
      <Table data={data} setData={setDate} />
    </div>
  );
}

export default App;
