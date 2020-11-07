const axios = require('axios');

const urlPrefix = process.env.GITHUB_API_URL + process.env.GITHUB_ORG_PREFIX;

const getRepositoriesFromCompany = async (companyId) => {
    return axios.get(`${urlPrefix}/${companyId}${process.env.GITHUB_REPO_SUFFIX}`).then(response => response.data);
}

module.exports = {
    getRepositoriesFromCompany
}