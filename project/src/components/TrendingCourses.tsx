import React, { useState, useEffect, useRef } from 'react';

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Responsive courses per view
  const getCoursesPerView = () => {
    if (window.innerWidth < 640) return 2; // Mobile - 2 courses
    if (window.innerWidth < 1024) return 2; // Tablet
    return 4; // Desktop
  };
  
  const [coursesPerView, setCoursesPerView] = useState(getCoursesPerView());

  useEffect(() => {
    const handleResize = () => {
      setCoursesPerView(getCoursesPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoScrolling || isSwiping) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + direction;
        
        // Reverse direction when reaching either end
        if (nextIndex >= courses.length - coursesPerView) {
          setDirection(-1);
          return courses.length - coursesPerView;
        } else if (nextIndex <= 0) {
          setDirection(1);
          return 0;
        }
        
        return nextIndex;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [courses.length, direction, coursesPerView, isAutoScrolling, isSwiping]);

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
  };

  const closeModal = () => {
    setSelectedCourse(null);
  };

  const handlePrevClick = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) return 0;
      return prevIndex - 1;
    });
  };

  const handleNextClick = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= courses.length - coursesPerView) return prevIndex;
      return prevIndex + 1;
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsAutoScrolling(false);
    setIsSwiping(true);
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping) return;
    setTouchEndX(e.touches[0].clientX);
    
    // Calculate swipe distance
    const diff = touchStartX - e.touches[0].clientX;
    if (containerRef.current) {
      const translateX = -currentIndex * (100 / coursesPerView) + (diff / containerRef.current.offsetWidth) * 100;
      containerRef.current.style.transform = `translateX(${translateX}%)`;
    }
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        handleNextClick();
      } else {
        handlePrevClick();
      }
    } else {
      // Reset position if swipe wasn't significant
      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(-${currentIndex * (100 / coursesPerView)}%)`;
      }
    }
  };

  return (
    <div className="w-[95%] mx-auto">
      <h2 className="text-2xl font-bold mb-6">Trending Courses</h2>
      <div className="relative overflow-hidden">
        <button
          onClick={handlePrevClick}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 hidden sm:block"
          disabled={currentIndex <= 0}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div 
          ref={containerRef}
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / coursesPerView)}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className={`flex-none ${
                coursesPerView === 1 ? 'w-full' :
                coursesPerView === 2 ? 'w-1/2' :
                'w-1/4'
              } px-3 cursor-pointer`}
              onClick={() => handleCourseClick(course)}
            >
              <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center h-[300px]">
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
          onClick={handleNextClick}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 hidden sm:block"
          disabled={currentIndex >= courses.length - coursesPerView}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center mt-4 sm:hidden">
          {Array.from({ length: Math.ceil(courses.length / coursesPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoScrolling(false);
                setCurrentIndex(index * coursesPerView);
              }}
              className={`w-2 h-2 mx-1 rounded-full ${
                currentIndex === index * coursesPerView ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
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
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 mt-4 sm:mt-0"
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
                onClick={closeModal}
                className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
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