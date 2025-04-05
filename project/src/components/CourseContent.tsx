import React, { useEffect, useState } from 'react';
import '../styles/courseContent.css';

const CourseContent: React.FC = () => {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    fetch('./data-analytics.html')
      .then(response => response.text())
      .then(html => {
        // Remove any fixed widths from the HTML content
        const processedHtml = html.replace(/width="\d+"/g, '')
                                .replace(/width:\d+\.?\d*pt/g, 'width:auto');
        setContent(processedHtml);
      })
      .catch(error => {
        console.error('Error loading course content:', error);
      });
  }, []);

  return (
    <div className="course-content">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default CourseContent;
