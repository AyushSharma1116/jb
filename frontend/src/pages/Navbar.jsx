import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomePageLogo from '../assets/homepage-logo.png';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 bg-opacity-90 shadow-lg flex justify-between items-center p-4 z-50">
            <div className="flex items-center space-x-4">
                <img src={HomePageLogo} alt="Logo" className="h-10 w-10 rounded-full border-2 border-white" />
                <span className="text-xl font-bold text-white tracking-wide">JobBuddy</span>
            </div>
            <div>
                <button
                    onClick={() => navigate('/login')}
                    className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105 hover:from-blue-600 hover:to-blue-800"
                >
                    Login
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
