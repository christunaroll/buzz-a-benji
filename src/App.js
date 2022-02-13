import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About_Benji from './pages/About_Benji';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
        {/* Navbar Routes*/}
        <Navbar /> 
          <Routes>
            <Route path = "/" element={<Home/>}/>
            <Route path = "/About_Benji" element={<About_Benji/>}/>
          </Routes>
        {/* End Navbar Routes*/}
        <Footer />
        </Router>
    </div>
  );
}

export default App;
