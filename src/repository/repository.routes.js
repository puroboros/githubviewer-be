const express = require('express');
const router = express.Router();

const repositoryService = require('./repository.service');

router.get('/repositories/:orgId', async (req, res) => {
    res.send(await repositoryService.getCompanyRepositories(req.params.orgId));
});


module.exports = router;