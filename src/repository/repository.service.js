const repositoryGateway = require('./repository.gateway');

const getCompanyRepositories = async (companyId) => {
    const repos =  await repositoryGateway.getRepositoriesFromCompany(companyId);
    return repos.map(repo => {
        return { name: repo.name, owner: { login: repo.owner.login }, updated_at: repo.updated_at }
    });
}

const getRepository = async (companyId, repositoryId) => {
    return repositoryGateway.getSingleRepository(companyId, repositoryId)
}

module.exports = {
    getCompanyRepositories,
    getRepository
}