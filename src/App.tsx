import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sermons from './pages/Sermons';
import HomePage from './pages/HomePage';
import Contact from './pages/ContactPage';
import About from './pages/AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>

  );
}

export default App;
