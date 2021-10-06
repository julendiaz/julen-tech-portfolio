
import './css/style.css';
import { Navbar } from './components/Navbar';
import { Jumbotron } from './components/Jumbotron';
import { Stats } from './components/Stats';
import { About } from './components/About';

function App() {
  return (
    <div className="App"> 
      <Navbar /> 
      <Jumbotron />
      <Stats /> 
      <About />
    </div>
  );
}

export default App;
