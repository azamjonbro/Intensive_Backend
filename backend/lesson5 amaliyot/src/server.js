const express = require('express');

const app = express();

const connectDB = require('./config/dbconnection');
const userRouter = require('./router/user.router');
const cors = require("cors")
require('dotenv').config();

// Connect to MongoDB
connectDB();

app.use(cors())
// Middleware to parse JSON requests
app.use(express.json());
// User routes
app.use('/api', userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});