'use strict';

var allProjects = [];

$('.tab-content').hide();
$('#about-me').show();

function Project (projectsData){
  this.title = projectsData.title;
  this.image = projectsData.image;
  this.projectUrl = projectsData.projectUrl;
};

Project.prototype.toHtml = function(){
  var source = $('#articles-template').html();

  var templateRender = Handlebars.compile(source);

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

// Maybe put on a seperate JS?

//blog post constructor
function BlogPosts (blogData){
  this.title = blogData.title;
  this.author = blogData.author;
  this.body = blogData.body;
}

BlogPosts.prototype.toHtml = function(){
  var source = $('#blog-template').html();

  var templateRender = Handlebars.compile(source);

  return templateRender(this);
}

blogPosts.handelBlogCreate = function() {
  var newBlog;

  $('#blog-submit').click(function(){
    newBlog = new BlogPosts ({
      title: $('#blog-title').val(),
      author: $('#blog-author').val(),
      body: $('#blog-body').val()
    });
    $('#blog-container > article').remove();
    //This could also be a map
    blogPosts.push(newBlog);
    blogPosts.forEach(function(blog){
      blog = new BlogPosts(blog)


      $('#blog-container').append(blog.toHtml())
    })
  })
};

blogPosts.handelBlogCreate();
