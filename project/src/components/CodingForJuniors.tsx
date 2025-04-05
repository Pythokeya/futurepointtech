import React, { useState, useEffect, useRef } from 'react';

interface Course {
  id: number;
  title: string;
  icon: string;
  description: string;
}

const codingCourses: Course[] = [
  {
    id: 1,
    title: 'C Language Training',
    icon: 'https://cdn.worldvectorlogo.com/logos/c-1.svg',
    description: 'Learn the fundamentals of C programming.',
  },
  {
    id: 2,
    title: 'Python',
    icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg',
    description: 'Master Python programming for beginners.',
  },
  {
    id: 3,
    title: 'Core Java',
    icon: 'https://cdn.worldvectorlogo.com/logos/java.svg',
    description: 'Learn Java programming from scratch.',
  },
  {
    id: 4,
    title: 'Web Development',
    icon: 'https://cdn.worldvectorlogo.com/logos/html-1.svg',
    description: 'Build websites with HTML, CSS, and JavaScript.',
  },
  {
    id: 5,
    title: 'Machine Learning for High Schoolers',
    icon: 'https://th.bing.com/th/id/OIP.-UMPqN728YcchYDT-Qcc6AHaE3?rs=1&pid=ImgDetMain',
    description: 'Explore machine learning concepts for beginners.',
  },
];

const CodingForJuniors: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [coursesPerView, setCoursesPerView] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX) return;
    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < codingCourses.length - coursesPerView) {
        setCurrentIndex(prev => prev + 1);
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      }
    }
    setTouchStartX(null);
  };

  const handleManualScroll = (direction: 'prev' | 'next') => {
    setIsPaused(true);
    if (direction === 'prev') {
      setCurrentIndex(prev => Math.max(prev - 1, 0));
    } else {
      setCurrentIndex(prev => Math.min(prev + 1, codingCourses.length - coursesPerView));
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
        if (nextIndex >= codingCourses.length - coursesPerView + 1) {
          return 0;
        }
        return nextIndex;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [coursesPerView, isPaused]);

  return (
    <div className="w-[95%] mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-6">Coding for Juniors</h2>
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
          {codingCourses.map((course) => (
            <div
              key={course.id}
              className={`flex-none ${
                coursesPerView === 2 ? 'w-1/2' :
                coursesPerView === 3 ? 'w-1/3' :
                'w-1/4'
              } px-2 sm:px-3 cursor-pointer`}
            >
              <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 flex flex-col items-center justify-center min-h-[250px] sm:min-h-[285px]">
                <div className="w-full h-[190px] mb-4 flex items-center justify-center">
                  <img
                    src={course.icon}
                    alt={course.title}
                    className="w-[95%] h-[95%] object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {course.description}
                </p>
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
          disabled={currentIndex >= codingCourses.length - coursesPerView}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CodingForJuniors;
