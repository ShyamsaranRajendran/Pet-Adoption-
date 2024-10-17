import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import PetListingsPage from './pages/PetListings/PetListingsPage';
import Header from  './pages/Utils/Header.jsx';
import Footer from './pages/Utils/Footer.jsx';
// Import other pages
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pets" element={<PetListingsPage />} />
        {/* <Route path="/pet/:id" element={<PetDetailsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/application/:id" element={<ApplicationPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/create-pet" element={<CreateEditPetPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
