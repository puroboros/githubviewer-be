const express = require('express');
const router = express.Router();

const repositoryService = require('./repository.service');

const wrapper = fn => (...args) => {
    fn(...args).catch(args[2]);
};

router.get('/repositories/:orgName', wrapper(async (req, res) => {
    res.send(await repositoryService.getCompanyRepositories(req.params.orgName));
}));

router.get('/repositories/:orgName/:repoName', wrapper(async (req, res) => {
    res.send(await repositoryService.getRepository(req.params.orgName, req.params.repoName));
}));

router.put('/tracked', wrapper( async (req, res) => {
    res.send(await repositoryService.saveRepository(req.body));
}));
router.get('/tracked', wrapper( async (req, res) => {
    res.send(await repositoryService.getTrackedRepositories());
}));

module.exports = router;