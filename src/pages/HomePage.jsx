import { useState, useEffect } from 'react';
import JobCard from '../components/JobCard';
import axios from 'axios';
import Navbar from '../components/Navbar';

function HomePage() {
  const [allJobs, setAllJobs] = useState([]);  // Store all jobs
  const [filteredJobs, setFilteredJobs] = useState([]); // Store filtered jobs
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(''); // Track filter type
  const [locationFilter, setLocationFilter] = useState(''); // Track location filter

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    // Apply filters based on the selected type and location
    let filtered = allJobs;
    
    if (filter) {
      filtered = filtered.filter((job) => job.type === filter);
    }

    if (locationFilter) {
      filtered = filtered.filter((job) => job.location === locationFilter);
    }

    setFilteredJobs(filtered); // Update the filtered jobs
  }, [filter, locationFilter, allJobs]);  // Trigger when filter, location, or jobs change

  const fetchJobs = async () => {
    try {
      const response = await axios.get('http://localhost:3000/jobs');
      console.log(response.data); // Log fetched jobs to check data
      setAllJobs(response.data); // Store the fetched jobs
      setFilteredJobs(response.data); // Initialize filtered jobs with all jobs
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-blue-500 p-8 rounded-lg mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Mini Job Board</h1>
          {/* Pass both setFilter and setLocationFilter functions to Navbar */}
          <Navbar onFilterChange={setFilter} onLocationFilterChange={setLocationFilter} />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Jobs</h2>
      
      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        ) : (
          <p className="text-gray-500">No jobs available for the selected filters.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
