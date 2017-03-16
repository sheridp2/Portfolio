'use strict';

function Project (projectsData){
  this.title = projectsData.title;
  this.image = projectsData.image;
  this.projectUrl = projectsData.projectUrl;
}
// var projOne = new Project(projectsInfo[1]);
// console.log(projOne);

Project.prototype.toHtml = function(){
  var $newProject = $('artice.projectBox').clone().removeClass('projectBox');

  $newProject.find('h2:first').html(this.title);
  $newProject.find('a.img').html(this.image);
  $newProject.find('a').attr('href', this.projectUrl);

  return $newProject;
}
