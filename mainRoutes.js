const path = require('path');
const express = require('express');
const mainRouter = express.Router();
const login = require('./s_login');

mainRouter.use('/', express.static(path.join(__dirname, 'public','resources')));

mainRouter.use(express.json());

mainRouter.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

mainRouter.get('/signup_login', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'signup_login.html'));
});

mainRouter.get('/dashboard', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'lecturer_dashboard.html'));
});

mainRouter.get('/student_portal_page', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'student_portal_page.html'));
});

//Route to handle login POST
mainRouter.post('/login', async  function(req,res){
  res.type('application/json');
  //login is the MODULE we defined in login.js, and checkCredentials public by exporting it from login.js
  const result = await login.checkCredentials(req.body.userName, req.body.password);
  res.send(result);
  
});

module.exports = mainRouter;
