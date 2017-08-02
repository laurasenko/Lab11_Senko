$(function() {

var url = 'https://www.reddit.com/r/aww/top.json';


  $.get(url).done(function(responseBody) {

      for (var i = 1; i < 11; i++) {
        console.log(responseBody.data.children[i].data.title);
        var title = responseBody.data.children[i].data.title;
        var author = responseBody.data.children[i].data.author;
        var image = responseBody.data.children[i].data.preview.images[0].source.url;
        var postUrl = responseBody.data.children[i].data.url;
        console.log (title);
        var $post = $('<div class="post">');

        $('.post').append('<h2>' + "Title:  " + title + '</h2>'
        + '<p class = "author">' + "Author:  " + author + '</p>'
        + '<img class ="image" src="' + image + '"/>' + '<br />'
        + '<a href= "' + postUrl+ '">Click here for Link</a>');


    }

  });


});
