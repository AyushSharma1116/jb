import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const IndustryRoleSelection = () => {
  const [industry, setIndustry] = useState('');
  const [role, setRole] = useState('');
  const [roles, setRoles] = useState([]);
  const [skills, setSkills] = useState([]);
  const [userSkills, setUserSkills] = useState('');
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAIResponse] = useState(null);

  const industries = ['Technology', 'Healthcare', 'Finance', 'Marketing'];
  const rolesMap = {
    Technology: ['Software Developer', 'Data Scientist', 'AI Specialist'],
    Healthcare: ['Doctor', 'Nurse', 'Pharmacist'],
    Finance: ['Investment Banker', 'Accountant', 'Financial Analyst'],
    Marketing: ['Content Writer', 'SEO Specialist', 'Digital Marketer'],
  };

  const skillsMap = {
    'Software Developer': ['Java', 'C++', 'JavaScript', 'Problem Solving'],
    'Data Scientist': ['Python', 'Machine Learning', 'Statistics', 'Data Analysis'],
    'AI Specialist': ['TensorFlow', 'Machine Learning', 'Deep Learning', 'Python'],
    'Doctor': ['Clinical Knowledge', 'Patient Care', 'Medical Research'],
    'Nurse': ['Patient Care', 'Medical Knowledge', 'Empathy'],
    'Pharmacist': ['Pharmaceutical Knowledge', 'Attention to Detail', 'Patient Interaction'],
    'Investment Banker': ['Financial Analysis', 'Excel', 'Risk Management'],
    'Accountant': ['Financial Reporting', 'Tax Knowledge', 'Excel'],
    'Financial Analyst': ['Excel', 'Data Analysis', 'Financial Modelling'],
    'Content Writer': ['Creativity', 'Grammar', 'Research'],
    'SEO Specialist': ['SEO Tools', 'Google Analytics', 'Content Writing'],
    'Digital Marketer': ['SEO', 'PPC', 'Social Media Marketing'],
  };

  useEffect(() => {
    if (industry) {
      setRoles(rolesMap[industry] || []);
    }
    setRole('');
    setSkills([]);
  }, [industry]);

  useEffect(() => {
    if (role) {
      setSkills(skillsMap[role] || []);
    }
  }, [role]);

  const handleSubmit = async () => {
    if (!industry || !role || !userSkills) {
      alert('Please fill in all fields.');
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/roadmap', {
        industry,
        role,
        currentSkills: userSkills.split(',').map(skill => skill.trim()),
      });
      setAIResponse(response.data);
    } catch (err) {
      console.error('Error fetching roadmap:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
<div
  className="h-full min-h-screen flex items-center justify-center text-white px-4 w-screen bg-cover bg-center"
  style={{ backgroundImage: "url('src/assets/ai image.jpg')" }}
>
<div className="w-full max-w-lg bg-sky-100 p-8 rounded-xl shadow-lg text-white">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Get Started</h2>

        {/* Industry Dropdown */}
        <div className="mb-6">
          <label htmlFor="industry" className="block text-lg font-medium text-gray-700">Select Industry</label>
          <select
            id="industry"
            className="w-full p-3 mt-2 bg-gray-100 text-gray-800 rounded-md border border-gray-300"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          >
            <option value="">Select an Industry</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
        </div>

        {/* Role Dropdown */}
        {industry && (
          <div className="mb-6">
            <label htmlFor="role" className="block text-lg font-medium text-gray-700">Select Role</label>
            <select
              id="role"
              className="w-full p-3 mt-2 bg-gray-100 text-gray-800 rounded-md border border-gray-300"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select a Role</option>
              {roles.map((role) => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
        )}

        {/* Skills Section */}
        {role && skills.length > 0 && (
          <div className="mt-6 bg-indigo-50 p-4 rounded-md text-gray-800">
            <h3 className="text-xl font-semibold mb-2">Skills Required for {role}</h3>
            <ul className="list-disc pl-5">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Current Skills Input */}
        {role && (
          <div className="mt-6">
            <label htmlFor="userSkills" className="block text-lg font-medium text-gray-700">
              Your Current Skills (comma-separated)
            </label>
            <input
              type="text"
              id="userSkills"
              className="w-full p-3 mt-2 bg-gray-100 text-gray-800 rounded-md border border-gray-300"
              placeholder="e.g., JavaScript, Python, Data Analysis"
              value={userSkills}
              onChange={(e) => setUserSkills(e.target.value)}
            />
          </div>
        )}

        {/* Submit Button */}
        {role && (
          <div className="mt-6 text-center">
            <button
              onClick={handleSubmit}
              className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-500 transition duration-300"
              disabled={loading}
            >
              {loading ? 'Analyzing...' : 'Get Roadmap'}
            </button>
          </div>
        )}

        {/* AI Response Section */}
        {aiResponse && (
          <div className="mt-8 bg-green-50 p-4 rounded-md text-gray-900">
            <h3 className="text-xl font-bold mb-2 text-green-700">AI Recommendations</h3>
            <p><strong>Recommended Job Profiles:</strong> {aiResponse.recommendedProfiles?.join(', ')}</p>
            <p className="mt-2"><strong>Skills to Learn:</strong> {aiResponse.skillsToLearn?.join(', ')}</p>
            <p className="mt-2 whitespace-pre-line"><strong>Roadmap:</strong> {aiResponse.roadmap}</p>
          </div>
        )}

        {/* Next Button */}
        <div className="mt-8 text-center">
          <Link
            to="/dashboard"
            className="w-full bg-yellow-400 text-blue-800 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-300 transition duration-300"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustryRoleSelection;
