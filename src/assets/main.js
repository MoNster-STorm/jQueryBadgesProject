$(function() {

  // your code will go here
  jQuery.ajax({
    url :'https://www.codeschool.com/users/2760097.json',
    dataType:'jsonp',
    success : function(response){
      for (var badge of response.courses.completed) {
        $("#badges").append("<div class = course></div>");
        this.find('.course').append('<h3>'+badge.title+'</h3>');
      }
    }
  });

});
