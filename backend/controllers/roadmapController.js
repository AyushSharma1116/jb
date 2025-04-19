const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateRoadmap = async (req, res) => {
  try {
    const { industry, role, userSkills } = req.body;

    const prompt = `
    Industry: ${industry}
    Role: ${role}
    Current Skills: ${userSkills.join(', ')}

    Based on this, suggest:
    1. Best-matching job profiles
    2. Top skills to learn next
    3. A 3-month roadmap with weekly goals to prepare for this role
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ roadmap: text });
  } catch (error) {
    console.error('Error generating roadmap:', error);
    res.status(500).json({ error: 'Failed to generate roadmap' });
  }
};

module.exports = { generateRoadmap };
