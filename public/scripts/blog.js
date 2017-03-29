'use strict';

(function(module) {

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

  allBlogPosts.handelBlogCreate = function() {
    var newBlog;

    $('#blog-submit').click(function(){
      newBlog = new BlogPosts ({
        title: $('#blog-title').val(),
        author: $('#blog-author').val(),
        body: $('#blog-body').val()
      });
      $('#blog-container > article').remove();
      //This could also be a map
      allBlogPosts.push(newBlog);
      allBlogPosts.forEach(function(blog){
        blog = new BlogPosts(blog)


        $('#blog-container').append(blog.toHtml())
      })
    })
  };

  allBlogPosts.handelBlogCreate();
  module.BlogPosts = BlogPosts
})(window);
