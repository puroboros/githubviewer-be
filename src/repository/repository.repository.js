const { mongoose } = require('../mongodb.config');

const Repository = mongoose.model('Repository', {
    id: Number,
    node_id: String,
    name: String,
    full_name: String,
    owner: {  },
    private: Boolean,
    html_url: String,
    description: String,
    fork: Boolean,
    url: String,
    archive_url: String,
    assignees_url: String,
    blobs_url: String,
    branches_url: String,
    collaborators_url: String,
    comments_url: String,
    commits_url: String,
    compare_url: String,
    contents_url: String,
    contributors_url: String,
    deployments_url: String,
    downloads_url: String,
    events_url: String,
    forks_url: String,
    git_commits_url: String,
    git_refs_url: String,
    git_tags_url: String,
    git_url: String,
    issue_comment_url: String,
    issue_events_url: String,
    issues_url: String,
    keys_url: String,
    labels_url: String,
    languages_url: String,
    merges_url: String,
    milestones_url: String,
    notifications_url: String,
    pulls_url: String,
    releases_url: String,
    ssh_url: String,
    stargazers_url: String,
    statuses_url: String,
    subscribers_url: String,
    subscription_url: String,
    tags_url: String,
    teams_url: String,
    trees_url: String,
    clone_url: String,
    mirror_url: String,
    hooks_url: String,
    svn_url: String,
    homepage: String,
    language: String,
    forks_count: Number,
    stargazers_count: Number,
    watchers_count: Number,
    size: Number,
    default_branch: String,
    open_issues_count: Number,
    is_template: Boolean,
    topics: [String],
    has_issues: Boolean,
    has_projects: Boolean,
    has_wiki: Boolean,
    has_pages: Boolean,
    has_downloads: Boolean,
    archived: Boolean,
    disabled: Boolean,
    visibility: String,
    pushed_at: String,
    created_at: String,
    updated_at: String,
    permissions: {  },
    template_repository: String,
    temp_clone_token: String,
    delete_branch_on_merge: Boolean,
    subscribers_count: Number,
    network_count: Number,
    license: {  }
});

const saveRepository = async (repo) => {
    const newRepo = new Repository(repo);
    return newRepo.save();
}

const listRepositories = async () => {
    return Repository.find();
}

module.exports = {
    listRepositories,
    saveRepository
}
