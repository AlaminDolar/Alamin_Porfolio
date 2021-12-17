
import './App.css';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import ProdactDetails from'./pages/ProductDetails/ProductDetails';
import Blogs from './pages/Blogs/Blogs';
import ParticlesBackground from './ParticleBackground';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import About from './pages/About/About';


function App() {
  return (
    <div className="App">
      <ParticlesBackground></ParticlesBackground>
      <BrowserRouter>
      
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/projects">
        <Projects></Projects>
        </Route>

        <Route path="/contact">
        <Contact></Contact>
        </Route>
        <Route path="/ProductDetails/:serviceId">
       <ProdactDetails></ProdactDetails>
        </Route>
        <Route path="/aboutMe">
     <About></About>
        </Route>
        <Route path="/blogs">
        <Blogs></Blogs>
        </Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
