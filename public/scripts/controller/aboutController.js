'use strict';

(function(module){

  const aboutController = {};

  aboutController.init = function () {
    $('.tab-content').hide()
    $('#about-me').fadeIn();

    repos.requestRepos(repoView.index);

  };

  module.aboutController = aboutController;
})(window)
