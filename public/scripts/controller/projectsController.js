'use strict';

(function(module){

  const projectsController = {};

  projectsController.init = function () {
    $('.tab-content').hide()
    $('#projects-container').fadeIn();
  };

  module.projectsController = projectsController;
})(window)
