const repositoryGateway = require('./repository.gateway');
const repositoryRepository = require('./repository.repository');

const getCompanyRepositories = async (companyId) => {
    const repos =  await repositoryGateway.getRepositoriesFromCompany(companyId);
    return repos.map(repo => {
        return { name: repo.name, owner: { login: repo.owner.login }, updated_at: repo.updated_at }
    });
}

const getRepository = async (companyId, repositoryId) => {
    return repositoryGateway.getSingleRepository(companyId, repositoryId)
}

const getTrackedRepositories = async () => {
    return repositoryRepository.listRepositories();
}

const saveRepository = async (repo) => {
    return repositoryRepository.saveRepository(repo);
}

module.exports = {
    getCompanyRepositories,
    getRepository,
    getTrackedRepositories,
    saveRepository
}