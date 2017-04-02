'use strict';
(function(module) {

  function Skills (skillsData){
    this.skill = skillsData.skill;
    this.category = skillsData.category;
  }

  Skills.prototype.toHtml = function(){
    let source = $('#skills-template').html();
    let templateRender = Handlebars.compile(source);
    return templateRender(this);
  }
  allSkills.forEach(function(skill){
    skill = new Skills(skill)

    $('#skills-list').append(skill.toHtml())
  })

  module.Skills = Skills;
})(window)
