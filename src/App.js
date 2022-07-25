import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import StudyMaterial from './Pages/StudyMaterial';
import BuyCourses from './Pages/BuyCourses';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studymaterial"  element={<StudyMaterial/>} />
        <Route path="/aboutus"  element={<AboutUs/>} />
        <Route path="/signup"  element={<Signup />} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/contactus"  element={<ContactUs/>} />
        <Route path="/buycourses"  element={<BuyCourses/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
