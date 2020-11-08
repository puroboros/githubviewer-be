const axios = require('axios');

const urlPrefix = process.env.GITHUB_API_URL + process.env.GITHUB_ORG_PREFIX;

const getRepositoriesFromCompany = async (companyId) => {
    return axios.get(`${urlPrefix}/${companyId}${process.env.GITHUB_REPO_SUFFIX}?sort=updated`).then(response => response.data);
}

const getSingleRepository = async (companyId, repositoryId) => {
    console.log(`${process.env.GITHUB_API_URL}${process.env.GITHUB_REPO_SUFFIX}/${companyId}/${repositoryId}`);
    const repositoryPromise = axios.get(`${process.env.GITHUB_API_URL}${process.env.GITHUB_REPO_SUFFIX}/${companyId}/${repositoryId}`).then(response => response.data);
    const commitsPromise = axios.get(`${process.env.GITHUB_API_URL}${process.env.GITHUB_REPO_SUFFIX}/${companyId}/${repositoryId}/commits`).then(response => {
        return { commits: response.data }
    });
    return Promise.all([repositoryPromise, commitsPromise]);
}

module.exports = {
    getRepositoriesFromCompany,
    getSingleRepository
}