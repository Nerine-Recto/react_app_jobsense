import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Education from './pages/Education'; 
import Simulation from './pages/Simulation'; 
import Quiz from "./pages/Quiz"; 

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* Define the routes for each page */}
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/simulation" element={<Simulation />} />
          <Route path="/quiz" component={<Quiz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
