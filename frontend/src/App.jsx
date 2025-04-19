import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Assessment from './pages/Assessment';
import About from './pages/About';
import IndustryRoleSelection from './pages/IndustryRoleSelection';  // Import your new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/industry-role" element={<IndustryRoleSelection />} />  {/* New route */}
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
