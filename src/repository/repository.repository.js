const { mongoose } = require('../mongodb.config');

const Repository = mongoose.model('Repository', { any: {} });

const saveRepository = async (repo) => {
    const newRepo = new Repository();
    for (const key of Object.keys(repo)) {
        newRepo[key] = repo[key];
    }
    return newRepo.save();
}

const listRepositories = async () => {
    return Repository.find();
}

module.exports = {
    listRepositories,
    saveRepository
}
