const express = require('express');
const login = require('./router/login.router')

// ...

const app = express();

app.use(express.json());
app.use('/login', login)

// ... bora 

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
