Job Board App

A Job Board Application built with React and Tailwind CSS that displays job listings and allows users to view job details.

Features
Job Listing: Display a list of jobs.

Job Details: View job details on a separate page.

Responsive: Optimized for mobile, tablet, and desktop.

Backend Integration: Fetches job data from a Node.js API with MongoDB.

Tech Stack
Frontend: React, Tailwind CSS

Backend: Node.js, Express, MongoDB

Setup
Clone the repository:

bash
Copy
git clone https://github.com/your-username/job-board.git
cd job-board
Install dependencies:

bash
Copy
npm install

cd ../server
npm install
Set up the .env file in the server folder:

env

Copy

MONGO_URI=your-mongo-db-uri
PORT=3000
Start the servers:

Backend: nodemon server.js in the server folder

Frontend: npm run dev in the client folder
