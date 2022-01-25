const express = require('express');
const app = express();
const routes = require('./routes/todoRouter')

app.use('/', express.json(), routes)

app.listen(3000)