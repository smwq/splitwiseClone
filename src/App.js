import logo from './logo.svg';
import './App.css';
import CustomAppBar from './components/CustomAppBar/CustomAppBar'
import Activity from './components/Activity/Activity'

function App() {
  return (
    <div className="App">
      <CustomAppBar/>
      <Activity/>
    </div>
  );
}

export default App;
