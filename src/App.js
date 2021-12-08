import logo from './logo.svg';
import './App.css';

import Banner from './components/Banner/Banner';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';





function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Banner></Banner>
      <About></About>
    
    </div>
  );
}

export default App;
