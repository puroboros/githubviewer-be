const app = require('express')();
const cors = require('cors');

const repositoryRoutes = require('./repository/repository.routes');


app.use(cors());
app.use(repositoryRoutes);
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});
module.exports = app;