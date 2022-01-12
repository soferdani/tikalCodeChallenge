import './App.css';
import { useFetchData } from './hooks';

function App() {
  const {fetchUsers,isLoading,data, setDate} = useFetchData();
  

  console.log(data);
  return (
    <div className="App">
      this is a test
    </div>
  );
}

export default App;
