'use strict';

(function(module) {

  function BlogPosts (blogData){
    this.title = blogData.title;
    this.author = blogData.author;
    this.body = blogData.body;
  }

  BlogPosts.prototype.toHtml = function(){
    let source = $('#blog-template').html();

    let templateRender = Handlebars.compile(source);

    return templateRender(this);
  }

  allBlogPosts.handelBlogCreate = function() {
    let newBlog;

    $('#blog-submit').click(function(){
      newBlog = new BlogPosts ({
        title: $('#blog-title').val(),
        author: $('#blog-author').val(),
        body: $('#blog-body').val()
      });
      $('#blog-container > article').remove();
      allBlogPosts.push(newBlog);
      allBlogPosts.forEach(function(blog){
        blog = new BlogPosts(blog)

        $('#blog-container').append(blog.toHtml())
        BlogPosts.numWords();
        console.log(BlogPosts.numWords());
      })
    })
  };

  BlogPosts.numWords = () => {
    return allBlogPosts.map(function(blog){
      return blog.body.split(' ').length;
    }).reduce((acc, val) => acc + val)
  };

  allBlogPosts.handelBlogCreate();
  module.BlogPosts = BlogPosts;
})(window);
