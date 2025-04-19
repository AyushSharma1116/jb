import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg from '../assets/hero-image.avif';
import Navbar from './Navbar';
import IndustryRoleSelection from './IndustryRoleSelection';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white overflow-x-hidden w-[98vw]">
      <Navbar />

      <main className="flex flex-col items-center justify-center flex-grow px-4 mt-20 w-full">
        <div className="text-center animate-fade-in-up space-y-10 w-full max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg leading-tight">
            Welcome to <span className="text-yellow-400">Job Buddy</span>
          </h1>

          <p className="text-base md:text-xl text-gray-200 max-w-2xl mx-auto">
            Unlock your potential with personalized AI-powered career guidance. Let us help you achieve your dream job!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/industry-role"
              className="bg-yellow-400 text-blue-900 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Link>
            <Link
              to="/assessment"
              className="bg-white text-indigo-900 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-100 hover:scale-105 transition-all duration-300"
            >
              Try Skill Quiz
            </Link>
          </div>

          <div className="mt-12">
            <img
              src={HeroImg}
              alt="AI Job Mentor"
              className="w-full max-w-md mx-auto rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Features Section */}
          <section className="mt-20 text-gray-800 py-12 px-6 rounded-3xl shadow-inner">
            <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
              {/* Benefit 1 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-lime-100 rounded-full p-3">
                    <svg className="h-6 w-6 text-lime-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm.5 5h-1v6h5v-1h-4z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold">Smart Career Insights</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Get real-time industry insights and role suggestions based on your skills and interests.
                </p>
              </div>
              {/* Benefit 2 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-lime-100 rounded-full p-3">
                    <svg className="h-6 w-6 text-lime-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 2a2 2 0 00-2 2v16l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2H6z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold">AI-Powered Resume Builder</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Build optimized resumes tailored to job descriptions using smart content suggestions.
                </p>
              </div>
              {/* Benefit 3 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-lime-100 rounded-full p-3">
                    <svg className="h-6 w-6 text-lime-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.67 0 8 1.34 8 4v4H4v-4c0-2.66 5.33-4 8-4zm0-2a3 3 0 100-6 3 3 0 000 6z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold">Personalized Job Matching</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Discover jobs that align with your goals and preferences using AI-powered matching algorithms.
                </p>
              </div>
              {/* Benefit 4 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-lime-100 rounded-full p-3">
                    <svg className="h-6 w-6 text-lime-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 3a2 2 0 00-2 2v2h18V5a2 2 0 00-2-2H5zm16 6H3v10a2 2 0 002 2h14a2 2 0 002-2V9z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold">Skill Gap Analyzer</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Identify missing skills for your dream job and get personalized learning paths to bridge the gap.
                </p>
              </div>
              {/* Benefit 5 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-lime-100 rounded-full p-3">
                    <svg className="h-6 w-6 text-lime-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.7 0 8 1.35 8 4v4H4v-4c0-2.65 5.3-4 8-4zm0-2a3 3 0 100-6 3 3 0 000 6z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold">AI Interview Coach</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Practice interviews with real-time feedback on your tone, confidence, and response quality.
                </p>
              </div>
              {/* Benefit 6 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-lime-100 rounded-full p-3">
                    <svg className="h-6 w-6 text-lime-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 3h18v2H3zm0 4h10v2H3zm0 4h14v2H3zm0 4h6v2H3zm0 4h18v2H3z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold">Career Tracker Dashboard</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Track your applications, interviews, progress and get reminders for follow-ups and deadlines.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-16 grid md:grid-cols-3 gap-10 text-center">
            <div>
              <h3 className="text-4xl font-bold text-yellow-400">2,500+</h3>
              <p className="text-sm text-gray-200">Skills Assessed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-yellow-400">800+</h3>
              <p className="text-sm text-gray-200">Learning Paths Generated</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-yellow-400">95%</h3>
              <p className="text-sm text-gray-200">Job Role Match Accuracy</p>
            </div>
          </div>
          <hr/>
          <footer className="mt-10 mb-5 text-center text-gray-400">
            <p>&copy; 2024 Job Buddy. All rights reserved.</p>
            <p>Crafted with ❤️ by the Hacknauts Team</p>
          </footer>
        </div>
      </main>

      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-yellow-400 p-4 rounded-full shadow-lg hover:scale-105 transition">
          💬
        </button>
      </div>
    </div>
  );
};

export default Home;