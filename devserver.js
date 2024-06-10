// Import required modules
const express = require('express');
const app = express();
const PORT = 3000; // Port number for the server

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, World! This is a basic Express server for development.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
