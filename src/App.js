
import './css/style.css';
import { Navbar } from './components/Navbar';
import { Jumbotron } from './components/Jumbotron';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Project } from './components/Project';
import { superjob } from './components/project-data';

function App() {
  return (
    <div className="App"> 
      <Navbar /> 
      <Jumbotron />
      <Stats /> 
      <About />
      <Project stack={superjob.stack} title={superjob.title} description={superjob.description} links={superjob.links} image={superjob.image} alt={superjob.alt} />
    </div>
  );
}

export default App;
