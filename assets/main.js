$(function() {

  // your code will go here
  jQuery.ajax({
    url :'https://www.codeschool.com/users/2760097.json',
    dataType:'jsonp',
    success : function(response){
      for (var badge of response.courses.completed) {
        var this = $("#badges");
        this.append("<div></div>");
        this.find("div").addClass("course");
        this.find(".class").append("<h3>"+badge.title+"</h3>");
      }
    }
  });

});
