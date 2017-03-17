'use strict';

var allProjects = [];

function Project (projectsData){
  this.title = projectsData.title;
  this.image = projectsData.image;
  this.projectUrl = projectsData.projectUrl;
}

Project.prototype.toHtml = function(){
  var $newProject = $('article.projectBox').clone().removeClass('projectBox');

  $newProject.find('h3').html(this.title);
  $newProject.find('img').attr('src', this.image);
  $newProject.find('a').attr('href', this.projectUrl);

  return $newProject;
}

projectsInfo.forEach(function(projectObject) {
  allProjects.push(new Project(projectObject));
});

console.log('after push', allProjects);

allProjects.forEach(function(a){
  $('#projectsContainer').append(a.toHtml());
});
