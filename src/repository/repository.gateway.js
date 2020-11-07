const axios = require('axios');

const urlPrefix = process.env.GITHUB_API_URL + process.env.GITHUB_ORG_PREFIX;

const getRepositoriesFromCompany = async (companyId) => {
    return axios.get(`${urlPrefix}/${companyId}${process.env.GITHUB_REPO_SUFFIX}?sort=updated`).then(response => response.data);
}

const getSingleRepository = async (companyId, repositoryId) => {
    console.log(`${process.env.GITHUB_API_URL}${process.env.GITHUB_REPO_SUFFIX}/${companyId}/${repositoryId}`);
    return axios.get(`${process.env.GITHUB_API_URL}${process.env.GITHUB_REPO_SUFFIX}/${companyId}/${repositoryId}`).then(response => response.data);
}

module.exports = {
    getRepositoriesFromCompany,
    getSingleRepository
}