import React, { useContext, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, User, FileText, Edit, X } from "lucide-react";
import { Progress } from "../components/ui/Progress";
import { Card, CardContent } from "../components/ui/Card";
import { AuthContext } from "../context/AuthContext";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, updateUser, logoutUser } = useContext(AuthContext);

  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showResumeBuilder, setShowResumeBuilder] = useState(false);

  const [profileForm, setProfileForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    title: user?.title || "Job Seeker",
    phone: user?.phone || "",
    location: user?.location || "",
    summary: user?.summary || "",
  });

  const [resumeForm, setResumeForm] = useState({
    fullName: user?.name || "",
    role: user?.title || "Frontend Developer",
    email: user?.email || "",
    phone: user?.phone || "",
    location: user?.location || "",
    summary:
      user?.summary ||
      "Motivated and enthusiastic candidate with strong learning ability and interest in building impactful digital solutions.",
    skills: user?.skills?.join(", ") || "HTML, CSS, JavaScript, React",
    education: user?.education || "Add your education here",
    experience: user?.experience || "Add your experience here",
    projects: user?.projects || "Add your projects here",
  });

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

  const dailySuggestion = "Spend 30 mins reviewing React hooks today!";

  const data = {
    labels: skills.map((skill) => skill.name),
    datasets: [
      {
        label: "Skill Level",
        data: skills.map((skill) => skill.level),
        borderColor: "rgb(37, 99, 235)",
        backgroundColor: "rgba(37, 99, 235, 0.15)",
        tension: 0.3,
      },
    ],
  };

  const parsedSkills = useMemo(() => {
    return resumeForm.skills
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean);
  }, [resumeForm.skills]);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const handleProfileChange = (e) => {
    setProfileForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSaveProfile = () => {
    const oldEmail = user?.email;

    const updated = {
      ...user,
      ...profileForm,
    };

    updateUser(updated);

    const allUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const updatedUsers = allUsers.map((item) =>
      item.email === oldEmail ? { ...item, ...updated } : item
    );
    localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));

    setResumeForm((prev) => ({
      ...prev,
      fullName: updated.name || "",
      email: updated.email || "",
      role: updated.title || "",
      phone: updated.phone || "",
      location: updated.location || "",
      summary: updated.summary || "",
    }));

    setShowEditProfile(false);
    alert("Profile updated successfully");
  };

  const handleResumeChange = (e) => {
    setResumeForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOpenPrintPreview = () => {
    const resumeContent = document.getElementById("resume-preview");
    const printWindow = window.open("", "_blank");

    if (!printWindow || !resumeContent) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Resume Preview</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background: #f8fafc;
              margin: 0;
              padding: 30px;
            }
            .resume-sheet {
              max-width: 800px;
              margin: auto;
              background: white;
              padding: 40px;
              border-radius: 12px;
              box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            }
            h1, h2, h3, p { margin: 0 0 10px; }
            h1 { font-size: 30px; color: #0f172a; }
            h2 {
              font-size: 16px;
              margin-top: 24px;
              border-bottom: 2px solid #2563eb;
              padding-bottom: 6px;
              color: #2563eb;
            }
            .skills span {
              display: inline-block;
              margin: 4px 8px 4px 0;
              padding: 6px 10px;
              background: #dbeafe;
              border-radius: 999px;
              font-size: 13px;
            }
          </style>
        </head>
        <body>
          ${resumeContent.outerHTML}
          <script>
            window.onload = function() {
              window.print();
            }
          </script>
        </body>
      </html>
    `);

    printWindow.document.close();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white p-4">
      <div className="w-full max-w-7xl min-h-[90vh] flex bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden">
        <aside className="w-72 bg-white/90 backdrop-blur-lg p-6 flex flex-col justify-between border-r border-white/30">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <User className="w-6 h-6 text-blue-600" />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-slate-800">
                  {user?.name || "User"}
                </h2>
                <p className="text-sm text-slate-500">
                  {user?.email || "No email found"}
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowEditProfile(true)}
              className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 mb-6 font-medium"
            >
              <Edit size={16} />
              Edit Profile
            </button>

            <nav className="space-y-3">
              <Link
                to="#skills"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition"
              >
                <User size={18} />
                Your Skills
              </Link>

              <button
                onClick={() => setShowResumeBuilder(true)}
                className="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition"
              >
                <FileText size={18} />
                Create Resume
              </button>
            </nav>
          </div>

          <button
            onClick={handleLogout}
            className="mt-8 flex items-center gap-2 text-red-500 hover:text-red-700 font-medium"
          >
            <LogOut size={18} />
            Logout
          </button>
        </aside>

        <main className="flex-1 p-8 space-y-6 overflow-y-auto text-gray-900">
          <div className="bg-white rounded-2xl shadow-md border p-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome Back, {user?.name || "User"} 👋
            </h1>
            <p className="text-gray-500 mt-2">
              Track your skills, learning path, and build your resume.
            </p>
          </div>

          <Card className="bg-white rounded-xl shadow-md border" id="skills">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Your Skills Progress
              </h2>

              <div className="mb-6 h-[260px] bg-blue-50 rounded-xl p-4">
                <Line
                  data={data}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                  }}
                />
              </div>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1 text-slate-700">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-xl shadow-md border">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Your Learning Path
              </h2>
              <ul className="space-y-3">
                {learningPath.map((step, index) => (
                  <li
                    key={index}
                    className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 text-slate-700"
                  >
                    {step}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-xl shadow-md border">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                AI Suggestion for Today
              </h2>
              <p className="text-lg text-blue-700 font-medium">
                {dailySuggestion}
              </p>
            </CardContent>
          </Card>
        </main>
      </div>

      {showEditProfile && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white text-black rounded-2xl w-full max-w-lg p-6 relative shadow-xl">
            <button
              onClick={() => setShowEditProfile(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-700"
            >
              <X />
            </button>

            <h2 className="text-2xl font-bold mb-4 text-slate-800">
              Edit Profile
            </h2>

            <div className="space-y-3">
              <input
                name="name"
                value={profileForm.name}
                onChange={handleProfileChange}
                placeholder="Name"
                className="w-full border border-slate-300 p-3 rounded-lg"
              />
              <input
                name="email"
                value={profileForm.email}
                onChange={handleProfileChange}
                placeholder="Email"
                className="w-full border border-slate-300 p-3 rounded-lg"
              />
              <input
                name="title"
                value={profileForm.title}
                onChange={handleProfileChange}
                placeholder="Title"
                className="w-full border border-slate-300 p-3 rounded-lg"
              />
              <input
                name="phone"
                value={profileForm.phone}
                onChange={handleProfileChange}
                placeholder="Phone"
                className="w-full border border-slate-300 p-3 rounded-lg"
              />
              <input
                name="location"
                value={profileForm.location}
                onChange={handleProfileChange}
                placeholder="Location"
                className="w-full border border-slate-300 p-3 rounded-lg"
              />
              <textarea
                name="summary"
                value={profileForm.summary}
                onChange={handleProfileChange}
                placeholder="Professional Summary"
                rows="4"
                className="w-full border border-slate-300 p-3 rounded-lg"
              />

              <button
                onClick={handleSaveProfile}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg"
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {showResumeBuilder && (
        <div className="fixed inset-0 bg-black/60 z-50 overflow-y-auto p-4">
          <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-6 mt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-slate-800">
                Interactive Resume Builder
              </h2>
              <button
                onClick={() => setShowResumeBuilder(false)}
                className="text-slate-500 hover:text-slate-700"
              >
                <X />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Fill Resume Details
                </h3>

                <div className="space-y-3">
                  <input
                    name="fullName"
                    value={resumeForm.fullName}
                    onChange={handleResumeChange}
                    placeholder="Full Name"
                    className="w-full border border-slate-300 p-3 rounded-lg text-black"
                  />
                  <input
                    name="role"
                    value={resumeForm.role}
                    onChange={handleResumeChange}
                    placeholder="Job Role"
                    className="w-full border border-slate-300 p-3 rounded-lg text-black"
                  />
                  <input
                    name="email"
                    value={resumeForm.email}
                    onChange={handleResumeChange}
                    placeholder="Email"
                    className="w-full border border-slate-300 p-3 rounded-lg text-black"
                  />
                  <input
                    name="phone"
                    value={resumeForm.phone}
                    onChange={handleResumeChange}
                    placeholder="Phone"
                    className="w-full border border-slate-300 p-3 rounded-lg text-black"
                  />
                  <input
                    name="location"
                    value={resumeForm.location}
                    onChange={handleResumeChange}
                    placeholder="Location"
                    className="w-full border border-slate-300 p-3 rounded-lg text-black"
                  />
                  <textarea
                    name="summary"
                    value={resumeForm.summary}
                    onChange={handleResumeChange}
                    placeholder="Professional Summary"
                    rows="4"
                    className="w-full border border-slate-300 p-3 rounded-lg text-black"
                  />
                  <textarea
                    name="skills"
                    value={resumeForm.skills}
                    onChange={handleResumeChange}
                    placeholder="Skills separated by commas"
                    rows="3"
                    className="w-full border border-slate-300 p-3 rounded-lg text-black"
                  />
                  <textarea
                    name="education"
                    value={resumeForm.education}
                    onChange={handleResumeChange}
                    placeholder="Education"
                    rows="3"
                    className="w-full border border-slate-300 p-3 rounded-lg text-black"
                  />
                  <textarea
                    name="experience"
                    value={resumeForm.experience}
                    onChange={handleResumeChange}
                    placeholder="Experience"
                    rows="4"
                    className="w-full border border-slate-300 p-3 rounded-lg text-black"
                  />
                  <textarea
                    name="projects"
                    value={resumeForm.projects}
                    onChange={handleResumeChange}
                    placeholder="Projects"
                    rows="4"
                    className="w-full border border-slate-300 p-3 rounded-lg text-black"
                  />

                  <button
                    onClick={handleOpenPrintPreview}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg"
                  >
                    Preview / Download Resume
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Live Resume Preview
                </h3>

                <div
                  id="resume-preview"
                  className="resume-sheet bg-white rounded-xl p-8 text-gray-900 shadow-lg border border-slate-200"
                >
                  <h1 className="text-3xl font-bold">
                    {resumeForm.fullName || "Your Name"}
                  </h1>

                  <p className="text-lg text-blue-700 font-medium">
                    {resumeForm.role || "Your Role"}
                  </p>

                  <p className="text-sm text-slate-600 mt-2">
                    {resumeForm.email}
                    {resumeForm.phone ? ` | ${resumeForm.phone}` : ""}
                    {resumeForm.location ? ` | ${resumeForm.location}` : ""}
                  </p>

                  <div className="mt-6">
                    <h2 className="text-lg font-bold border-b-2 border-blue-600 pb-1 mb-2">
                      Professional Summary
                    </h2>
                    <p className="text-sm leading-6">{resumeForm.summary}</p>
                  </div>

                  <div className="mt-6">
                    <h2 className="text-lg font-bold border-b-2 border-blue-600 pb-1 mb-2">
                      Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {parsedSkills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h2 className="text-lg font-bold border-b-2 border-blue-600 pb-1 mb-2">
                      Education
                    </h2>
                    <p className="text-sm leading-6 whitespace-pre-line">
                      {resumeForm.education}
                    </p>
                  </div>

                  <div className="mt-6">
                    <h2 className="text-lg font-bold border-b-2 border-blue-600 pb-1 mb-2">
                      Experience
                    </h2>
                    <p className="text-sm leading-6 whitespace-pre-line">
                      {resumeForm.experience}
                    </p>
                  </div>

                  <div className="mt-6">
                    <h2 className="text-lg font-bold border-b-2 border-blue-600 pb-1 mb-2">
                      Projects
                    </h2>
                    <p className="text-sm leading-6 whitespace-pre-line">
                      {resumeForm.projects}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;