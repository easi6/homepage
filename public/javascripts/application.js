$(document).ready(function(){

  $('img.hover').hover(function(e) {
    var src = this.src.replace(/\?.*$/,"")+"?x="+Math.random();
    console.log(src);
    this.src = src;
  });

  $('#main-nav').scrollspy()

  /*
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
  */
});
