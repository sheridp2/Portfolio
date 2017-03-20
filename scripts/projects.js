'use strict';

var allProjects = [];

function Project (projectsData){
  this.title = projectsData.title;
  this.image = projectsData.image;
  this.projectUrl = projectsData.projectUrl;
}

Project.prototype.toHtml = function(){
  var source = $('#articles-template').html();

  var templateRender = Handlebars.compile(source);

  return templateRender(this);
}

projectsInfo.forEach(function(projectObject) {
  allProjects.push(new Project(projectObject));
});

console.log('after push', allProjects);

allProjects.forEach(function(a){
  $('#projects-container').append(a.toHtml());
});
