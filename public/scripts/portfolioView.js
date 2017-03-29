'use strict';
var portfolioView = [];

//make this an IIFE
portfolioView.handelhandleMainNav = function () {
  $('.nav-list').on('click', '.tab', function(){
    $('.tab-content').hide()
    $('#' + $(this).data('content')).fadeIn();
  })
};


portfolioView.handelhandleMainNav();
