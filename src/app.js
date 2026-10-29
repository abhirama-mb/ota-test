const express = require('express');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

app.get('/', (req, res) => {
res.json({ message: "Welcome to the Travel Booking API" });
});

app.get('/health', (req, res) => {
res.json({ status: "OK" });
});



app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});

modules.exports = app