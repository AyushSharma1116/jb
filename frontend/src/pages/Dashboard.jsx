import React, { useState } from "react";
import { Progress } from "../components/ui/Progress";
import { Card, CardContent } from "../components/ui/Card";
import { Link } from "react-router-dom";
import { LogOut, User, FileText, Edit } from "lucide-react";
import jsPDF from "jspdf";

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

  const [showResumeForm, setShowResumeForm] = useState(false);

  const ResumeForm = () => {
    const [form, setForm] = useState({
      name: "",
      email: "",
      experience: "",
      education: "",
      qualification: "",
      achievements: "",
      coursework: "",
      image: null,
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    };

    const handleImageChange = (e) => {
      if (e.target.files && e.target.files[0]) {
        setForm({ ...form, image: e.target.files[0] });
      }
    };

    const handleDownload = async () => {
      const doc = new jsPDF();
      let y = 10;

      doc.text(`Name: ${form.name}`, 10, y); y += 10;
      doc.text(`Email: ${form.email}`, 10, y); y += 10;
      doc.text(`Experience: ${form.experience}`, 10, y); y += 10;
      doc.text(`Education: ${form.education}`, 10, y); y += 10;
      doc.text(`Qualification: ${form.qualification}`, 10, y); y += 10;
      doc.text(`Achievements: ${form.achievements}`, 10, y); y += 10;
      doc.text(`Relevant Coursework: ${form.coursework}`, 10, y); y += 10;

      if (form.image) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const imgData = e.target?.result;
          if (typeof imgData === "string") {
            doc.addImage(imgData, "JPEG", 140, 10, 50, 50);
            doc.save("resume.pdf");
          }
        };
        reader.readAsDataURL(form.image);
      } else {
        doc.save("resume.pdf");
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-xl text-black w-full max-w-lg shadow-lg overflow-y-auto max-h-[90vh]">
          <h2 className="text-2xl font-bold mb-4">Resume Builder</h2>
          <input name="name" placeholder="Name" onChange={handleChange} className="w-full border p-2 mb-2" />
          <input name="email" placeholder="Email" onChange={handleChange} className="w-full border p-2 mb-2" />
          <textarea name="experience" placeholder="Experience" onChange={handleChange} className="w-full border p-2 mb-2" />
          <textarea name="education" placeholder="Education Details" onChange={handleChange} className="w-full border p-2 mb-2" />
          <textarea name="qualification" placeholder="Qualification" onChange={handleChange} className="w-full border p-2 mb-2" />
          <textarea name="achievements" placeholder="Achievements" onChange={handleChange} className="w-full border p-2 mb-2" />
          <textarea name="coursework" placeholder="Relevant Coursework" onChange={handleChange} className="w-full border p-2 mb-2" />

          <label className="block mb-2 mt-2 font-semibold">Upload Image (Optional):</label>
          <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />

          <div className="flex justify-between">
            <button onClick={handleDownload} className="bg-blue-600 text-white px-4 py-2 rounded">Download PDF</button>
            <button onClick={() => setShowResumeForm(false)} className="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6 flex flex-col justify-between shadow-xl">
        <div>
          <div className="flex items-center mb-6">
            <User className="w-8 h-8 mr-3" />
            <div>
              <h2 className="text-lg font-semibold">Ayush</h2>
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
            <button
              onClick={() => setShowResumeForm(true)}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600"
            >
              <FileText size={18} />
              Create Resume
            </button>
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

      {/* Resume Form Modal */}
      {showResumeForm && <ResumeForm />}
    </div>
  );
};

export default Dashboard;
