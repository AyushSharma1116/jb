import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <section
      className="flex items-center justify-center min-h-screen w-[98vw] bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 dark:from-blue-900 dark:via-indigo-800 dark:to-purple-900 text-gray-900 dark:text-white px-4 py-12"
      id="about"
    >
      <div className="max-w-5xl w-full space-y-12 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-center text-yellow-500 dark:text-yellow-300">About JobBuddy</h2>

        {/* What */}
        <div className="bg-white dark:bg-white/10 dark:text-white text-gray-900 bg-opacity-80 rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-semibold mb-2 text-indigo-700 dark:text-yellow-300">🤖 What is JobBuddy?</h3>
          <p>
            <strong>JobBuddy</strong> is an AI-powered job mentorship platform designed for informal and semi-skilled workers. It acts as a personal guide to help users discover their strengths, assess their skills, build smart resumes, and find suitable job opportunities — all using artificial intelligence.
          </p>
        </div>

        {/* Why */}
        <div className="bg-white dark:bg-white/10 dark:text-white text-gray-900 bg-opacity-80 rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-semibold mb-2 text-indigo-700 dark:text-yellow-300">🔍 Why did we build JobBuddy?</h3>
          <p>
            Many talented individuals in the informal sector lack direction, guidance, and resources. JobBuddy solves this by offering:
            <ul className="list-disc pl-6 mt-2">
              <li>Career mentorship through AI</li>
              <li>Skill-based assessments with instant feedback</li>
              <li>Resume creation based on current job market trends</li>
            </ul>
          </p>
        </div>

        {/* How */}
        <div className="bg-white dark:bg-white/10 dark:text-white text-gray-900 bg-opacity-80 rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-semibold mb-2 text-indigo-700 dark:text-yellow-300">⚙️ How does JobBuddy work?</h3>
          <p>
            After registering, users complete a quick assessment. JobBuddy then recommends learning paths, updates a dynamic resume, and connects users to relevant job opportunities. As they improve, their profiles grow with them.
          </p>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-2xl font-semibold text-center text-indigo-700 dark:text-yellow-300 mb-6">🎯 Key Features</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white dark:bg-white/10 p-4 rounded-xl shadow text-gray-900 dark:text-white">
              <h4 className="font-bold text-lg mb-2">AI Skill Assessment</h4>
              <p className="text-sm">Discover your strengths and ideal job matches through quick quizzes.</p>
            </div>
            <div className="bg-white dark:bg-white/10 p-4 rounded-xl shadow text-gray-900 dark:text-white">
              <h4 className="font-bold text-lg mb-2">Smart Resume Generator</h4>
              <p className="text-sm">Build a professional resume using your real skills and performance.</p>
            </div>
            <div className="bg-white dark:bg-white/10 p-4 rounded-xl shadow text-gray-900 dark:text-white">
              <h4 className="font-bold text-lg mb-2">Career Mapping & Jobs</h4>
              <p className="text-sm">Get learning tracks and job leads based on your evolving profile.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
