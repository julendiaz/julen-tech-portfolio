
import './css/style.css';
import { Navbar } from './components/Navbar';
import { Jumbotron } from './components/Jumbotron';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Project } from './components/Project';

function App() {
  return (
    <div className="App"> 
      <Navbar /> 
      <Jumbotron />
      <Stats /> 
      <About />
      <Project title="Superjob Tracker" text="Job Application Tracker with a Kanban Board for helping during the job hunt. This is a collaboration project between Nicolás Ríos and myself."/>
    </div>
  );
}

export default App;
