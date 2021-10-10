
import './css/style.css';
import { Navbar } from './components/Navbar';
import { Jumbotron } from './components/Jumbotron';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Project } from './components/Project';

const superjob = {
  title: "Superjob Tracker",
  description: "Job Application Tracker with a Kanban Board for helping during the job hunt. This is a collaboration project between Nicolás Ríos and myself.",
  stack: {
      one: "🧬 React",
      two: "📦️ Webpack",
      three: "🖌️ Sass",
  },
  links: {
      source: "https://github.com/julendiaz/superjob",
      preview: "https://julendiaz.github.io/superjob/",
  },
  image: "./assets/superjob-thumbnail.png",
  alt: "Project Thumbnail for Superjob",
}

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
