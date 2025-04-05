import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface Course {
  id: number;
  title: string;
  icon: string;
  description: string;
  content: string[];
}

interface TrendingCoursesProps {
  courses: Course[];
}

const TrendingCourses: React.FC<TrendingCoursesProps> = ({ courses }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [coursesPerView, setCoursesPerView] = useState(4);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { // mobile
        setCoursesPerView(2);
      } else if (window.innerWidth < 1024) { // tablet
        setCoursesPerView(3);
      } else { // desktop
        setCoursesPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleManualScroll = (direction: 'prev' | 'next') => {
    setIsPaused(true);
    if (direction === 'prev') {
      setCurrentIndex(prev => Math.max(prev - 1, 0));
    } else {
      setCurrentIndex(prev => Math.min(prev + 1, courses.length - coursesPerView));
    }
    setTimeout(() => {
      setIsPaused(false);
    }, 4000);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= courses.length - coursesPerView + 1) {
          return 0; // Scroll back to the start
        }
        return nextIndex;
      });
    }, 1000); // Changed to 1 second

    return () => clearInterval(timer);
  }, [courses.length, coursesPerView, isPaused]);

  const handleCourseClick = (course: Course) => {
    if (course.title === 'Data Analytics') {
      window.open('./courses/data-analytics.html', '_blank');
    } else {
      setSelectedCourse(course);
    }
  };

  const closeModal = () => {
    setSelectedCourse(null);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX) return;
    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < courses.length - coursesPerView) {
        setCurrentIndex(prev => prev + 1);
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      }
    }
    setTouchStartX(null);
  };

  return (
    <div className="w-[95%] mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-6">Trending Courses</h2>
      <div 
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleManualScroll('prev');
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 block"
          disabled={currentIndex === 0}
          aria-label="Previous slides"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div
          ref={containerRef}
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / coursesPerView)}%)`,
          }}
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className={`flex-none ${
                coursesPerView === 2 ? 'w-1/2' :
                coursesPerView === 3 ? 'w-1/3' :
                'w-1/4'
              } px-2 sm:px-3 cursor-pointer`}
              onClick={() => handleCourseClick(course)}
            >
              <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 flex flex-col items-center justify-center min-h-[250px] sm:min-h-[300px]">
                <div className="w-full h-[200px] mb-4 flex items-center justify-center">
                  <img 
                    src={course.icon} 
                    alt={course.title} 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = './assets/placeholder.svg';
                    }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-center line-clamp-2">{course.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleManualScroll('next');
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 block"
          disabled={currentIndex >= courses.length - coursesPerView}
          aria-label="Next slides"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Course Details Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <img 
                  src={selectedCourse.icon} 
                  alt={selectedCourse.title} 
                  className="w-16 h-16 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = './assets/placeholder.svg';
                  }}
                />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">{selectedCourse.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{selectedCourse.description}</p>
                </div>
              </div>
              <button 
                type="button"
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 mt-4 sm:mt-0"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold">Course Content</h4>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                {selectedCourse.content.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={closeModal}
                className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                aria-label="Close course details"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrendingCourses;