'use strict';

(function(module){

  const blogController = {};

  blogController.init = function () {
    $('.tab-content').hide()
    $('#blog-container').fadeIn();
  };

  module.blogController = blogController;
})(window)
