import React, { useState } from 'react';
import { Download, ChevronRight } from 'lucide-react';

// TypeScript interfaces
interface CourseData {
  title: string;
  image: string;
  overview: string;
  curriculum: string[];
  duration: string;
  mode: string;
  prerequisite: string;
}

interface CourseViewerProps {
  courseData?: CourseData;
}

const CourseViewer: React.FC<CourseViewerProps> = ({ courseData }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum'>('overview');
  
  // Default course data if none is provided
  const defaultCourse: CourseData = {
    title: "Advanced React Development",
    image: "/api/placeholder/600/400",
    overview: "This comprehensive course covers modern React development practices, including hooks, context API, and React Router. Learn to build scalable and maintainable applications with the latest React features.",
    curriculum: [
      "Introduction to React Ecosystem",
      "Component Architecture & Props",
      "State Management & Hooks",
      "Context API & Redux",
      "React Router & Navigation",
      "Performance Optimization",
      "Testing React Applications",
      "Deployment & CI/CD Integration"
    ],
    duration: "40 Hours",
    mode: "Classroom / Online",
    prerequisite: "Basic JavaScript knowledge and understanding of HTML/CSS"
  };
  
  const course = courseData || defaultCourse;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{course.title}</h1>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="bg-white/20 px-3 py-1 rounded-full">Duration: {course.duration}</div>
          <div className="bg-white/20 px-3 py-1 rounded-full">Mode: {course.mode}</div>
        </div>
      </div>
      
      {/* Course Image */}
      <div className="p-6 bg-gray-50">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-3 font-medium text-sm md:text-base ${
              activeTab === 'overview' 
                ? 'border-b-2 border-blue-600 text-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('curriculum')}
            className={`px-4 py-3 font-medium text-sm md:text-base ${
              activeTab === 'curriculum' 
                ? 'border-b-2 border-blue-600 text-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Curriculum
          </button>
        </nav>
      </div>
      
      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <div className="space-y-4">
            <p className="text-gray-700">{course.overview}</p>
            
            <div className="mt-4">
              <h3 className="font-semibold text-gray-900">Prerequisites:</h3>
              <p className="text-gray-700">{course.prerequisite}</p>
            </div>
            
            <div className="mt-6">
              <a 
                href={`/courses/${course.title.toLowerCase().replace(/\s+/g, '-')}.pdf`} 
                download 
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-fit"
              >
                <Download size={18} />
                Download Course Content
              </a>
            </div>
          </div>
        )}
        
        {activeTab === 'curriculum' && (
          <div className="space-y-2">
            <ul className="space-y-2">
              {course.curriculum.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <ChevronRight className="text-blue-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      {/* More Courses Section */}
      <div className="border-t border-gray-200 p-6 bg-gray-50">
        <h3 className="text-lg font-medium text-gray-900 mb-4">View More Courses</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            "Microsoft Technologies",
            "Data Warehousing",
            "Oracle Technologies",
            "IBM Technologies",
            "Testing Tools",
            "Others"
          ].map((category, index) => (
            <a
              key={index}
              href={`./courses/${category.toLowerCase().replace(/\s+/g, '-')}`} // Changed from absolute to relative path
              className="bg-white p-3 rounded border border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-200 transition text-center text-sm md:text-base"
            >
              {category}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseViewer;