import React from 'react';
import AboutFounderVideo from './AboutFounderVideo';

const AboutFounder = () => {
  return (
    <div className="mt-20">
      <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">About the Founder</h3>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3"
            alt="Margaret - Founder"
            className="rounded-lg shadow-lg w-full h-[400px] object-cover"
          />
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-4">Margaret</h4>
          <p className="text-gray-600 mb-6">
            As a certified life coach with over two decades of experience in personal development,
            Margaret brings a unique blend of Eastern wisdom and Western coaching methodologies
            to her practice. Her journey began after experiencing her own life transitions,
            which inspired her to help others navigate similar challenges.
          </p>
          <p className="text-gray-600 mb-6">
            With a background in psychology and mindfulness practices, Margaret has developed
            a holistic approach to coaching that addresses both personal and professional
            growth. Her expertise in cultural transitions and identity development makes
            her particularly effective in helping clients from diverse backgrounds.
          </p>
          <p className="text-gray-600">
            Margaret's mission is to empower individuals to discover their authentic selves
            and create meaningful change in their lives. Her gentle yet powerful approach
            has helped hundreds of clients transform their challenges into opportunities
            for growth and success.
          </p>
        </div>
      </div>
      <AboutFounderVideo />
    </div>
  );
}

export default AboutFounder;