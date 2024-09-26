import './App.css';
import { BrowserRouter as Router, Route, Routes, Link,Navigate } from 'react-router-dom';
import Portfolio from './components/pages/portfolio';
import Bio from './components/pages/Bio';
import Contact from './components/pages/contact'
function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/portfolio" />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;


