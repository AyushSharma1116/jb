const express = require('express');
const app = express();
const PORT = 5000;
const roadmapRoutes = require('./routes/roadmapRoutes');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
)
app.use('/api/roadmap', roadmapRoutes);

app.get('/', (req, res) => {
  res.send('Roadmap endpoint is live. Use POST to get recommendations.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});