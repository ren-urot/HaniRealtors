import { Building2, Users, Award, Target } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1560922604-d08a31f8f7d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3Mjg5NDk2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">ABOUT US</h1>
          <p className="text-xl text-white/90">Trusted Real Estate Experts Since 2010</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">OUR MISSION</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            At HANI Realtors, we are committed to providing exceptional real estate services that exceed our clients' expectations. 
            With over a decade of experience in the industry, we've helped thousands of families find their dream homes and investors 
            discover lucrative opportunities.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our team of dedicated professionals combines local market expertise with innovative technology to deliver personalized 
            service and outstanding results. Whether you're buying, selling, or investing, we're here to guide you every step of the way.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Building2 className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">5,000+</h3>
              <p className="text-gray-600">Properties Sold</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">10,000+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Industry Awards</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Target className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">OUR TEAM</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHN8ZW58MXx8fHwxNzcyOTQ1OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Expert Professionals</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team consists of experienced real estate agents, market analysts, and customer service specialists 
                who are passionate about helping you achieve your real estate goals.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Each team member brings unique expertise and a commitment to excellence, ensuring you receive the 
                highest level of service throughout your real estate journey.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-600">Licensed and certified real estate professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-600">Continuous training on market trends and regulations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-600">Dedicated to transparent and ethical practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">OUR VALUES</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty and transparency in all our dealings, building trust with every client interaction.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service, from initial consultation to final closing.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Innovation</h3>
              <p className="text-gray-600">
                We embrace cutting-edge technology and innovative strategies to deliver superior results for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
