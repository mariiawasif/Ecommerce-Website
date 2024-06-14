import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Nav'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Featured from './Components/Featured/Featured'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Navbar/>
      <Hero/>
      <Featured/>
    </BrowserRouter>
  );
}

export default App;
