// index.js
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json());


// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for serving the login page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});


// index.js (continued)
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Replace this with your actual login validation logic
    if (username === 'admin' && password === 'password') {
        res.send({ success: true });
    } else {
        res.status(401).send({ success: false, message: 'Invalid username or password' });
    }
});

// Route for serving the dashboard page
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

