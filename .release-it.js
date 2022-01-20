module.exports = {
  hooks: {},
  git: {
    changelog: '',
    commit: true,
    commitMessage: 'chore: release v${version}',
    push: false,
    pushArgs: ['--follow-tags'],
    tag: false,
  },
  github: {
    release: false,
  },
  gitlab: {
    release: false,
  },
  npm: {
    ignoreVersion: false,
    publish: false,
  },
};
