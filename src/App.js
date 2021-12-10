import logo from './logo.svg';
import './App.css';

import Banner from './components/Banner/Banner';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';





function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Banner></Banner>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    
    </div>
  );
}

export default App;
