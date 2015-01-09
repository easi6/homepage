$(document).ready(function(){
  $('#collapse-nav ol.nav li a').click(function(e) {
    $('#collapse-nav').collapse('toggle');
  });

  $('#collapse-nav').on('shown.bs.collapse', function() {
    $('body').scrollspy({target: '#main-nav-mobile'});
  });

  $('img.hover').hover(function(e) {
    var src = this.src.replace(/\?.*$/,"")+"?x="+Math.random();
    this.src = src;
  });

  $('#main-nav').scrollspy();
  $('#main-nav-mobile').scrollspy();

  $('li.item.next').click(function(e) {
    $('#easi6-modal').modal();
  });

  $('li.item.vox').click(function(e) {
    $('#vox-modal').modal();
  });

  $('li.item.minam').click(function(e) {
    $('#minam-modal').modal();
  });

  $('li.item.tomoni').click(function(e) {
    $('#tomoni-modal').modal();
  });

  $('li.item.dnd').click(function(e) {
    $('#dnd-modal').modal();
  });

  var isMapLoaded = false;
  $('li.item.map a').click(function(e) {
    if (!isMapLoaded) {
      loadMap();
      isMapLoaded = true;
    }
    $('#map-modal').modal();
    return false;
  });
});

var mapOptions = {
  center: new google.maps.LatLng(37.472933, 127.046906),
  zoom: 16,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};

function loadMap()
{
  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

  var geocoder = new google.maps.Geocoder();
  var address = "서울특별시 서초구 양재2동 290-2";
  geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          icon: '/images/icn_map.png'
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
    }
  });
}
