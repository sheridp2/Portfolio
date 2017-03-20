var portfolioView = {};

$('#projects-container').hide();

portfolioView.handelhandleMainNav = function () {
  $('.nav-list').on('click', '.tab', function(){
    $('.tab-content').hide()
    console.log('clicked on', this);
    $('#' + $(this).data('content')).fadeIn();
  })
};

portfolioView.handelhandleMainNav();
