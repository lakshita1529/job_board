import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';  // Import HomePage
import AddJobPage from './pages/AddJobPage';  // Import AddJobPage
import JobDetailsPage from './pages/JobDetailsPage';  // Import JobDetailsPage

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
   
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
