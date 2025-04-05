import React, { useState } from 'react';
import TrendingCourses from './TrendingCourses';
import CourseDropdown from './CourseDropdown';
import CodingForJuniors from './CodingForJuniors';

const trendingCourses = [
  {
    id: 1,
    title: 'Data Analytics',
    icon: 'https://static.vecteezy.com/system/resources/previews/011/377/990/original/search-data-analytics-logo-design-growth-arrow-logo-design-for-data-finance-investment-icon-design-vector.jpg',
    description: 'Master data analysis and visualization techniques',
    content: [
      'Introduction to Data Analytics',
      'Data Cleaning and Preprocessing',
      'Exploratory Data Analysis',
      'Statistical Analysis',
      'Data Visualization',
      'SQL for Data Analysis',
      'Python for Data Analysis',
      'Tableau and Power BI',
      'Machine Learning Basics',
      'Real-world Projects'
    ]
  },
  {
    id: 2,
    title: 'Data Science',
    icon: 'https://insidebigdata.com/wp-content/uploads/2019/04/DataScience_shutterstock_1054542323.jpg',
    description: 'Comprehensive data science training program',
    content: [
      'Python Programming',
      'Statistics and Probability',
      'Machine Learning Algorithms',
      'Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Big Data Technologies',
      'Data Engineering',
      'Model Deployment',
      'Capstone Project'
    ]
  },
  {
    id: 3,
    title: 'Data Engineering',
    icon: 'https://img.freepik.com/premium-vector/data-engineering-line-concept-simple-line-icon-colored-illustration-data-engineering-symbol-flat-design-can-be-used-ui-ux_159242-4424.jpg?w=2000',
    description: 'Build robust data pipelines and infrastructure',
    content: [
      'Data Warehousing',
      'ETL Processes',
      'Big Data Technologies',
      'Data Pipeline Design',
      'Cloud Platforms',
      'Database Management',
      'Data Quality and Governance',
      'Real-time Data Processing',
      'Data Security',
      'System Architecture'
    ]
  },
  {
    id: 4,
    title: 'Python Programming',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    description: 'Learn Python from basics to advanced concepts',
    content: [
      'Python Basics',
      'Data Structures',
      'Object-Oriented Programming',
      'File Handling',
      'Error Handling',
      'Modules and Packages',
      'Web Development',
      'GUI Programming',
      'Testing and Debugging',
      'Project Development'
    ]
  },
  {
    id: 5,
    title: 'Java Full Stack',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    description: 'Full stack development with Java ecosystem',
    content: [
      'Core Java',
      'Spring Framework',
      'Spring Boot',
      'RESTful APIs',
      'Microservices',
      'Frontend Development',
      'Database Integration',
      'Security',
      'Testing',
      'Deployment'
    ]
  },
  {
    id: 6,
    title: 'DevOps',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    description: 'Master DevOps practices and tools',
    content: [
      'Linux Fundamentals',
      'Shell Scripting',
      'Git and Version Control',
      'CI/CD Pipelines',
      'Containerization',
      'Cloud Platforms',
      'Infrastructure as Code',
      'Monitoring and Logging',
      'Security',
      'Automation'
    ]
  },
  {
    id: 7,
    title: 'Power BI',
    icon: 'https://logos-world.net/wp-content/uploads/2022/02/Microsoft-Power-BI-Symbol.png',
    description: 'Business intelligence and data visualization',
    content: [
      'Power BI Basics',
      'Data Modeling',
      'DAX Language',
      'Visualization Techniques',
      'Reports and Dashboards',
      'Data Integration',
      'Advanced Analytics',
      'Sharing and Collaboration',
      'Performance Optimization',
      'Real-world Projects'
    ]
  },
  {
    id: 8,
    title: 'Cloud Computing',
    icon: 'https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Symbol.png',
    description: 'Master cloud platforms and services',
    content: [
      'Cloud Fundamentals',
      'AWS Services',
      'Azure Services',
      'GCP Services',
      'Cloud Architecture',
      'Serverless Computing',
      'Cloud Security',
      'DevOps in Cloud',
      'Cost Optimization',
      'Migration Strategies'
    ]
  }
];

