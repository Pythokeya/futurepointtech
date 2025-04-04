import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface Course {
  title: string;
  description: string;
  content: string[];
}

interface Category {
  id: number;
  title: string;
  courses: Course[];
}

interface CourseDropdownProps {
  categories: Category[];
}

const CourseDropdown: React.FC<CourseDropdownProps> = ({ categories }) => {
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const toggleCategory = (categoryId: number) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="mt-8 space-y-4">
      {categories.map(category => (
        <div key={category.id} className="bg-white rounded-lg shadow-md">
          <button
            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 rounded-lg"
            onClick={() => toggleCategory(category.id)}
          >
            <span className="font-semibold text-lg">{category.title}</span>
            {expandedCategories.includes(category.id) ? (
              <ChevronDown className="w-5 h-5" />
            ) : (
              <ChevronRight className="w-5 h-5" />
            )}
          </button>

          {expandedCategories.includes(category.id) && (
            <div className="p-4 border-t">
              <div className="space-y-4">
                {category.courses.map((course, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
                    onClick={() => setSelectedCourse(selectedCourse?.title === course.title ? null : course)}
                  >
                    <h3 className="font-medium">{course.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{course.description}</p>
                    
                    {selectedCourse?.title === course.title && (
                      <div className="mt-4">
                        <h4 className="font-semibold mb-2">Course Content:</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          {course.content.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseDropdown; 