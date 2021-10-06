
import './css/style.css';
import { Navbar } from './components/Navbar';
import { Jumbotron } from './components/Jumbotron';
import { Stats } from './components/Stats';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Jumbotron />
      <Stats />
    </div>
  );
}

export default App;
