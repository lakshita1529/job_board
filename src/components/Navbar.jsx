import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';
import { useState } from 'react';

function Navbar({ onFilterChange, onLocationFilterChange }) {
  const [filter, setFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value); // Update local type filter state
    onFilterChange(e.target.value); // Pass filter to the parent component (HomePage)
  };

  const handleLocationFilterChange = (e) => {
    setLocationFilter(e.target.value); // Update local location filter state
    onLocationFilterChange(e.target.value); // Pass location filter to the parent component (HomePage)
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Briefcase className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">JobBoard</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md"
            >
              Jobs
            </Link>
            <Link
              to="/add-job"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Post a Job
            </Link>
            {/* Job Type Filter Dropdown */}
            <select
              value={filter}
              onChange={handleFilterChange}
              className="bg-gray-50 text-gray-600 border border-gray-300 rounded-md p-2"
            >
              <option value="">Filter by Type</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
            </select>

            {/* Location Filter Dropdown */}
            <select
              value={locationFilter}
              onChange={handleLocationFilterChange}
              className="bg-gray-50 text-gray-600 border border-gray-300 rounded-md p-2"
            >
              <option value="">Filter by Location</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Noida">Noida</option>
              <option value="Bangalore">Bangalore</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
