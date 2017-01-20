$(function() {

  // your code will go here
  jQuery.ajax({
    url :'https://www.codeschool.com/users/2760097.json',
    dataType:'jsonp',
    success : function(){
      for (var badge of response.courses.completed) {
        $("#badegs").appendTo("<div class = course>"+badge+"</div>");
      }
    }
  });

});
