import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';  // Import your HomePage component
import AddJobPage from './pages/AddJobPage';  // Import AddJobPage component
import JobDetailsPage from './pages/JobDetailsPage';  // Import JobDetailsPage component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar is rendered once at the top */}
      
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-job" element={<AddJobPage />} />
            <Route path="/job/:id" element={<JobDetailsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
