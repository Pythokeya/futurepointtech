import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const HTMLViewer: React.FC<{ path: string }> = ({ path }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleError = () => {
    setError('Failed to load content');
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="sticky top-0 z-50 bg-white shadow-sm p-4 md:hidden">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600"
          aria-label="Back to home"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span>Back</span>
        </button>
      </div>

      <div className="w-full h-[calc(100vh-64px)] md:h-screen relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        )}
        
        {error ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="text-red-600 mb-4 text-center">{error}</div>
            <button
              onClick={() => navigate('/')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Return Home
            </button>
          </div>
        ) : (
          <iframe
            src={path}
            className="w-full h-full border-0"
            title="Course Content"
            onLoad={() => setIsLoading(false)}
            onError={handleError}
            style={{ 
              width: '100%', 
              height: '100%', 
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch' 
            }}
          />
        )}
      </div>
    </div>
  );
};

export default HTMLViewer;