const courseCategories = [
  {
    id: 1,
    title: 'Cloud & Infrastructure',
    courses: [
      {
        title: 'Amazon Web Services',
        description: 'Comprehensive AWS cloud training',
        content: ['AWS Fundamentals', 'EC2', 'S3', 'RDS', 'Lambda']
      },
      {
        title: 'OpenStack',
        description: 'Open source cloud computing platform',
        content: ['OpenStack Architecture', 'Deployment', 'Management', 'Networking', 'Storage']
      },
      {
        title: 'VMWare',
        description: 'Virtualization and cloud infrastructure',
        content: ['vSphere', 'vCenter', 'ESXi', 'Virtual Machines', 'Networking']
      },
      {
        title: 'Windows 2012 Server',
        description: 'Windows server administration',
        content: ['Installation', 'Configuration', 'Active Directory', 'Group Policy', 'Security']
      }
    ]
  },
  {
    id: 2,
    title: 'Database & Data Management',
    courses: [
      {
        title: 'Oracle DBA 11g',
        description: 'Oracle database administration',
        content: ['Installation', 'Configuration', 'Backup/Recovery', 'Performance Tuning', 'Security']
      },
      {
        title: 'SQL Server DBA',
        description: 'Microsoft SQL Server administration',
        content: ['Installation', 'Configuration', 'Maintenance', 'Performance Tuning', 'Security']
      },
      {
        title: 'DB2 DBA',
        description: 'IBM DB2 database administration',
        content: ['Installation', 'Configuration', 'Backup/Recovery', 'Performance Tuning', 'Security']
      },
      {
        title: 'MongoDB',
        description: 'NoSQL database management',
        content: ['Installation', 'Data Modeling', 'CRUD Operations', 'Indexing', 'Aggregation']
      }
    ]
  },
  {
    id: 3,
    title: 'Business Intelligence & Analytics',
    courses: [
      {
        title: 'MS Power BI',
        description: 'Microsoft Power BI for business analytics',
        content: ['Data Modeling', 'DAX', 'Visualizations', 'Reports', 'Dashboards']
      },
      {
        title: 'Tableau',
        description: 'Data visualization and business intelligence',
        content: ['Data Connection', 'Visual Analytics', 'Dashboards', 'Calculations', 'Sharing']
      },
      {
        title: 'QlikView',
        description: 'Business intelligence and analytics platform',
        content: ['Data Loading', 'Scripting', 'Visualizations', 'Dashboards', 'Security']
      },
      {
        title: 'MicroStrategy',
        description: 'Enterprise business intelligence',
        content: ['Architecture', 'Reports', 'Dashboards', 'Security', 'Administration']
      }
    ]
  },
  {
    id: 4,
    title: 'Development & Programming',
    courses: [
      {
        title: 'Java/J2EE',
        description: 'Enterprise Java development',
        content: ['Core Java', 'J2EE', 'Spring', 'Hibernate', 'Web Services']
      },
      {
        title: 'Microsoft .NET Technologies',
        description: 'Full-stack .NET development',
        content: ['C#', 'ASP.NET', 'WCF', 'WPF', 'MVC']
      },
      {
        title: 'Python Programming',
        description: 'Python development and scripting',
        content: ['Python Basics', 'OOP', 'Web Development', 'Data Science', 'Automation']
      },
      {
        title: 'PHP',
        description: 'Web development with PHP',
        content: ['PHP Basics', 'MySQL', 'Web Development', 'Frameworks', 'Security']
      }
    ]
  },
  {
    id: 5,
    title: 'DevOps & Automation',
    courses: [
      {
        title: 'DevOps',
        description: 'DevOps practices and tools',
        content: ['CI/CD', 'Docker', 'Kubernetes', 'Jenkins', 'Git']
      },
      {
        title: 'Shell Scripting',
        description: 'Automation with shell scripts',
        content: ['Bash', 'Shell Commands', 'Scripting', 'Automation', 'System Administration']
      },
      {
        title: 'Perl Scripting',
        description: 'Perl programming and automation',
        content: ['Perl Basics', 'Regular Expressions', 'File Handling', 'System Administration', 'Automation']
      },
      {
        title: 'Robotics Process Automation',
        description: 'RPA development and implementation',
        content: ['RPA Tools', 'Process Automation', 'Bot Development', 'Deployment', 'Monitoring']
      }
    ]
  },
  {
    id: 6,
    title: 'Security & Networking',
    courses: [
      {
        title: 'CCNA/CCNP Security',
        description: 'Cisco network security',
        content: ['Network Security', 'Firewalls', 'VPN', 'Intrusion Prevention', 'Access Control']
      },
      {
        title: 'CheckPoint',
        description: 'CheckPoint security solutions',
        content: ['Firewall', 'VPN', 'Security Management', 'Threat Prevention', 'Policy Management']
      },
      {
        title: 'IBM Tivoli Access Manager',
        description: 'Identity and access management',
        content: ['Installation', 'Configuration', 'Policy Management', 'Integration', 'Security']
      },
      {
        title: 'RSA Archer Security',
        description: 'Security operations management',
        content: ['Security Operations', 'Risk Management', 'Compliance', 'Incident Response', 'Reporting']
      }
    ]
  }
];

const CoursesPage: React.FC = () => {
  const [showOtherCourses, setShowOtherCourses] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <TrendingCourses courses={trendingCourses} />
      <CodingForJuniors />
      
      <div className="mt-8 text-center">
        <button
          className="bg-blue-600 text-white px-8 py-4 text-lg rounded-lg hover:bg-blue-700 transition-colors duration-300"
          onClick={() => setShowOtherCourses(!showOtherCourses)}
        >
          {showOtherCourses ? 'Hide Other Courses' : 'View Other Courses'}
        </button>
      </div>

      {showOtherCourses && (
        <CourseDropdown categories={courseCategories} />
      )}
    </div>
  );
};

export default CoursesPage;