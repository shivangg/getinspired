$(document).ready(function(){

$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
  $(".quote").append(a[0].content + "<p class='author'>&mdash; " + a[0].title + "</p>");
  $('.quote').hide();
  $('.quote').show(1000);
  
});
  
});


var data = $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=");

console.log(data);
