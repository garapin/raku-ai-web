const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    title: 'RAKU AI - Your Intelligent Assistant'
  });
});

// Privacy Policy
app.get('/privacy-policy', (req, res) => {
  res.render('privacy-policy', {
    title: 'Privacy Policy - RAKU AI'
  });
});

// Terms and Conditions
app.get('/terms-conditions', (req, res) => {
  res.render('terms-conditions', {
    title: 'Terms and Conditions - RAKU AI'
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 