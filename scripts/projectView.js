'use strict';

function Project (projectsData){
  this.title = projectsData.title;
  this.image = projectsData.image;
  this.projectUrl = projectsData.projectUrl;
}
// var projOne = new Project(projectsInfo[0]);
// console.log(projOne);

Project.prototype.toHtml = function(){
  var $newProject = $('div.projectsTemplate').clone()
  $newProject.removeClass('projectstemplate');

  
}
