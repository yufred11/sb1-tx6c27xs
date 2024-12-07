import React from 'react';
import AboutFounder from './AboutFounder';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">About Us</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="Life Coach"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Your Journey to Well-being</h3>
            <p className="text-gray-600 mb-6">
              At Navigate Well Coach, we understand that life's transitions can be challenging. 
              Our experienced coaches are here to guide you through personal and professional 
              transformations with empathy, expertise, and proven strategies.
            </p>
            <p className="text-gray-600">
              Whether you're seeking career advancement, personal growth, or life balance, 
              we provide the support and tools you need to navigate your journey successfully.
            </p>
          </div>
        </div>
        <AboutFounder />
      </div>
    </section>
  );
}

export default About;