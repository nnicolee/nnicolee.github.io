"use client";  // Marking as client component
import React from 'react';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";  // Import specific icons
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar aligned to the right with no separator */}
      <nav className="fixed top-0 right-0 w-full p-6 flex justify-end space-x-6 text-white bg-black z-50">
  <a href="#experience" className="hover:underline cursor-pointer">Experience</a>
  <a href="#projects" className="hover:underline cursor-pointer">Projects</a>
  {/* Use target="_blank" to open in a new tab */}
  <a href="/nicole_lee_resume.pdf" target="_blank" className="hover:underline cursor-pointer">Resume</a>
</nav>
      {/* Main Content */}
      <main className="pt-32 px-6 flex flex-col items-start max-w-3xl mx-auto space-y-8">
        
        {/* Increased font size for the name */}
        <h1 className="text-6xl font-bold">Hi, I&apos;m Nicole Lee 👋</h1>
        <p className="text-lg leading-relaxed">
        I&apos;m currently a second-year studying Electrical Engineering and Computer Sciences (EECS) at University of California, Berkeley.
        </p>

        {/* Font Awesome Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://github.com/nnicolee" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://linkedin.com/in/nicolelee7887" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
          <a href="mailto:nicolelee1@berkeley.edu" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>

        {/* Experience Section */}
        <section id="experience" className="space-y-4 pt-16">
          <h2 className="text-3xl font-semibold">Experience</h2>
          <p>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>SDE Intern @ Amazon:</strong> Developed a self-service tool for autoblocking configuration changes, saved six weeks of work per year.</li>
            <li><strong>Machine Learning Researcher @ Climinformatics:</strong> Engineered a Seq2Seq model which achieved a 95% accuracy rate in 6-hourly Heat Stress Index forecasts, significantly improving the predictiveness of climate impacts on energy demand and wildfire risks.</li>
            <li><strong>Full-stack @ Web Development at Berkeley: </strong> coming soon </li>
          </ul>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-4 pt-16">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Plant Diseases Image Classification:</strong> Developed a deep convolutional neural network that optimizes plant disease detection with 97% accuracy.</li>
            <li><strong>AWS DeepRacer:</strong> Coded a reward function and tuned hyperparameters for an autonomous racing car which made it in top 2% of the AWS DeepRacer competition.</li>
            <li><strong>Stock Prediction:</strong> tba </li>
            <li>tba</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-black text-center text-white mt-8">
        &copy; 2024 Nicole Lee
      </footer>

    </div>
  );
}