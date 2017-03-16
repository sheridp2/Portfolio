'use strict';

function Project (projectsData){
  this.title = projectsData.title;
  this.image = projectsData.image;
  this.projectUrl = projectsData.projectUrl;
}
var projectOne = new Project(projectsInfo[0]);
console.log(projectOne);
