$(function() {

  // your code will go here
  jQuery.ajax({
    url :'https://www.codeschool.com/users/2760097.json',
    dataType:'jsonp',
    success : function(response){
      for (var badge of response.courses.completed) {
        var badges = $("#badges");
        badges.append("<div></div>");
        badges.find("div:last").addClass("course");
        badges.find(".course:last").append("<h3>"+badge.title+"</h3>");
        var badgeImage = $('<img />');
        badgeImage.attr('src',badge.badge);
        badges.find(".course:last").append(badgeImage);
        var badgeButton = $('<a />');
        badgeButton.attr('href',badge.url);
        badgeButton.attr('target','_blank');
        badgeButton.addClass('btn btn-primary');
        badges.find(".course:last").append(badgeButton);
      }
    }
  });

});
