const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT ;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.post('/data', async (req, res) => {
  try {
   if (!req.body.aoo) {
    return res.status(400).send('Bad Request: Name is required');
   }
   res.status(200).send(`Hello, ${req.body.name}`);
   
  } catch (error) {
    res.status(500).send('Server Error: '+error.message);
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});