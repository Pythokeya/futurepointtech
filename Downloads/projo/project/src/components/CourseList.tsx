import React, { useState } from 'react';

interface Course {
  name: string;
  courses: string[];
  image: string;
  shortDescription: string;
}

const mainCourses: Course[] = [
  {
    name: "Artificial Intelligence & Data Science",
    courses: [
      "Python for Data Science",
      "Machine Learning & Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Big Data Analytics with Python",
      "AI Model Development & Deployment"
    ],
    image: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
    shortDescription: "AI, ML, and Data Science technologies"
  },
  {
    name: "Cloud & DevOps",
    courses: [
      "AWS Cloud Architecture",
      "Docker & Kubernetes",
      "CI/CD Pipeline Implementation",
      "Infrastructure as Code (Terraform)",
      "Cloud Security & Compliance",
      "Microservices Architecture"
    ],
    image: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
    shortDescription: "Cloud computing and automation"
  },
  {
    name: "Microsoft Technologies",
    courses: [
      ".NET Core & C#",
      "ASP.NET MVC",
      "Azure Cloud Services",
      "Microsoft Power Platform",
      "SharePoint Development",
      "Windows App Development"
    ],
    image: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg",
    shortDescription: "Microsoft development ecosystem"
  },
  {
    name: "Full Stack Java",
    courses: [
      "Core Java & Advanced Java",
      "Spring Framework & Spring Boot",
      "Microservices Architecture",
      "Hibernate ORM",
      "RESTful Web Services",
      "Angular/React with Java Backend"
    ],
    image: "https://cdn.worldvectorlogo.com/logos/java.svg",
    shortDescription: "Enterprise Java development"
  },
  {
    name: "Mobile Development",
    courses: [
      "iOS App Development",
      "Android App Development",
      "Kotlin & Swift Programming",
      "Flutter Cross-platform Development",
      "Mobile UI/UX Design",
      "App Testing & Deployment"
    ],
    image: "https://www.svgrepo.com/show/303223/android-robot-logo.svg",
    shortDescription: "Mobile app development"
  }
];

const otherCourses: Course[] = [
  {
    name: "Business Analysis",
    courses: [
      "Requirements Engineering",
      "Business Process Modeling",
      "Agile BA Practices",
      "Stakeholder Management",
      "BA Tools & Techniques"
    ],
    image: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
    shortDescription: "Business process and analysis"
  },
  {
    name: "Database Administration",
    courses: [
      "Oracle Database Administration",
      "Performance Tuning",
      "Backup & Recovery",
      "High Availability Solutions",
      "Database Security"
    ],
    image: "https://cdn.worldvectorlogo.com/logos/oracle-6.svg",
    shortDescription: "Database administration"
  },
  {
    name: "Big Data",
    courses: [
      "Hadoop Ecosystem",
      "Apache Spark",
      "NoSQL Databases",
      "Data Warehousing",
      "ETL Processing"
    ],
    image: "https://cdn.worldvectorlogo.com/logos/hadoop.svg",
    shortDescription: "Big data processing"
  },
  {
    name: "SAP",
    courses: [
      "SAP FICO",
      "SAP MM",
      "SAP SD",
      "SAP ABAP",
      "SAP Basis"
    ],
    image: "https://cdn.worldvectorlogo.com/logos/sap-2.svg",
    shortDescription: "Enterprise resource planning"
  },
  {
    name: "Software Testing",
    courses: [
      "Manual Testing",
      "Automation Testing (Selenium)",
      "Performance Testing",
      "API Testing",
      "Mobile Testing"
    ],
    image: "https://static.vecteezy.com/system/resources/previews/025/365/917/non_2x/check-icon-inspection-illustration-symbol-testing-symbol-vector.jpg",
    shortDescription: "Quality assurance and testing"
  }
];

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onBookCourse: () => void;
}

function CourseModal({ course, onClose, onBookCourse }: CourseModalProps) {
  if (!course) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full">
        <div className="relative p-6 flex items-center justify-center bg-gray-50 rounded-t-lg">
          <img 
            src={course.image} 
            alt={course.name}
            className="h-24 object-contain"
          />
          <button 
            onClick={onClose}
            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4">{course.name}</h3>
          <h4 className="text-lg font-semibold mb-2">Available Courses:</h4>
          <ul className="list-disc pl-5 mb-6 space-y-1">
            {course.courses.map((item, index) => (
              <li key={index} className="text-gray-600">{item}</li>
            ))}
          </ul>
          <div className="flex justify-end">
            <button
              onClick={onBookCourse}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Book Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CourseList() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showOtherCourses, setShowOtherCourses] = useState(false);

  const handleBookCourse = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setSelectedCourse(null);
  };

  const displayedCourses = showOtherCourses ? otherCourses : mainCourses;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCourses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border hover:shadow-md transition cursor-pointer overflow-hidden"
            onClick={() => setSelectedCourse(course)}
          >
            <div className="h-48 bg-gray-50 flex items-center justify-center p-6">
              <img 
                src={course.image} 
                alt={course.name}
                className="h-[95%] object-contain"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{course.name}</h3>
              <p className="text-gray-600 text-sm">
                {course.shortDescription}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={() => setShowOtherCourses(!showOtherCourses)}
          className="bg-blue-600 text-white px-8 py-3 text-lg rounded-lg hover:bg-blue-700 transition"
        >
          {showOtherCourses ? "View Main Courses" : "View Other Courses"}
        </button>
      </div>

      <CourseModal 
        course={selectedCourse} 
        onClose={() => setSelectedCourse(null)}
        onBookCourse={handleBookCourse}
      />
    </>
  );
}

export default CourseList;