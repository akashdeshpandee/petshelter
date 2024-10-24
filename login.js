

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const con = require('./DB_Conn.js');

const app = express();
const publicpath = path.join(__dirname, 'public');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicpath));  // Serve static files from 'public' directory

// Routes
app.get('/Home', (req, res) => {
    res.sendFile(`${publicpath}/petshelter.html`);
});

app.get('/Login', (req, res) => {
    res.sendFile(`${publicpath}/login.html`);
});

app.get('/Registration', (req, res) => {
    res.sendFile(`${publicpath}/Registration.html`);
});

app.post('/RegistrationValidation', (req, res) => {
    const email = req.body.email;
    const pass = req.body.psw;
    const phone = req.body.phone;

    const sql = "INSERT INTO users (email, password, phone) VALUES (?, ?, ?)";
    con.query(sql, [email, pass, phone], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Database error');
            return;
        }
        res.sendFile(`${publicpath}/home.html`);
    });
});

app.post('/LoginValidation', (req, res) => {
    const uname = req.body.username;
    const pass = req.body.password;

    const sql = 'SELECT * FROM login WHERE username = ? AND password = ?';
    con.query(sql, [uname, pass], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Database error');
            return;
        }
        if (result.length > 0) {
            // Redirect to dashboard.html after successful login
            res.sendFile(`${publicpath}/petshelter.html`);
        } else {
            // Redirect back to login.html if login fails
            res.sendFile(`${publicpath}/login.html`);
        }
    });
});

app.get('*', (req, res) => {
    res.sendFile(`${publicpath}/Pagenotfound.html`);
});

app.listen(6700, () => {
    console.log('Server is running on port 6500');
});
