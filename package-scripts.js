const { series } = require('nps-utils');
const packageJSON = require('./package.json');

module.exports = {
  scripts: {
    default: 'nps start',
    version: {
      major: release('major'),
      minor: release('minor'),
      patch: release('patch'),
      pre: release('pre'),
      preToPatch: {
        script: series('nps "version.patch --no-git"', 'nps "version.patch --no-git.requireCleanWorkingDir"'),
      },
      release: {
        description: `Perform a release v${packageJSON.version}`,
        silent: true,
        script: series(`release-it --ci --git.tag=true --git.tagName="v${packageJSON.version}" --no-increment`),
      },
      release2: {
        script: series(`taggit`),
      },
    },
  },
};

function release(version) {
  return {
    description: `Perform a release by ${version.toUpperCase()}`,
    hiddenFromHelp: true,
    script: series(`release-it -V --ci -i ${version}`),
    silent: true,
  };
}
