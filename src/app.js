const app = require('express')();
const repositoryRoutes = require('./repository/repository.routes');
app.use(repositoryRoutes);
module.exports = app;