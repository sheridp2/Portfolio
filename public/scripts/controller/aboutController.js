'use strict';

(function(module){

  const aboutController = {};

  aboutController.init = function () {
    $('.tab-content').hide()
    $('#about-me').fadeIn();
  };

  module.aboutController = aboutController;
})(window)
