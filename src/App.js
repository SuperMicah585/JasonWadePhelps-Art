import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Portfolio from './components/pages/portfolio';
import Bio from './components/pages/Bio';
function App() {


  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/bio" element={<Bio />} />
      </Routes>
    </Router>
  );
}

export default App;


