
import './css/style.css';
import { Navbar } from './components/Navbar';
import { Jumbotron } from './components/Jumbotron';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Project } from './components/Project';
import { superjob } from './components/project-data';
import { blueCard, redCard, goldCard, greenCard } from './components/project-styles';

function App() {
  return (
    <div className="App"> 
      <Navbar /> 
      <Jumbotron />
      <Stats /> 
      <About />
      <Project stack={superjob.stack} title={superjob.title} description={superjob.description} links={superjob.links} image={superjob.image} alt={superjob.alt} style={redCard} />
      <Project stack={superjob.stack} title={superjob.title} description={superjob.description} links={superjob.links} image={superjob.image} alt={superjob.alt} style={blueCard} />
      <Project stack={superjob.stack} title={superjob.title} description={superjob.description} links={superjob.links} image={superjob.image} alt={superjob.alt} style={goldCard} />
      <Project stack={superjob.stack} title={superjob.title} description={superjob.description} links={superjob.links} image={superjob.image} alt={superjob.alt} style={greenCard} />
    </div>
  );
}

export default App;
