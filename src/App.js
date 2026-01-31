import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/telier-secret-cms" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
