import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Building2, Calendar } from 'lucide-react';
import axios from 'axios';
import { format } from 'date-fns';

function JobDetailsPage() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchJob();
  }, [id]);
  

  const fetchJob = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/jobs/${id}`);
      if (response.data) {
        setJob(response.data);
      } else {
        console.error('Job not found in the response');
        alert('Job not found');
      }
    } catch (error) {
      console.error('Error fetching job:', error);
      alert('An error occurred while fetching the job');
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

  if (!job) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900">Job not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{job.title}</h1>
        <div className="flex flex-wrap gap-4 text-gray-600">
          <div className="flex items-center">
            <Building2 className="h-5 w-5 mr-2" />
            <span>{job.company}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            <span>{format(new Date(job.createdAt), 'MMMM d, yyyy')}</span>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <span className={`px-4 py-2 rounded-full text-sm font-medium ${
          job.type === 'full-time' 
            ? 'bg-green-100 text-green-800'
            : 'bg-blue-100 text-blue-800'
        }`}>
          {job.type}
        </span>
      </div>
      <div className="prose max-w-none">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
        <p className="text-gray-600 whitespace-pre-line">{job.description}</p>
      </div>
    </div>
  );
}

export default JobDetailsPage;