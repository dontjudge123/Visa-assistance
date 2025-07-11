require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const adminRoutes = require('./routes/admin.routes'); 
const { errorHandler } = require('./middleware/error.middleware');
const connectDB = require('./config/db');


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
 
// Database connection

connectDB();
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});