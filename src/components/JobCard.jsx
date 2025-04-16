import { Link } from 'react-router-dom';
import { MapPin, Clock, Building2 } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

function JobCard({ job }) {
  return (
    <Link
      to={`/job/${job._id || job.id}`} // Check for MongoDB's _id field
      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
          <div className="flex items-center mt-2 text-gray-600">
            <Building2 className="h-4 w-4 mr-1" />
            <span>{job.company}</span>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          job.type === 'full-time' 
            ? 'bg-green-100 text-green-800'
            : 'bg-blue-100 text-blue-800'
        }`}>
          {job.type}
        </span>
      </div>
      <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>{formatDistanceToNow(new Date(job.createdAt))} ago</span>
        </div>
      </div>
    </Link>
  );
}

export default JobCard;
