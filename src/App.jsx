import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import BallSwiper from './components/BallSwiper';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Beads from './components/Beads';

function App() {
  const [goalMala, setGoalMala] = useState(null);
  const [selectedBallType, setSelectedBallType] = useState(null);

  // Load data from localStorage
  useEffect(() => {
    const savedMala = localStorage.getItem('goalMala');
    const savedType = localStorage.getItem('ballType');

    if (savedMala && savedType) {
      setGoalMala(savedMala);
      setSelectedBallType(savedType);
    }
  }, []);

  const handleSubmit = ({ malaCount, ballType }) => {
    setGoalMala(malaCount);
    setSelectedBallType(ballType);
    localStorage.setItem('goalMala', malaCount);
    localStorage.setItem('ballType', ballType);
  };

  const handleReset = () => {
    setGoalMala(null);
    setSelectedBallType(null);
    localStorage.removeItem('goalMala');
    localStorage.removeItem('ballType');
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home onSubmit={handleSubmit} />} />
        <Route
          path="/japa"
          element={
            <BallSwiper
              Mala={goalMala}
              ballType={selectedBallType}
            />
          }
        />
        <Route path="/About" element={<About/>} />
        <Route path="/Beads" element={<Beads/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
