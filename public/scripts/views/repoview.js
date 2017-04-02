'use strict';

(function(module) {
  const repoView = {};

  const ui = function() {
    let $skills = $('.skills-container');

    // $skills.find('ul').empty();

  };

  const render = Handlebars.compile($('#skills-template').text());

  ui();
  repoView.index = function() {
    return repos.all.map(function(repos){
      $('#skills-list').append(repos.name);
  })
}
  module.repoView = repoView;
})(window);
