const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});
// async await try catch promise and callbacks
// CRUD - CREATE READ UPDATE DELETE
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
