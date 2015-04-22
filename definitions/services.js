// Place service container definitions here.
/**
exports.root = {
	type: 'blank-container'
};
*/

exports.elasticsearch = {
  type: 'docker',
  specific: {
    repositoryUrl: 'git@github.com:ajmckee/v5_es.git'
    }
  }
};
