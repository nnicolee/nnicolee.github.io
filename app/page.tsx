"use client";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
  const catImages = Array.from({ length: 12 }, (_, i) => `/cat_${i + 1}.png`);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        const newOffset = prevOffset + 2; // Adjust speed by modifying this value
        const totalWidth = catImages.length * (300 + 24); // Image width + margin
        return newOffset >= totalWidth ? 0 : newOffset;
      });
    }, 30); // Controls animation smoothness
  
    return () => clearInterval(interval);
  }, [catImages.length]);
  


  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 right-0 w-full p-6 flex justify-end space-x-6 text-white bg-black z-50">
        <a href="#experience" className="hover:underline cursor-pointer">Experience</a>
        <a href="#projects" className="hover:underline cursor-pointer">Projects</a>
        <a href="#volunteer" className="hover:underline cursor-pointer">Volunteer</a>
        <a href="/nicole_lee_resume.pdf" target="_blank" className="hover:underline cursor-pointer">Resume</a>
      </nav>

      <style jsx>{`
        @keyframes underlineAnimation {
          from {
            width: 0;
            background-position: -200% 0;
          }
          to {
            width: 100%;
            background-position: 200% 0;
          }
        }
        
        .animated-underline {
          position: relative;
          display: inline-block;
        }
        
        .animated-underline::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          height: 2px;
          width: 100%;
          background: linear-gradient(90deg, 
            #ff69b4, #ff1493, #ff69b4, #ff1493);
          background-size: 200% 100%;
          animation: underlineAnimation 0.3s ease-in-out forwards;
        }

      `}</style>

      <main className="pt-32 px-6 flex flex-col items-start max-w-3xl mx-auto space-y-12">
        <h1 className="text-6xl font-bold">Hi, I&apos;m Nicole Lee 𝜗𝜚 👋</h1>
        <p className="text-lg leading-relaxed">
          I&apos;m currently a second-year studying Electrical Engineering and Computer Sciences (EECS) at University of California, Berkeley. My hobbies includes brain-inducing games such as poker, chess, crosswords, etc. I also love building legos and cafe-hopping!
        </p>

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

        <section id="experience" className="space-y-6 pt-16">
          <h2 className="text-3xl font-semibold">Experience ⋆ ˚｡⋆౨ৎ˚</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li><span className="animated-underline font-bold">SDE Intern @ Amazon:</span> Developed a self-service tool for autoblocking configuration changes, saved six weeks of work for engineers annually and impacted hundreds of millions customers' deliveries!</li>
            <li><span className="animated-underline font-bold">Machine Learning Researcher @ Climinformatics:</span> Engineered a Seq2Seq model which achieved a 95% accuracy rate in 6-hourly Heat Stress Index forecasts, significantly improving the predictiveness of climate impacts on energy demand and wildfire risks.</li>
            <li><span className="animated-underline font-bold">Full-stack @ Web Development at Berkeley:</span> Collaborated with cross-functional teams to develop interactive and visually appealing web applications for companies using HTML, CSS, JavaScript, and modern frontend frameworks such as React. Delivered the client a seamless user experience and improved website functionality.</li>
            <li><span className="animated-underline font-bold">Frontend Developer @ BerkeleyTime:</span> Developed the interface for crowd-sourced rating feature streamlining the course selection and enrollment process for 45,000+ students.</li>
            <li><span className="animated-underline font-bold">CS61B AI @ Berkeley:</span> (:D)ata Structures, aided in weekly lab sections/office hours</li>
            <li><span className="animated-underline font-bold">AI Rover Embedded Systems Engineer @ Space Technologies at California:</span> Constructed and analyzed circuits and components (designed 6 motors and 5 arm motors through CAN) for radio transmitters/receivers and optimize power usage by 300%</li>
          </ul>
        </section>

        <section id="projects" className="space-y-6 pt-16">
          <h2 className="text-3xl font-semibold">Projects ⋆𐙚₊˚⊹ </h2>
          <ul className="list-disc pl-6 space-y-4">
            <li><span className="animated-underline font-bold">Plant Diseases Image Classification:</span> Developed a deep convolutional neural network that optimizes plant disease detection with 97% accuracy.</li>
            <li><span className="animated-underline font-bold">AWS DeepRacer:</span> Coded a reward function and tuned hyperparameters for an autonomous racing car which made it in top 2% of the AWS DeepRacer competition.</li>
            <li><span className="animated-underline font-bold">Dog Breed Classification:</span> Used a pre-trained image classifier to identify dog breeds</li>
            <li><span className="animated-underline font-bold">S1XT33N - Voice-Controlled Car:</span> Engineered a voice-controlled car by designing and integrating analog sensors, audio processing circuits, and motor control systems, including DAC/ADC converters</li>
            <li><span className="animated-underline font-bold">Notion Replica:</span> Developed a Notion replica using React, Next.js, Chakra UI, and MongoDB creating both the frontend and backend</li>
          </ul>
        </section>

        <section id="volunteer" className="space-y-6 pt-16">
          <h2 className="text-3xl font-semibold">Volunteer Works ⋆౨ৎ˚⟡˖ ࣪</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li><span className="animated-underline font-bold">C88 JM @ CSM:</span> Developed a deep convolutional neural network that optimizes plant disease detection with 97% accuracy.</li>
            <li><span className="animated-underline font-bold">Developer @ Code 4 Tomorrow:</span> Coded a reward function and tuned hyperparameters for an autonomous racing car which made it in top 2% of the AWS DeepRacer competition.</li>
            <li><span className="animated-underline font-bold">Outreach @ WESA:</span> Organized multiple volunteer events that benefits the women community</li>
          </ul>
        </section>
        <section id="milky" className="space-y-6 pt-16">
          <h2 className="text-3xl font-semibold">milky ᓚ₍⑅^..^₎♡</h2>
          <p className="text-lg">dedicated to my rescue cat whom I adopted over the summer &lt;3</p>
        </section>

      </main>
      <section id="milky" className="space-y-6 pt-16">
          <div className="relative w-full max-w-full overflow-hidden mt-6">
            <div className="flex space-x-6 transition-transform duration-300 ease-linear" style={{ transform: `translateX(-${offset}px)` }}>
              {[...catImages, ...catImages].map((image, index) => (
                <img 
                  key={index} 
                  src={image} 
                  alt={`Milky ${index + 1}`} 
                  className="w-1/4 h-96 object-cover rounded-2xl shadow-lg flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </section>

      <footer className="w-full py-6 bg-black text-center text-white mt-16">
        &copy; 2025 Nicole Lee
      </footer>
    </div>
  );
}