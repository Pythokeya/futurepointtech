import React from 'react';
import { BookOpen, Users, Building2, Globe2, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import Header from './components/Header';
import CoursesPage from './components/CoursesPage';

const currentYear = new Date().getFullYear();

function App() {
  const scrollToCourses = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={{ scrollToCourses, scrollToContact }} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 md:mb-8 flex justify-center">
              <img 
                src="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1397756081/b0655932a06065dec9cd39a87537d300.jpg" 
                alt="Future Point Technologies"
                className="rounded-lg w-24 h-24 md:w-32 md:h-32"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Future Point Technologies</h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8">Leading Software Training Center in Hyderabad Since 2004</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Book Course
              </button>
              <button 
                onClick={scrollToCourses}
                className="w-full sm:w-auto border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                View Courses
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Classroom Training</h3>
              <p className="text-gray-600">Learn directly from experienced professionals in our state-of-the-art facilities</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Online Training</h3>
              <p className="text-gray-600">Flexible learning options with live online sessions from anywhere</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Corporate Training</h3>
              <p className="text-gray-600">Customized training programs for corporate teams</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Why Choose Future Point Technologies?</h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {[
              "21+ Years of Excellence",
              "Expert Trainers",
              "Flexible Learning Options",
              "Comprehensive Course Catalog",
              "Industry-Relevant Curriculum",
              "Hands-on Training"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-base md:text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Our Course Offerings</h2>
          <CoursesPage />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Contact Us</h2>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4">
              <Mail className="w-8 h-8 text-blue-600" />
              <span className="text-xl">onlinetrgfpt@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Phone className="w-8 h-8 text-blue-600" />
              <span className="text-xl">+(91) 92477 65590</span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <MapPin className="w-16 h-16 text-blue-600" />
              <span className="text-xl">Plot No:60, 2nd Floor, Western Hills,
              Besides HDFC Bank, Opp: S R Nagar Bus Stop, Sajneev Reddy Nagar, Hyderabad, 500038, IN</span>
            </div>
            <p className="text-gray-600 text-center mt-4">
              Please contact us for detailed course information, schedules, and pricing. Our team will be happy to assist you with any queries.
            </p>

            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 md:py-8">
        {/* Social Media Section */}
        <div className="mt-8 mb-8 text-center">
              <h3 className="text-2xl font-semibold mb-6">Follow Us Social Media</h3>
              <div className="flex justify-center space-x-8">
                <a 
                  href="https://www.linkedin.com/company/futurepoint-technologies" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/FuturePointTech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
              </div>
            </div>

        <div className="container mx-auto px-4 text-center">
          <p>© {currentYear} FuturePoint Technologies. All rights reserved.</p>
          <br></br>
          <span className='text-gray-400'>Website by P. Karthikeya</span>
        </div>
      </footer>
    </div>
  );
}

export default App;