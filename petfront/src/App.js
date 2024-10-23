import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AdoptionReuests from './pages/AdoptionReuests';
import DashboardContent from './pages/DashboardContent';
import PetProducts from './pages/PetProducts';
import PetProductsLimit from './pages/PetProductsLimit';
import PetFood from './pages/PetFood';
import Message from './pages/message';
import Home from './components/Client/Home'; 
import Shop from './components/Client/Shop';
import About from './components/Client/About';
import Contact from './components/Client/Contact';
import Pet from './pages/pet';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="" element={<DashboardContent />} />
              <Route path="pet" element={<Pet/>} />

            <Route path="products" element={< PetProducts />} />
            <Route path="food" element={<PetFood />} />
            <Route path="product-limits" element={<PetProductsLimit />} />
            <Route path='messages' element={<Message/>} />
            <Route path="requests" element={<AdoptionReuests />} />
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
