import React from 'react';

const Certification = () => {
  return (
    <section id="certification" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          My Certifications
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Replace these with real certificate info */}
          <div className="p-4 bg-gray-800 rounded-lg text-white shadow-lg">
            <h3 className="text-xl font-semibold">Java Full Stack</h3>
            <p className="text-sm text-gray-400">By XYZ Institute, 2024</p>
          </div>

          <div className="p-4 bg-gray-800 rounded-lg text-white shadow-lg">
            <h3 className="text-xl font-semibold">Spring Boot REST APIs</h3>
            <p className="text-sm text-gray-400">By Udemy, 2025</p>
          </div>

          <div className="p-4 bg-gray-800 rounded-lg text-white shadow-lg">
            <h3 className="text-xl font-semibold">SQL Mastery</h3>
            <p className="text-sm text-gray-400">By HackerRank, 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
