import React from 'react';
import { BookOpen, Users, Building2, Globe2, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import CourseList from './components/CourseList';
import Header from './components/Header';
import Chatbot from './components/Chatbot';

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
          <CourseList />
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
              <MapPin className="w-8 h-8 text-blue-600" />
              <span className="text-xl">Hyderabad, Telangana</span>
            </div>
            <p className="text-gray-600 text-lg pt-8 border-t max-w-xl mx-auto">
              Please contact us for detailed course information, schedules, and pricing. Our team will be happy to assist you with any queries.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 md:py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {currentYear} FuturePoint Technologies. All rights reserved.</p>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
}

export default App;