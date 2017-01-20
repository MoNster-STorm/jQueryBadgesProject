$(function() {

  // your code will go here
  jQuery.ajax({
    url :'https://www.codeschool.com/users/2760097.json',
    dataType:'jsonp',
    success : function(response){
      for (var badge of response.courses.completed) {
        var badges = $("#badges");
        badges.append("<div></div>");
        badges.find("div").addClass("course");
        badges.find(".course").append("<h3>"+badge.title+"</h3>");
      }
    }
  });

});
