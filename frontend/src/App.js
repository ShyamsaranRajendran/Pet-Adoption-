import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import PetListingsPage from './pages/PetListings/PetListingsPage';
import PetDetailsPage from './pages/PetDetails/PetDetailsPage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import Header from './pages/Utils/Header.jsx';
import Footer from './pages/Utils/Footer.jsx';
import ApplicationPage from './pages/Application/ApplicationPage.js';
import CreatePetPage from './pages/CreatePetPage/CreateEditPetPage.js';
import EditPetPage from './pages/EditPetPage/EditPetPage.jsx';
import DashboardPage from './pages/Dashboard/DashboardPage.js';
import AboutPage from './pages/About/AboutPage.js';
import FavoritesPage from './pages/Favorites/FavoritesPage.js';
import ProfilePage from './pages/Profile/ProfilePage.js';
import UserReviewsPage from './pages/UserReviews/UserReviewsPage.jsx';
import AdoptionProcessPage from './pages/AdoptionProcess/AdoptionProcessPage.jsx';
import AdminManagementPage from './pages/AdminManagement/AdminManagementPage.jsx';
import ContactUsPage from './pages/ContactUs/ContactUsPage.jsx';
import { UserProvider } from './context/UserContext.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

 
function App() {

  return (
    <UserProvider>
      <div className='App'>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pets" element={<PetListingsPage />} />
            <Route path="/pets/:id" element={<PetDetailsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/application/:id" element={<ApplicationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
             <Route path="/reviews" element={<UserReviewsPage />} />
            <Route path="/adoption" element={<AdoptionProcessPage />} />
            <Route path="/contact" element={<ContactUsPage />} />

            <Route path="/dashboard" element={<PrivateRoute element={<DashboardPage />} />} />
            <Route path="/create-pet" element={<PrivateRoute element={<CreatePetPage />} />} />
            <Route path="/create-pet/:id" element={<PrivateRoute element={<EditPetPage />} />} />
            <Route path="/admin" element={<PrivateRoute element={<AdminManagementPage />}  />} />
 

            {/* <Route path="/dashboard" element={<PrivateRoute element={<DashboardPage />} allowedRoles={['admin', 'superadmin']} />} />
            <Route path="/create-pet" element={<PrivateRoute element={<CreatePetPage />} allowedRoles={['admin', 'superadmin']} />} />
            <Route path="/create-pet/:id" element={<PrivateRoute element={<EditPetPage />} allowedRoles={['admin', 'superadmin']} />} />
            <Route path="/admin" element={<PrivateRoute element={<AdminManagementPage />} allowedRoles={['superadmin']} />} /> */}

            {/* Favorites and About Page - accessible by all users */}
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
