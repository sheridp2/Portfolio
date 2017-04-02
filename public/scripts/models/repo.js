'use strict';

(function(module){
  const repos = {}

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.get('/github/user/repos?type=owner')
    .then(data => repos.all = data, err => console.log(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
