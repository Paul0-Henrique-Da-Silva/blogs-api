const express = require('express');
const login = require('./router/login.router');
const user = require('./router/user.router');
const category = require('./router/category.router');
// ...

const app = express();

app.use(express.json());
app.use('/login', login);
app.use('/user', user);
app.use('/categories', category);

// ... bora 

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
