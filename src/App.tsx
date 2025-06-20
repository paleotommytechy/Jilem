import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sermons from './pages/Sermons';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>

  );
}

export default App;
