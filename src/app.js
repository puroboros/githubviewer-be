const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const repositoryRoutes = require('./repository/repository.routes');

app.use(bodyParser.urlencoded({ extended: false, parameterLimit: 50000 }));
app.use(bodyParser.json({}));
app.use(cors());
app.use(repositoryRoutes);
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});
module.exports = app;