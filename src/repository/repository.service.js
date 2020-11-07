const repositoryGateway = require('./repository.gateway');

const getCompanyRepositories = async (companyId) => {
    return repositoryGateway.getRepositoriesFromCompany(companyId);
}

module.exports = {
    getCompanyRepositories
}