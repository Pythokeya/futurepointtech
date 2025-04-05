import React from 'react';

const DataAnalyticsCourse: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Data Analytics Course</h1>
        <a
          href="/courses/DataAnalytics.pdf"
          download
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-md"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download Course Content
        </a>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Course Overview</h2>
        <p className="text-gray-700">
          Master data analysis and visualization techniques with our comprehensive Data Analytics course. Learn about data cleaning, preprocessing, exploratory analysis, and more.
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Introduction to Data Analytics</li>
          <li>Data Cleaning and Preprocessing</li>
          <li>Exploratory Data Analysis</li>
          <li>Statistical Analysis</li>
          <li>Data Visualization</li>
          <li>SQL for Data Analysis</li>
          <li>Python for Data Analysis</li>
          <li>Tableau and Power BI</li>
          <li>Machine Learning Basics</li>
          <li>Real-world Projects</li>
        </ul>
      </div>
    </div>
  );
};

export default DataAnalyticsCourse;
