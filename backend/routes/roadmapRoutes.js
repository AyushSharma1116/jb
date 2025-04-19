const express = require('express');
const router = express.Router();
const mockRoadmapLogic = require('../utils/roadmapLogic');

router.post('/', async (req, res) => {
  const { industry, role, currentSkills } = req.body;
  const { recommendedProfiles, skillsToLearn, roadmap } = await mockRoadmapLogic(industry, role, currentSkills);
  res.json({
    recommendedProfiles,
    skillsToLearn,
    roadmap,
  });
});


module.exports = router;
