import React from 'react';
import bgImage from './images/about-bg.jpg'; // Ensure correct path

export default function About() {
  return (
      <section id="about" className="relative w-full min-h-screen m-0 p-0 overflow-hidden pt-16">
      {/* Background image */}
      <img
        src={bgImage}
        alt="About background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Left-aligned content */}
      <div className="relative z-10 h-full w-full flex items-center px-6 md:px-24 py-16">
        <div className="text-white max-w-2xl">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            About FinLog
          </h2>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            FinLog is a cutting-edge financial platform designed to give you full control over your finances. Clean design, secure access, and seamless budgeting tools—FinLog empowers your financial future.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-xl transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
