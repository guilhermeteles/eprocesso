import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PDFReader from './pages/PDFReader';
import NotFound from './pages/NotFound.jsx'; // Create this component for handling 404s

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pdf-reader" element={<PDFReader />} />
        <Route path="*" element={<NotFound />} /> {/* Handle undefined routes */}
      </Routes>
    </Router>
  );
}

export default App;
