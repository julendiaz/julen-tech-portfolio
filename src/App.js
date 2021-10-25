
import './css/style.css';
import { Navbar } from './components/Navbar';
import { Jumbotron } from './components/Jumbotron';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Project } from './components/Project';
import { superjob } from './components/project-data';
import { blueCard, redCard, goldCard, greenCard } from './components/project-styles';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

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
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
