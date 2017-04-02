'use strict';

(function(module) {

  let allProjects = [];

  $('.tab-content').hide();
  $('#about-me').show();

  function Project (projectsData){
    this.title = projectsData.title;
    this.image = projectsData.image;
    this.projectUrl = projectsData.projectUrl;
  }

  Project.prototype.toHtml = function(){
    let source = $('#articles-template').html();

    let templateRender = Handlebars.compile(source);

    return templateRender(this);
  }

  function handelShowProjects(){
    $.getJSON('/Data/projectsData.json')
    .then(function(data){
      data.forEach(function(projectsData){
        //This could be a map!
        allProjects.push(new Project(projectsData));
      })
      allProjects.forEach(function(a){
        $('#projects-container').append(a.toHtml());
      });
    }, function(err) {
    });
  }

  handelShowProjects();

  module.Project = Project;
})(window)
