import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Leaderboard from './pages/leaderboard';
import DashboardContent from './pages/DashboardContent';
import Home from './components/Client/Home'; 
import Shop from './components/Client/Shop';
import About from './components/Client/About';
import Contact from './components/Client/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="" element={<DashboardContent />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            {/* <Route path="reports" element={<Reports />} /> */}
          </Route>
          <Route path="home" element={<Home />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
