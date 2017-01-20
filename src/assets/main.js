$(function() {

  // your code will go here
  jQuery.ajax({
    url :'https://www.codeschool.com/users/2760097.json',
    dataType:'jsonp',
    success : function(response){
      for (var badge of response.courses.completed) {
        $("#badges").appendTo("<div class = course>"+badge+"</div>");
      }
    }
  });

});
