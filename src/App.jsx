import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import Companies from './Companies/Companies';
import Resdencies from './components/Resdencies/Resdencies';
import Value from './components/Value/Value'
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/getStarted';
import './App.css'
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <Companies/>
      <Resdencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>

  );
}

export default App;
