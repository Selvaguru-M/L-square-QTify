import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero";

function App() {
  return (
   
      <div className="App">
        {/* Render Navbar at the top */}
        <Navbar />
        <Hero />
      </div>
  );
}

export default App;
