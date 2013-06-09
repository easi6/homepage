$(document).ready(function(){
  $('.carousel').carousel()
  $('#nav').draggable()
  $('#main-nav').scrollspy()
  var mapOptions = {
    center: new google.maps.LatLng(-34.397, 150.644),
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  var geocoder = new google.maps.Geocoder();
  var address = "364 Marin Boulevard, Jersey City, NJ, United States"
  geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
    }
  });

  $('#main-nav').bind('activate', function(){
    var text = $(this).find('li.active a').html();
    var nav = $('#nav');
    nav.removeClass("background_red background_green background_orange background_gray")
    if (text == "projects") {
      nav.addClass("background_orange");
    } else if (text == "team") {
      nav.addClass("background_green");
    } else if (text == "contact") {
      nav.addClass("background_gray");
    } else {
      nav.addClass("background_red");
    }
  });

});
