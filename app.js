'use strict';
$(document).ready(function(){
  $('.nav-menu').hide();
  $('.hamburger').click(function(){
    $('.nav-menu').slideToggle('slow');
  });
});
