import React from "react";
import { Progress } from "../components/ui/Progress";
import { Card, CardContent } from "../components/ui/Card";
import { Link } from "react-router-dom";
import { LogOut, User, FileText, Edit } from "lucide-react";

const Dashboard = () => {
  const skills = [
    { name: "JavaScript", level: 70 },
    { name: "Python", level: 50 },
    { name: "React", level: 60 },
    { name: "Machine Learning", level: 40 },
  ];

  const learningPath = [
    "HTML & CSS Basics",
    "JavaScript Fundamentals",
    "React for Beginners",
    "Python for Data Science",
    "Intro to Machine Learning",
  ];

  const dailySuggestion = "Spend 30 mins reviewing React hooks today! 🚀";

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6 flex flex-col justify-between shadow-xl">
        <div>
          <div className="flex items-center mb-6">
            <User className="w-8 h-8 mr-3" />
            <div>
              <h2 className="text-lg font-semibold">John Doe</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">john.doe@email.com</p>
            </div>
          </div>

          <button className="flex items-center gap-2 text-sm text-blue-700 hover:underline mb-6">
            <Edit size={16} />
            Edit Profile
          </button>

          <nav className="space-y-4">
            <Link to="#skills" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600">
              <User size={18} />
              Your Skills
            </Link>
            <Link to="#resume" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600">
              <FileText size={18} />
              Resume
            </Link>
          </nav>
        </div>

        <button className="mt-8 flex items-center gap-2 text-red-600 hover:underline">
          <LogOut size={18} />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6 overflow-y-auto">
        <h1 className="text-4xl font-bold text-center">Welcome Back to JobBuddy 👋</h1>

        {/* Skill Progress */}
        <Card id="skills">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">Your Skills Progress</h2>
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1 text-sm font-medium text-gray-700">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <Progress value={skill.level} />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Learning Path */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">Your Learning Path</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              {learningPath.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Daily Suggestion */}
        <Card>
          <CardContent className="p-6 text-blue-900">
            <h2 className="text-2xl font-semibold mb-2">AI Suggestion for Today</h2>
            <p className="text-lg italic">{dailySuggestion}</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
