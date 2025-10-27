const express = require('express');

const app = express();

const connectDB = require('./config/dbconnection');
const userRouter = require('./router/user.router');

require('dotenv').config();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// User routes
app.use('/api', userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});