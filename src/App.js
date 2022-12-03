import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import Home from './pages/Home';
import Hero from "./components/Hero";

function App() {
  return (
   <div className='App'>
      <Header />
      <Hero />
    <Home />
   </div>
  );
}

export default App;
